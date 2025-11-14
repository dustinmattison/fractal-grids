# 🎬 Multimedia Fractal Grid - Quick Reference

## What's New

The `multimedia-template.html` file includes support for:
- 🖼️ **Images** in cells
- 🎧 **Audio/Podcast** files with play and download
- 🎬 **Video** files with play and download
- ⬇️ **Download buttons** for offline access

## File Organization

```
grids/
├── multimedia-template.html    ← Enhanced template
├── images/                     ← Put image files here
│   ├── mount-fuji.jpg
│   ├── fuji-prominence.jpg
│   └── monitoring-thumbnail.jpg
├── audio/                      ← Put audio/podcast files here
│   ├── volcanic-threats-podcast.mp3
│   └── fuji-geography.mp3
└── videos/                     ← Put video files here
    ├── monitoring-systems.mp4
    └── fuji-aerial-view.mp4
```

## Adding Multimedia to Cells

### 1. Image Only
```javascript
{
    titleEn: "Mount Fuji",
    titleZh: "富士山",
    contentEn: "Japan's sacred mountain",
    contentZh: "日本的神圣山脉",
    descEn: "3,776m elevation",
    descZh: "海拔3,776米",
    
    image: "images/mount-fuji.jpg",
    imageAlt: "Mount Fuji snow-capped peak",
    
    cellClass: ""
}
```

### 2. Audio/Podcast Only
```javascript
{
    titleEn: "Volcanic Threats",
    titleZh: "火山威胁",
    contentEn: "Understanding the dangers",
    contentZh: "了解危险",
    
    audioUrl: "audio/volcanic-threats-podcast.mp3",
    audioTitle: "Expert Interview (12 min)",
    audioSize: "8.5 MB",  // Optional
    
    cellClass: ""
}
```

### 3. Video Only
```javascript
{
    titleEn: "Monitoring Systems",
    titleZh: "监测系统",
    contentEn: "Technology overview",
    contentZh: "技术概述",
    
    videoUrl: "videos/monitoring-systems.mp4",
    videoTitle: "Seismic Technology (8 min)",
    videoSize: "45 MB",  // Optional
    videoPoster: "images/monitoring-thumbnail.jpg",  // Optional
    
    cellClass: ""
}
```

### 4. Everything Combined
```javascript
{
    titleEn: "Complete Study",
    titleZh: "完整研究",
    contentEn: "Multimedia exploration",
    contentZh: "多媒体探索",
    
    image: "images/study.jpg",
    imageAlt: "Study overview",
    
    audioUrl: "audio/podcast.mp3",
    audioTitle: "Audio Commentary (15 min)",
    audioSize: "12 MB",
    
    videoUrl: "videos/documentary.mp4",
    videoTitle: "Video Documentary (10 min)",
    videoSize: "75 MB",
    videoPoster: "images/doc-thumb.jpg",
    
    cellClass: ""
}
```

## Media File Guidelines

### Images
- **Format**: JPG, PNG, or WebP
- **Size**: Max 500KB (compress first!)
- **Dimensions**: 400x300px recommended
- **Naming**: Descriptive names (e.g., `mount-fuji-summit.jpg`)

### Audio
- **Format**: MP3 (recommended), M4A, or OGG
- **Size**: 5-20 MB typical for 10-15 min podcast
- **Bitrate**: 128kbps for voice, 192kbps for music
- **Naming**: Include topic (e.g., `volcanic-threats-interview.mp3`)

### Video
- **Format**: MP4 (H.264) recommended
- **Size**: Keep under 100 MB if possible
- **Resolution**: 720p (1280x720) for balance
- **Length**: 5-10 minutes ideal
- **Naming**: Descriptive (e.g., `eruption-simulation.mp4`)

## Student Features

### Viewing Media
- **Images**: Display automatically at top of cell
- **Audio**: Click 🎧 icon → Click ▶️ Play button
- **Video**: Click 🎬 icon → Click ▶️ Play button

### Downloading for Offline
- Click ⬇️ button next to any media
- File downloads to student's device
- Works offline after download

### Both Sides (English/Chinese)
- Media appears on both front and back of card
- Same files, localized button text
- Flip card to see Chinese interface

## Quick Start

### 1. Copy the Template
```bash
cp multimedia-template.html my-new-grid.html
```

### 2. Add Your Media Files
```bash
# Add images
cp your-image.jpg images/

# Add audio
cp your-podcast.mp3 audio/

# Add video
cp your-video.mp4 videos/
```

### 3. Update Cell Data
Edit `my-new-grid.html` and add media fields to your cells:
```javascript
image: "images/your-image.jpg",
audioUrl: "audio/your-podcast.mp3",
videoUrl: "videos/your-video.mp4"
```

### 4. Test Locally
Open `my-new-grid.html` in your browser and verify:
- ✅ Images display correctly
- ✅ Audio plays when clicked
- ✅ Video plays when clicked
- ✅ Download buttons work
- ✅ Both English and Chinese sides work

### 5. Deploy to Platform
```bash
# File is already in grids/ folder
# Refresh http://localhost:3000 to see it!
```

## Examples in Template

The template includes three examples:

1. **Mount Fuji (L1)** - Image only
2. **Volcanic Threats (L1)** - Audio podcast only
3. **Scientific Monitoring (L1)** - Video only
4. **Geographical Prominence (L2)** - All three types combined

## Tips & Best Practices

### For Images
- Use high-quality but compressed images
- Add descriptive `imageAlt` text for accessibility
- Consider using WebP format for smaller file sizes

### For Audio
- Record in quiet environment
- Keep episodes 5-15 minutes
- Include duration in `audioTitle`
- Compress to 128kbps for voice content

### For Video
- Use 720p resolution (not 1080p or 4K)
- Compress before adding to grid
- Add poster image for better UX
- Keep videos under 10 minutes

### For Classroom Use
- Test all media before class
- Provide download links for large files
- Consider USB/SD card distribution for videos
- Warn students about data usage on mobile

## Troubleshooting

### Media Not Displaying
- Check file path is correct (case-sensitive!)
- Verify file exists in correct folder
- Check browser console for errors

### Audio/Video Won't Play
- Verify file format (MP3 for audio, MP4 for video)
- Check file isn't corrupted
- Try different browser
- Check file permissions

### Download Not Working
- Ensure file path is correct
- Check browser download settings
- Try right-click → Save As

### File Too Large
- Compress images: Use TinyPNG or Squoosh
- Compress audio: Use Audacity or ffmpeg
- Compress video: Use HandBrake or ffmpeg

## Resources

### Free Media Sources
- **Images**: Unsplash, Pexels, Wikimedia Commons
- **Audio**: Free Music Archive, ccMixter
- **Video**: Pexels Videos, Pixabay Videos

### Compression Tools
- **Images**: TinyPNG, ImageOptim, Squoosh.app
- **Audio**: Audacity (free), ffmpeg
- **Video**: HandBrake (free), ffmpeg

### File Hosting (Optional)
- **Local**: Best for classroom (offline)
- **Cloud**: Google Drive, Dropbox (requires internet)
- **CDN**: Cloudinary, imgix (for large deployments)

## Need Help?

See the complete guide: `../MULTIMEDIA-GUIDE.md`

---

**Template Version**: 1.0  
**Last Updated**: November 2024  
**Compatible With**: Fractal Grids Platform v1.0
