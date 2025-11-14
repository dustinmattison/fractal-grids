# 📎 Media Manager Guide

## Quick Start: Add Media to Existing Grids

**Problem**: You have a completed fractal grid but want to add images, audio, or video to specific cells.

**Solution**: Use the Media Manager tool!

---

## 🚀 Access

**URL**: http://localhost:3000/media-manager

Or click **"📎 Add Media to Existing Grid"** on the homepage.

---

## 📋 4-Step Process

### Step 1: Select Your Grid
- Choose from dropdown list of available grids
- Grid cells will appear below

### Step 2: Select Cell
- Click on any of the 9 cells shown
- Cell will highlight in pink
- Upload section appears below

### Step 3: Upload Media
- **📷 Image**: Drag & drop or click to upload (max 5MB)
- **🎧 Audio**: Drag & drop or click to upload (max 50MB)
- **🎬 Video**: Drag & drop or click to upload (max 200MB)
- Upload one, two, or all three types
- See preview of uploaded files

### Step 4: Copy & Paste Code
- Click **"✨ Generate Code"**
- Copy the generated code
- Open your grid HTML file
- Find the cell's data object
- Paste the code inside
- Save media files to correct folders
- Refresh grid to see changes!

---

## 💡 Example Workflow

### Scenario: Add podcast to Cell 2

**1. Select Grid**
```
Choose: "Violent Earth: Sacred Summits"
```

**2. Click Cell 2**
```
Cell 2 - Top-Center is selected
```

**3. Upload Audio**
```
Click audio upload area
Select: volcanic-threats-podcast.mp3
See: ✅ volcanic-threats-podcast.mp3 (8.5 MB)
```

**4. Generate & Copy Code**
```javascript
// Generated code:
audioUrl: "audio/volcanic-threats-podcast.mp3",
audioTitle: "Audio (8.5 MB)",
audioSize: "8.5 MB",
```

**5. Paste into Grid**
Open `violent-earth-sacred-summits.html`, find Cell 2:
```javascript
{
    titleEn: "Volcanic Threats",
    titleZh: "火山威胁",
    contentEn: "Dangers posed",
    contentZh: "构成的危险",
    
    // ADD THESE LINES:
    audioUrl: "audio/volcanic-threats-podcast.mp3",
    audioTitle: "Audio (8.5 MB)",
    audioSize: "8.5 MB",
    
    cellClass: ""
}
```

**6. Save Media File**
```bash
cp volcanic-threats-podcast.mp3 grids/audio/
```

**7. Refresh & Test**
```
Open grid in browser
Click Cell 2
See podcast icon and play button!
```

---

## 🎯 Key Features

### Visual Cell Selection
- ✅ See all 9 cells in 3×3 grid
- ✅ Click to select
- ✅ Center cell highlighted
- ✅ Shows current media status

### Drag & Drop Upload
- ✅ Drag files directly to upload zones
- ✅ Or click to browse
- ✅ Instant file validation
- ✅ Preview before generating code

### Smart Code Generation
- ✅ Generates exact code needed
- ✅ Proper file paths
- ✅ Correct field names
- ✅ Ready to paste

### Copy to Clipboard
- ✅ One-click copy
- ✅ Click code box to select all
- ✅ Paste directly into editor

---

## 📁 File Organization

### After Upload, Save Files Here:

```
grids/
├── your-grid.html           ← Your grid file
├── images/
│   └── your-image.jpg       ← Save images here
├── audio/
│   └── your-audio.mp3       ← Save audio here
└── videos/
    └── your-video.mp4       ← Save videos here
```

### Important:
- File names in code MUST match actual files
- Keep original filenames or update code
- Paths are relative to grid HTML file

---

## 🎨 Supported Formats

### Images
- **Formats**: JPG, PNG, WebP, SVG, GIF
- **Max Size**: 5MB
- **Recommended**: 400×300px, under 500KB

### Audio
- **Formats**: MP3, M4A, OGG, WAV
- **Max Size**: 50MB
- **Recommended**: MP3, 128kbps, 5-20MB

### Video
- **Formats**: MP4, WebM, OGG
- **Max Size**: 200MB
- **Recommended**: MP4, 720p, under 100MB

---

## 💡 Tips & Best Practices

### Before Uploading
1. **Compress files** - Use TinyPNG for images, HandBrake for video
2. **Use descriptive names** - `mount-fuji-summit.jpg` not `img1.jpg`
3. **Test files** - Make sure they play/display correctly
4. **Check sizes** - Smaller = faster loading

