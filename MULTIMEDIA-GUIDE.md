# 🎬 Multimedia Fractal Grids Guide

## Overview
Enhance your fractal grids with images, audio podcasts, and video files. Students can view media directly in cells and download files for offline access.

---

## 📊 Enhanced Data Structure

### Cell Data with Multimedia
```javascript
{
    titleEn: "Mount Fuji",
    titleZh: "富士山",
    contentEn: "Japan's sacred mountain",
    contentZh: "日本的神圣山脉",
    descEn: "3,776m, last erupted 1707",
    descZh: "海拔3,776米，最后喷发于1707年",
    cellClass: "",
    
    // NEW: Multimedia fields
    image: "images/mount-fuji.jpg",           // Image to display
    imageAlt: "Mount Fuji snow-capped peak",  // Alt text for accessibility
    
    audioUrl: "audio/mount-fuji-podcast.mp3", // Audio file URL
    audioTitle: "Mount Fuji: Sacred Summit",  // Audio description
    
    videoUrl: "videos/mount-fuji-eruption.mp4", // Video file URL
    videoTitle: "Fuji Eruption History",        // Video description
    
    // For L2 cells only
    fullContentEn: "Detailed explanation...",
    fullContentZh: "详细说明..."
}
```

---

## 🖼️ Image Support

### Adding Images to Cells

**Option 1: Local Images**
```javascript
{
    titleEn: "Mount Fuji",
    image: "images/mount-fuji.jpg",
    imageAlt: "Snow-capped Mount Fuji at sunrise"
}
```

**Option 2: External URLs**
```javascript
{
    titleEn: "Mount Fuji",
    image: "https://example.com/images/fuji.jpg",
    imageAlt: "Mount Fuji panorama"
}
```

### Image Organization
```
fractal-grids-platform/
└── grids/
    ├── my-grid.html
    └── images/              ← Create this folder
        ├── mount-fuji.jpg
        ├── popocatepetl.jpg
        └── ring-of-fire.png
```

### Image Best Practices
- **Format**: JPG for photos, PNG for graphics, WebP for best compression
- **Size**: Max 500KB per image (resize before adding)
- **Dimensions**: 400x300px recommended for cell display
- **Naming**: Use descriptive names: `mount-fuji-summit.jpg` not `img1.jpg`

---

## 🎙️ Audio/Podcast Support

### Adding Audio Files

```javascript
{
    titleEn: "Volcanic Threats",
    audioUrl: "audio/volcanic-threats-podcast.mp3",
    audioTitle: "Understanding Volcanic Dangers (12 min)",
    audioSize: "8.5 MB"  // Optional: display file size
}
```

### Audio Organization
```
grids/
├── my-grid.html
└── audio/
    ├── volcanic-threats.mp3
    ├── mount-fuji-history.mp3
    └── interview-volcanologist.mp3
```

### Audio Features
- 🎧 **Podcast icon** appears in cell
- ▶️ **Play button** for in-browser listening
- ⬇️ **Download button** for offline access
- 📊 **Duration display** (optional)
- 📱 **Mobile-friendly** audio player

### Supported Formats
- **MP3** (recommended) - Universal support
- **M4A** - Good for voice/podcasts
- **OGG** - Open format, smaller files
- **WAV** - Uncompressed, large files

---

## 🎥 Video Support

### Adding Video Files

```javascript
{
    titleEn: "Eruption Simulation",
    videoUrl: "videos/eruption-simulation.mp4",
    videoTitle: "3D Eruption Model (5 min)",
    videoSize: "45 MB",
    videoPoster: "images/eruption-thumbnail.jpg"  // Thumbnail image
}
```

### Video Organization
```
grids/
├── my-grid.html
└── videos/
    ├── eruption-simulation.mp4
    ├── interview-scientist.mp4
    └── time-lapse-fuji.mp4
```

### Video Features
- 🎬 **Video icon** in cell
- ▶️ **Inline player** with controls
- ⬇️ **Download button** for offline viewing
- 🖼️ **Poster image** before playback
- 📱 **Responsive** video player

### Supported Formats
- **MP4** (H.264) - Recommended, universal support
- **WebM** - Open format, good compression
- **OGG** - Alternative open format

