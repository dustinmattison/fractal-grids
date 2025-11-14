const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (increased limit for large video files)
app.use(express.json({ limit: '300mb' }));

// Serve static files from public directory
app.use(express.static('public'));

// Serve static files from grids directory (for media files)
app.use('/grids', express.static(path.join(__dirname, 'grids')));

// API endpoint to list all available grids
app.get('/api/grids', (req, res) => {
  const gridsDir = path.join(__dirname, 'grids');
  
  // Ensure grids directory exists
  if (!fs.existsSync(gridsDir)) {
    fs.mkdirSync(gridsDir);
  }
  
  fs.readdir(gridsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read grids directory' });
    }
    
    // Filter for HTML files only, excluding backups and hidden files
    const htmlFiles = files.filter(file => 
      file.endsWith('.html') && 
      !file.startsWith('.') && 
      !file.includes('.backup.')
    );
    
    // Extract metadata from each file
    const grids = htmlFiles.map(file => {
      const filePath = path.join(gridsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract title from HTML
      const titleMatch = content.match(/<title>(.*?)<\/title>/);
      const title = titleMatch ? titleMatch[1] : file.replace('.html', '');
      
      // Extract description if available
      const descMatch = content.match(/<meta name="description" content="(.*?)">/);
      const description = descMatch ? descMatch[1] : '';
      
      return {
        id: file.replace('.html', ''),
        filename: file,
        title: title,
        description: description,
        url: `/grid/${file.replace('.html', '')}`
      };
    });
    
    res.json(grids);
  });
});