### When Pasting Code
1. **Find correct cell** - Match cell number/position
2. **Paste inside object** - Between the `{ }` brackets
3. **Keep commas** - Add comma after last line
4. **Save file** - Don't forget to save!

### After Adding Media
1. **Save media files** - Copy to correct folders
2. **Match filenames** - Code and actual file must match
3. **Test in browser** - Refresh and verify
4. **Check both sides** - Flip card to see Chinese side

---

## 🔧 Troubleshooting

### "File too large" error
- **Images**: Compress to under 5MB
- **Audio**: Compress to under 50MB
- **Video**: Compress to under 200MB

### Media not showing in grid
- Check file is in correct folder
- Verify filename matches code exactly
- Check file path in code
- Refresh browser (hard refresh: Cmd+Shift+R)

### Can't find cell in HTML
- Search for cell's title text
- Look in L1 array (9 cells)
- Or L2 array (81 cells in subgrids)
- Count position (0-8 for L1)

### Code doesn't work
- Check for syntax errors
- Verify commas are correct
- Make sure quotes match
- Look for missing brackets

---

## 📊 Comparison: Media Manager vs Manual

### Manual Method (Old Way)
```
1. Open HTML file in editor
2. Find cell data
3. Type out media fields
4. Type file paths manually
5. Risk of typos
6. No preview
7. Time: 5-10 minutes per cell
```

### Media Manager (New Way)
```
1. Select grid
2. Click cell
3. Upload files
4. Copy generated code
5. Paste into file
6. See preview
7. Time: 2-3 minutes per cell
```

**Result**: 50-70% faster! ✨

---

## 🎓 Use Cases

### Add Images to Text-Only Grid
- You created grid with just text
- Now want to add visual elements
- Use Media Manager for each cell
- Add images in 15-20 minutes

### Add Podcasts to Existing Content
- Grid is complete but lacks audio
- Record podcasts for key topics
- Use Media Manager to add them
- Students can listen while reading

### Enhance with Video
- Grid works but could use video
- Find or create relevant videos
- Use Media Manager to add them
- Richer learning experience

### Student Projects
- Students research topics
- Create media content
- Use Media Manager to add to grid
- No coding knowledge needed

---

## 🔄 Workflow Integration

### Complete Workflow

**Create Grid** → **Add Media** → **Deploy**

1. **Create**: Use Grid Builder for structure
2. **Add Media**: Use Media Manager for multimedia
3. **Deploy**: Save to `grids/` folder
4. **Access**: Appears on platform automatically

### Iterative Enhancement

**Version 1**: Text only
- Create grid with Grid Builder
- Deploy and test

**Version 2**: Add images
- Use Media Manager
- Add images to key cells
- Test and gather feedback

**Version 3**: Add audio/video
- Use Media Manager again
- Add podcasts and videos
- Final testing and deployment

---

## 📚 Related Tools

### Grid Builder
- **Purpose**: Create new grids from scratch
- **URL**: http://localhost:3000/builder
- **Use When**: Starting a new grid

### Media Manager
- **Purpose**: Add media to existing grids
- **URL**: http://localhost:3000/media-manager
- **Use When**: Enhancing completed grids

### Multimedia Template
- **Purpose**: Manual grid creation with media
- **File**: `grids/multimedia-template.html`
- **Use When**: Need full control/customization

---

## ✨ Summary

### What Media Manager Does
- ✅ Visual cell selection
- ✅ Drag & drop file upload
- ✅ Automatic code generation
- ✅ Copy to clipboard
- ✅ No coding required

### What You Need to Do
1. Select grid and cell
2. Upload media files
3. Copy generated code
4. Paste into grid HTML
5. Save media files to folders
6. Refresh and enjoy!

### Time Savings
- **Manual**: 5-10 min per cell
- **Media Manager**: 2-3 min per cell
- **Savings**: 50-70% faster!

---

## 🚀 Get Started Now!

1. **Open**: http://localhost:3000/media-manager
2. **Select**: Your grid from dropdown
3. **Click**: Cell to add media to
4. **Upload**: Your media files
5. **Generate**: Copy the code
6. **Paste**: Into your grid file
7. **Save**: Media files to folders
8. **Refresh**: See your enhanced grid!

**No coding. No complexity. Just enhance!** ✨

---

**Created**: November 2024  
**Version**: 1.0  
**Status**: 🟢 READY TO USE