### Video Best Practices
- **Resolution**: 720p (1280x720) for balance of quality/size
- **Bitrate**: 1-2 Mbps for educational content
- **Length**: Keep under 10 minutes per cell
- **Compression**: Use HandBrake or similar to optimize

---

## 🎨 Visual Layout

### Cell with All Media Types

```
┌─────────────────────────────┐
│  Mount Fuji                 │
│  富士山                      │
├─────────────────────────────┤
│  [Image: Fuji at sunrise]   │
│                             │
│  Japan's sacred mountain    │
│  日本的神圣山脉              │
│                             │
│  🎧 Podcast (12 min) ⬇️     │
│  🎬 Video (5 min) ⬇️        │
│                             │
│  🔄 (flip indicator)        │
└─────────────────────────────┘
```

### Media Display Priority
1. **Image** - Displayed at top of cell (if present)
2. **Text content** - Below image
3. **Audio icon** - Bottom section with download
4. **Video icon** - Below audio with download
5. **Flip indicator** - Bottom right corner

---

## 💾 Download Functionality

### Download Buttons
- Automatic download button for each media file
- Shows file size (if provided)
- Downloads with descriptive filename
- Works offline after first download

### Download Behavior
```javascript
// Audio download
🎧 Mount Fuji Podcast (8.5 MB) ⬇️
→ Downloads as: "mount-fuji-podcast.mp3"

// Video download
🎬 Eruption Simulation (45 MB) ⬇️
→ Downloads as: "eruption-simulation.mp4"
```

---

## 📁 File Hosting Options

### Option 1: Local Files (Recommended for Classroom)
**Pros:**
- ✅ Works completely offline
- ✅ Fast loading
- ✅ No external dependencies
- ✅ Full control

**Cons:**
- ❌ Larger HTML file size (if embedded)
- ❌ Requires file organization

**Setup:**
```
grids/
├── my-grid.html
├── images/
├── audio/
└── videos/
```

### Option 2: External URLs
**Pros:**
- ✅ Smaller HTML files
- ✅ Easy to update media
- ✅ Can use CDN for speed

**Cons:**
- ❌ Requires internet connection
- ❌ Depends on external services
- ❌ May have access restrictions

**Example:**
```javascript
{
    image: "https://cdn.example.com/images/fuji.jpg",
    audioUrl: "https://podcast.example.com/episode1.mp3"
}
```

### Option 3: Hybrid Approach
- Images: Local (small files)
- Audio: External (larger files)
- Video: External or downloadable links

---

## 🔧 Implementation Example

### Basic Cell with Image
```javascript
{
    titleEn: "Mount Fuji",
    titleZh: "富士山",
    contentEn: "Japan's sacred mountain",
    contentZh: "日本的神圣山脉",
    descEn: "3,776m elevation",
    descZh: "海拔3,776米",
    image: "images/mount-fuji.jpg",
    imageAlt: "Mount Fuji with cherry blossoms",
    cellClass: ""
}
```

### Cell with Audio Podcast
```javascript
{
    titleEn: "Volcanic Threats",
    titleZh: "火山威胁",
    contentEn: "Understanding the dangers",
    contentZh: "了解危险",
    descEn: "Expert interview",
    descZh: "专家访谈",
    audioUrl: "audio/volcanic-threats.mp3",
    audioTitle: "Volcanologist Interview (15 min)",
    audioSize: "12 MB",
    cellClass: ""
}
```

### Cell with Video
```javascript
{
    titleEn: "Eruption Simulation",
    titleZh: "喷发模拟",
    contentEn: "3D computer model",
    contentZh: "3D计算机模型",
    descEn: "Scientific visualization",
    descZh: "科学可视化",
    videoUrl: "videos/eruption-sim.mp4",
    videoTitle: "Pyroclastic Flow Simulation (8 min)",
    videoSize: "65 MB",
    videoPoster: "images/eruption-poster.jpg",
    cellClass: ""
}
```

