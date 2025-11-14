const fs = require('fs');
const path = require('path');

// File mapping: original filename -> cell number
const fileMapping = {
    // Cell 1 - Mount Fuji
    'Mount Fuji_ Sleeping Giant, Sacred Mountain.mp3': 1,
    'Mount Fuji_ Sleeping Giant, Sacred Mountain.mp4': 1,
    
    // Cell 2 - Volcanic Threats
    'Volcanoes_ Dangers and Stories from the Ring of Fire.mp3': 2,
    'Volcanoes_ Dangers and Stories from the Ring of Fire2.mp4': 2,
    
    // Cell 3 - Scientific Monitoring
    'Living with Volcanoes.mp3': 3,
    'Living with Volcanoes(1).mp4': 3,
    
    // Cell 4 - Popocatépetl
    'The Smoking Mountain_ Popocatépetl\'s Power and the People Nearby.mp3': 4,
    'The Smoking Mountain_ Popocatépetl\'s Power and the People Nearby.mp4': 4,
    
    // Cell 0 - VIOLENT EARTH (center/sun)
    'The Two Faces of Volcanoes.mp3': 0,
    'The Two Faces of Volcanoes(1).mp4': 0,
    
    // Cell 5 - Religious Significance
    'Sacred Volcanoes and Their Magic.mp3': 5,
    'Sacred Volcanoes and Their Magic.mp4': 5,
    
    // Cell 6 - Human Settlement
    'Why People Live Near Volcanoes.mp3': 6,
    'Why People Live Near Volcanoes.mp4': 6,
    
    // Cell 7 - Cultural Practices
    'Magic Mountains and the Secrets of Sacred Volcanoes(1).mp3': 7,
    'Magic Mountains and the Secrets of Sacred Volcanoes(2).mp4': 7,
    
    // Cell 8 - Pacific Ring of Fire
    // (Uses same files as Cell 2, will be handled separately)
};

const gridsDir = path.join(__dirname, 'grids');
const audioDir = path.join(gridsDir, 'audio');
const videosDir = path.join(gridsDir, 'videos');
const htmlFile = path.join(gridsDir, 'violent-earth-sacred-summits-v2.html');

console.log('🔄 Starting media file renaming process...\n');

// Track renamed files for HTML update
const renamedFiles = [];

// Function to rename files in a directory
function renameFilesInDir(dir, type) {
    console.log(`\n📁 Processing ${type} files in: ${dir}`);
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        if (file === 'README.md') return;
        
        const cellNumber = fileMapping[file];
        if (cellNumber !== undefined) {
            const newFilename = `Cell${cellNumber}-${file}`;
            const oldPath = path.join(dir, file);
            const newPath = path.join(dir, newFilename);
            
            try {
                fs.renameSync(oldPath, newPath);
                console.log(`  ✅ Renamed: ${file}`);
                console.log(`     → ${newFilename}`);
                
                renamedFiles.push({
                    old: file,
                    new: newFilename,
                    type: type
                });
            } catch (err) {
                console.error(`  ❌ Error renaming ${file}:`, err.message);
            }
        } else {
            console.log(`  ⚠️  Skipped (not in mapping): ${file}`);
        }
    });
}

// Rename audio files
renameFilesInDir(audioDir, 'audio');

// Rename video files
renameFilesInDir(videosDir, 'videos');

// Update HTML file
console.log('\n📝 Updating HTML file...');

try {
    let htmlContent = fs.readFileSync(htmlFile, 'utf8');
    
    // Create backup
    const backupFile = htmlFile.replace('.html', '.backup-before-rename.html');
    fs.writeFileSync(backupFile, htmlContent);
    console.log(`  💾 Backup created: ${path.basename(backupFile)}`);
    
    // Replace all old filenames with new ones
    renamedFiles.forEach(({old, new: newName, type}) => {
        const folder = type === 'audio' ? 'audio' : 'videos';
        const oldPath = `/${folder}/${old}`;
        const newPath = `/${folder}/${newName}`;
        
        // Replace in paths
        htmlContent = htmlContent.replace(new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPath);
    });
    
    fs.writeFileSync(htmlFile, htmlContent);
    console.log('  ✅ HTML file updated successfully');
    
} catch (err) {
    console.error('  ❌ Error updating HTML file:', err.message);
}

console.log('\n✨ Renaming complete!');
console.log(`\n📊 Summary:`);
console.log(`  - Files renamed: ${renamedFiles.length}`);
console.log(`  - HTML file updated: violent-earth-sacred-summits-v2.html`);
console.log(`  - Backup created: violent-earth-sacred-summits-v2.backup-before-rename.html`);
console.log('\n🎉 All media files now have Cell# prefixes!');
console.log('   Students can easily identify which files belong to which cells.\n');
