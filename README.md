# 🌐 Fractal Grids Platform

An interactive educational platform for creating and displaying hierarchical, bilingual learning content using fractal grid structures. Features multimedia support, student survey integration, and visual tools for content management.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey.svg)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Media Files
**Important**: Media files (videos/audio) are NOT included in this repository due to their large size.

Place your media files in:
- `grids/videos/` - Video files (.mp4)
- `grids/audio/` - Audio files (.mp3, .m4a)
- `grids/images/` - Image files (.jpg, .png, .webp)

See the README files in each folder for naming conventions and organization tips.

### 3. Start the Server
```bash
npm start
```

### 3. Access the Platform
- **On your laptop**: http://localhost:3000
- **From student devices**: http://[your-ip-address]:3000

### 4. Find Your IP Address
**Mac/Linux:**
```bash
ipconfig getifaddr en0
# or
ifconfig | grep "inet "
```

**Windows:**
```bash
ipconfig
# Look for "IPv4 Address" under your active network adapter
```

## 📚 How It Works

### Directory Structure
```
fractal-grids-platform/
├── server.js              # Express server
├── package.json           # Dependencies
├── grids/                 # Your fractal grid HTML files
│   └── violent-earth-sacred-summits.html
├── public/
│   └── index.html        # Landing page
└── README.md
```

### Adding New Grids

1. **Create your fractal grid** following the template in `FRACTAL-GRID-PROMPT.md`
2. **Save as HTML** in the `grids/` folder with a descriptive name:
   - ✅ `climate-action.html`
   - ✅ `ancient-civilizations.html`
   - ✅ `quantum-physics.html`
   - ❌ `grid1.html` (not descriptive)

3. **Refresh the browser** - your new grid appears automatically!

4. **Share with students**:
   - Direct link: `http://[your-ip]:3000/grid/climate-action`
   - Or let them browse: `http://[your-ip]:3000`

### No Database Required!
The platform automatically scans the `grids/` folder and displays all HTML files. Just drop files in and they're live.

## 🎓 Classroom Setup

### Before Class
1. Connect your laptop to classroom WiFi or create a hotspot
2. Start the server: `npm start`
3. Note your IP address from the console output
4. Test access from a student device

### During Class
1. Write the URL on the board: `http://[your-ip]:3000`
2. Students navigate to the landing page
3. They can browse all available grids
4. Click any grid to launch the interactive visualization

### Offline Mode
The platform works completely offline - no internet required! Students just need to be on the same network as your laptop.

## 🛠️ Development Mode

For auto-restart when you make changes:
```bash
npm run dev
```

## 🎨 Customization

### Landing Page
Edit `public/index.html` to customize:
- Colors and styling
- Instructions
- Branding

### Server Port
Change the port in `server.js`:
```javascript
const PORT = process.env.PORT || 3000; // Change 3000 to your preferred port
```

Or set via environment variable:
```bash
PORT=8080 npm start
```

## 📱 Student Access

### Same WiFi Network
Students must be on the same network as your laptop:
- School WiFi ✅
- Your laptop's hotspot ✅
- Different networks ❌

### Firewall Issues
If students can't connect:
1. Check your laptop's firewall settings
2. Allow Node.js through the firewall
3. Ensure port 3000 is not blocked

**Mac:**
- System Preferences → Security & Privacy → Firewall → Firewall Options
- Allow Node.js

**Windows:**
- Windows Defender Firewall → Allow an app
- Add Node.js

## 🔧 Troubleshooting

### "Cannot GET /grid/[name]"
- Check that the HTML file exists in `grids/` folder
- Verify the filename matches the URL (case-sensitive)
- Refresh the landing page to see available grids

### Students Can't Connect
1. Verify your IP address: `ipconfig getifaddr en0`
2. Test from your own phone/tablet first
3. Check firewall settings
4. Ensure all devices are on the same network

### Port Already in Use
```bash
# Find what's using port 3000
lsof -i :3000

# Kill the process or change the port
PORT=8080 npm start
```

## 📊 Grid Metadata

The platform automatically extracts:
- **Title**: From `<title>` tag
- **Description**: From `<meta name="description">` tag (optional)

Example:
```html
<head>
    <title>Climate Action: Global Solutions</title>
    <meta name="description" content="Explore 8 key areas of climate action">
</head>
```

## 🚀 Future Enhancements

### Easy Additions
- [ ] Grid categories/tags
- [ ] Search functionality
- [ ] Usage analytics
- [ ] Student notes/bookmarks

### Advanced Features
- [ ] Multi-language UI
- [ ] Grid editor interface
- [ ] Export/import grids
- [ ] Collaborative annotations

## 📄 License

Open for educational and commercial use.

## 🤝 Contributing

To add features:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Support

For issues or questions:
- Check `FRACTAL-GRID-PROMPT.md` for grid creation guidelines
- Review troubleshooting section above
- Test with the included example grid first

---

**Created**: November 2024  
**Version**: 1.0  
**Platform**: Node.js + Express
