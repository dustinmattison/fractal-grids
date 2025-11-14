# 🖼️ Images Folder

Place your image files here.

## Supported Formats
- JPG/JPEG (recommended for photos)
- PNG (recommended for graphics/diagrams)
- WebP (best compression)
- GIF (animations)
- SVG (vector graphics)

## Guidelines
- **Max size**: 500KB per image
- **Dimensions**: 400x300px recommended
- **Naming**: Use descriptive names (e.g., `mount-fuji-summit.jpg`)

## Example Files
```
images/
├── mount-fuji.jpg
├── volcanic-eruption.png
├── seismic-diagram.svg
└── ring-of-fire-map.jpg
```

## Compression Tools
- **Online**: TinyPNG.com, Squoosh.app
- **Desktop**: ImageOptim (Mac), FileOptimizer (Windows)
- **Command line**: `convert input.jpg -quality 85 -resize 800x600 output.jpg`

## Usage in Grid
```javascript
{
    titleEn: "Mount Fuji",
    image: "images/mount-fuji.jpg",
    imageAlt: "Snow-capped Mount Fuji at sunrise"
}
```