### Cell with Everything
```javascript
{
    titleEn: "Mount Fuji Complete Study",
    titleZh: "富士山完整研究",
    contentEn: "Comprehensive multimedia exploration",
    contentZh: "全面的多媒体探索",
    descEn: "Images, audio, and video resources",
    descZh: "图像、音频和视频资源",
    
    image: "images/fuji-panorama.jpg",
    imageAlt: "Mount Fuji panoramic view",
    
    audioUrl: "audio/fuji-documentary.mp3",
    audioTitle: "Fuji: Sacred and Dangerous (20 min)",
    audioSize: "18 MB",
    
    videoUrl: "videos/fuji-time-lapse.mp4",
    videoTitle: "Fuji Through the Seasons (6 min)",
    videoSize: "52 MB",
    videoPoster: "images/fuji-seasons.jpg",
    
    cellClass: "",
    fullContentEn: "Mount Fuji represents...",
    fullContentZh: "富士山代表..."
}
```

---

## 📱 Mobile Considerations

### Responsive Design
- Images scale to cell width
- Audio player adapts to screen size
- Video player uses native controls
- Download buttons remain accessible

### Data Usage
- Warn students about video file sizes
- Provide download-only option for large files
- Consider lower-quality versions for mobile

### Offline Access
- Students can download all media
- Files work offline after download
- Consider providing USB/SD card with media

---

## 🎯 Use Cases

### 1. Language Learning
- **Images**: Visual vocabulary
- **Audio**: Pronunciation guides, dialogues
- **Video**: Cultural context, conversations

### 2. Science Education
- **Images**: Diagrams, photos, charts
- **Audio**: Expert interviews, explanations
- **Video**: Experiments, simulations, field work

### 3. History
- **Images**: Historical photos, artifacts
- **Audio**: Primary source recordings, oral histories
- **Video**: Documentary clips, reenactments

### 4. Geography
- **Images**: Maps, landscapes, satellite imagery
- **Audio**: Travel narratives, local sounds
- **Video**: Virtual tours, time-lapses

---

## 🔒 Copyright & Licensing

### Important Considerations
- ✅ Use your own media
- ✅ Use Creative Commons licensed content
- ✅ Use public domain materials
- ✅ Get permission for copyrighted content
- ❌ Don't use copyrighted media without permission

### Attribution
Include credits in cell content:
```javascript
{
    descEn: "Photo: NASA Public Domain",
    descZh: "照片：NASA公共领域"
}
```

### Resources for Free Media
- **Images**: Unsplash, Pexels, Wikimedia Commons
- **Audio**: Free Music Archive, ccMixter
- **Video**: Pexels Videos, Pixabay Videos

---

## 📊 File Size Guidelines

### Recommended Limits
| Media Type | Per File | Per Grid |
|------------|----------|----------|
| Images | 500 KB | 10 MB |
| Audio | 15 MB | 100 MB |
| Video | 100 MB | 500 MB |

### Optimization Tools
- **Images**: TinyPNG, ImageOptim, Squoosh
- **Audio**: Audacity, ffmpeg
- **Video**: HandBrake, ffmpeg

### Compression Examples
```bash
# Optimize image
convert input.jpg -quality 85 -resize 800x600 output.jpg

# Compress audio
ffmpeg -i input.wav -b:a 128k output.mp3

# Compress video
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 1M output.mp4
```

---

## 🚀 Quick Start Checklist

### Adding Multimedia to Existing Grid
- [ ] Create `images/`, `audio/`, `video/` folders
- [ ] Add media files to appropriate folders
- [ ] Update cell data with media URLs
- [ ] Add alt text for images
- [ ] Add titles for audio/video
- [ ] Test all media loads correctly
- [ ] Test download functionality
- [ ] Verify mobile display
- [ ] Check file sizes
- [ ] Test offline access

---

## 🎓 Student Instructions

### Viewing Media
1. **Images**: Displayed automatically in cells
2. **Audio**: Click 🎧 icon to play or ⬇️ to download
3. **Video**: Click 🎬 icon to play or ⬇️ to download
4. **Offline**: Download files for offline access

### Download for Offline Use
1. Click the download button (⬇️) next to media
2. File saves to your Downloads folder
3. Access anytime without internet

---

## 📝 Next Steps

1. **Review** the enhanced template: `grids/multimedia-template.html`
2. **Create** your media folders
3. **Add** images, audio, or video to cells
4. **Test** in browser
5. **Deploy** to classroom platform

**Ready to add multimedia?** See the template file for complete implementation!
