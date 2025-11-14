# 🎧 Audio Folder

Place your audio/podcast files here.

## Supported Formats
- MP3 (recommended - universal support)
- M4A (good for voice/podcasts)
- OGG (open format, smaller files)
- WAV (uncompressed, large files)

## Guidelines
- **Typical size**: 5-20 MB for 10-15 minute podcast
- **Bitrate**: 128kbps for voice, 192kbps for music
- **Length**: 5-15 minutes ideal for classroom
- **Naming**: Include topic (e.g., `volcanic-threats-interview.mp3`)

## Example Files
```
audio/
├── volcanic-threats-podcast.mp3
├── mount-fuji-history.mp3
├── scientist-interview.mp3
└── eruption-sounds.mp3
```

## Compression Tools
- **Desktop**: Audacity (free, cross-platform)
- **Command line**: `ffmpeg -i input.wav -b:a 128k output.mp3`

## Recording Tips
- Use quiet environment
- Use good microphone
- Edit out long pauses
- Normalize audio levels
- Export as MP3 128kbps

## Usage in Grid
```javascript
{
    titleEn: "Volcanic Threats",
    audioUrl: "audio/volcanic-threats-podcast.mp3",
    audioTitle: "Understanding Volcanic Dangers (12 min)",
    audioSize: "8.5 MB"
}
```

## Features
- ▶️ Play button for in-browser listening
- ⬇️ Download button for offline access
- 🎧 Podcast icon indicator
- Works on both English and Chinese sides
