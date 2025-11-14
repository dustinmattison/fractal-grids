# 🎬 Videos Folder

Place your video files here.

## Supported Formats
- MP4 (H.264) - Recommended, universal support
- WebM - Open format, good compression
- OGG - Alternative open format

## Guidelines
- **Resolution**: 720p (1280x720) recommended
- **Bitrate**: 1-2 Mbps for educational content
- **Length**: Keep under 10 minutes per cell
- **Size**: Aim for under 100 MB
- **Naming**: Descriptive (e.g., `eruption-simulation.mp4`)

## Example Files
```
videos/
├── eruption-simulation.mp4
├── seismic-monitoring.mp4
├── fuji-time-lapse.mp4
└── interview-volcanologist.mp4
```

## Compression Tools
- **Desktop**: HandBrake (free, cross-platform)
- **Command line**: `ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 1M output.mp4`

## Recording/Editing Tips
- Use 720p resolution (not 1080p or 4K)
- Keep videos focused and concise
- Add captions/subtitles if possible
- Use good lighting and audio
- Compress before adding to grid

## Usage in Grid
```javascript
{
    titleEn: "Eruption Simulation",
    videoUrl: "videos/eruption-simulation.mp4",
    videoTitle: "3D Eruption Model (5 min)",
    videoSize: "45 MB",
    videoPoster: "images/eruption-thumbnail.jpg"
}
```

## Features
- ▶️ Play button for in-browser viewing
- ⬇️ Download button for offline access
- 🎬 Video icon indicator
- Poster image before playback
- Native browser controls
- Works on both English and Chinese sides

## Poster Images
Create thumbnail images for videos:
- Same name as video: `eruption-simulation.jpg`
- Place in `images/` folder
- Dimensions: 640x360px (16:9 ratio)
- Shows before video plays

## File Size Management
For large videos, consider:
1. **Compress**: Use HandBrake or ffmpeg
2. **Lower resolution**: 480p instead of 720p
3. **External hosting**: YouTube, Vimeo (requires internet)
4. **Download-only**: Provide link without inline player
5. **USB distribution**: Give students files on USB drive