// Serve individual grid pages
app.get('/grid/:gridId', (req, res) => {
  const gridId = req.params.gridId;
  const filePath = path.join(__dirname, 'grids', `${gridId}.html`);
  
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Error loading grid');
      }
    });
  } else {
    res.status(404).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Grid Not Found</title>
        <style>
          body {
            font-family: Georgia, serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #f5f5f5;
          }
          .error-container {
            text-align: center;
            padding: 40px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          h1 { color: #e74c3c; margin-bottom: 20px; }
          a { color: #3498db; text-decoration: none; font-weight: bold; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="error-container">
          <h1>Grid Not Found</h1>
          <p>The fractal grid "${gridId}" does not exist.</p>
          <p><a href="/">← Back to Grid Library</a></p>
        </div>
      </body>
      </html>
    `);
  }
});

// Grid Builder route
app.get('/builder', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'grid-builder.html'));
});

// Media Manager route
app.get('/media-manager', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'media-manager.html'));
});

// API endpoint to read grid file content
app.get('/api/grid-content/:gridId', (req, res) => {
  const gridId = req.params.gridId;
  const filePath = path.join(__dirname, 'grids', `${gridId}.html`);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Grid file not found' });
  }
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    res.json({ content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to read grid file' });
  }
});

// API endpoint to update grid file with media
app.post('/api/update-cell-media', (req, res) => {
  const { gridId, cellLevel, cellIndex, mediaData } = req.body;
  
  if (!gridId || !cellLevel || cellIndex === undefined || !mediaData) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }
  
  const filePath = path.join(__dirname, 'grids', `${gridId}.html`);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Grid file not found' });
  }
  
  try {
    // Create backup
    const backupPath = path.join(__dirname, 'grids', `.${gridId}.backup.html`);
    fs.copyFileSync(filePath, backupPath);
    
    // Read current content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the contentData section
    const dataMatch = content.match(/const contentData = \{[\s\S]*?\n\s*\};/);
    if (!dataMatch) {
      return res.status(500).json({ error: 'Could not find contentData in file' });
    }
    
    // Parse the data structure (simplified approach)
    // In production, you'd want a more robust parser
    const dataSection = dataMatch[0];
    
    // Build media code to insert
    let mediaCode = '';
    if (mediaData.image) {
      mediaCode += `\n                image: "${mediaData.image}",`;
      mediaCode += `\n                imageAlt: "${mediaData.imageAlt || ''}",`;
    }
    if (mediaData.audioUrl) {
      mediaCode += `\n                audioUrl: "${mediaData.audioUrl}",`;
      mediaCode += `\n                audioTitle: "${mediaData.audioTitle || ''}",`;
      if (mediaData.audioSize) {
        mediaCode += `\n                audioSize: "${mediaData.audioSize}",`;
      }
    }
    if (mediaData.videoUrl) {
      mediaCode += `\n                videoUrl: "${mediaData.videoUrl}",`;
      mediaCode += `\n                videoTitle: "${mediaData.videoTitle || ''}",`;
      if (mediaData.videoSize) {
        mediaCode += `\n                videoSize: "${mediaData.videoSize}",`;
      }
      if (mediaData.videoPoster) {
        mediaCode += `\n                videoPoster: "${mediaData.videoPoster}",`;
      }
    }
    
    // For L1 cells, find and update the specific cell
    if (cellLevel === 'L1') {
      // Find L1 array
      const l1Match = content.match(/L1:\s*\[([\s\S]*?)\],\s*L2:/);
      if (l1Match) {
        let l1Content = l1Match[1];
        
        // Split into cells - improved pattern to handle multi-line cells
        const cells = [];
        let braceCount = 0;
        let currentCell = '';
        let inCell = false;
        
        for (let i = 0; i < l1Content.length; i++) {
          const char = l1Content[i];
          
          if (char === '{') {
            if (braceCount === 0) {
              inCell = true;
              currentCell = '';
            }
            braceCount++;
          }
          
          if (inCell) {
            currentCell += char;
          }
          
          if (char === '}') {
            braceCount--;
            if (braceCount === 0 && inCell) {
              cells.push(currentCell);
              inCell = false;
            }
          }
        }
        
        if (cellIndex < cells.length) {
          let targetCell = cells[cellIndex];
          
          // Remove existing media fields if any
          targetCell = targetCell.replace(/,?\s*image:\s*"[^"]*"/g, '');
          targetCell = targetCell.replace(/,?\s*imageAlt:\s*"[^"]*"/g, '');
          targetCell = targetCell.replace(/,?\s*audioUrl:\s*"[^"]*"/g, '');
          targetCell = targetCell.replace(/,?\s*audioTitle:\s*"[^"]*"/g, '');
          targetCell = targetCell.replace(/,?\s*audioSize:\s*"[^"]*"/g, '');
          targetCell = targetCell.replace(/,?\s*videoUrl:\s*"[^"]*"/g, '');
          targetCell = targetCell.replace(/,?\s*videoTitle:\s*"[^"]*"/g, '');
          targetCell = targetCell.replace(/,?\s*videoSize:\s*"[^"]*"/g, '');
          targetCell = targetCell.replace(/,?\s*videoPoster:\s*"[^"]*"/g, '');
          
          // Insert new media code before cellClass or closing brace
          const insertPoint = targetCell.lastIndexOf('cellClass:');
          if (insertPoint !== -1) {
            targetCell = targetCell.slice(0, insertPoint) + mediaCode + ' ' + targetCell.slice(insertPoint);
          } else {
            // Insert before closing brace
            targetCell = targetCell.slice(0, -1) + mediaCode + ' }';
          }
          
          // Replace in content
          content = content.replace(cells[cellIndex], targetCell);
        }
      }
    }
    
    // Write updated content
    fs.writeFileSync(filePath, content, 'utf8');
    
    res.json({ 
      success: true, 
      message: 'Cell updated successfully',
      backupCreated: true
    });
    
  } catch (error) {
    console.error('Error updating grid:', error);
    res.status(500).json({ error: 'Failed to update grid file: ' + error.message });
  }
});

// API endpoint to save media files
app.post('/api/save-media-file', (req, res) => {
  const { filename, data, type } = req.body;
  
  if (!filename || !data || !type) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }
  
  const typeFolder = type === 'image' ? 'images' : type === 'audio' ? 'audio' : 'videos';
  const targetDir = path.join(__dirname, 'grids', typeFolder);
  
  // Ensure directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  const filePath = path.join(targetDir, filename);
  
  try {
    // Handle base64 data for all media types
    if (type === 'image') {
      const base64Data = data.replace(/^data:image\/\w+;base64,/, '');
      fs.writeFileSync(filePath, base64Data, 'base64');
    } else if (type === 'audio') {
      const base64Data = data.replace(/^data:audio\/\w+;base64,/, '');
      fs.writeFileSync(filePath, base64Data, 'base64');
    } else if (type === 'video') {
      const base64Data = data.replace(/^data:video\/\w+;base64,/, '');
      fs.writeFileSync(filePath, base64Data, 'base64');
    }
    
    res.json({ success: true, path: `${typeFolder}/${filename}` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save file: ' + error.message });
  }
});

// Root route serves the landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🌐 Fractal Grids Platform running!`);
  console.log(`\n📍 Local access: http://localhost:${PORT}`);
  console.log(`📍 Network access: http://[your-ip]:${PORT}`);
  console.log(`\n💡 To find your IP address, run: ipconfig getifaddr en0 (Mac) or ipconfig (Windows)\n`);
});
