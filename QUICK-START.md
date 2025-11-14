# 🚀 Quick Start Guide

## Get Running in 2 Minutes

### Step 1: Start the Server
```bash
npm start
```

### Step 2: Find Your IP Address
```bash
ipconfig getifaddr en0
```
Example output: `192.168.1.100`

### Step 3: Share with Students
Write on the board:
```
Go to: http://192.168.1.100:3000
```

That's it! ✅

---

## Adding a New Grid

### Option 1: Drop and Go
1. Save your fractal grid HTML file in `grids/` folder
2. Refresh the browser
3. Your new grid appears automatically!

### Option 2: Use the Template
```bash
# Copy the template
cp FRACTAL-GRID-PROMPT.md grids/my-new-topic.md

# Create your content following the template
# Save as: grids/my-new-topic.html
```

---

## Common URLs

| What | URL |
|------|-----|
| Landing page | `http://localhost:3000` |
| Violent Earth grid | `http://localhost:3000/grid/violent-earth-sacred-summits` |
| API (list all grids) | `http://localhost:3000/api/grids` |

---

## Troubleshooting One-Liners

**Students can't connect?**
```bash
# Check firewall - allow Node.js through
# Mac: System Preferences → Security → Firewall
```

**Port already in use?**
```bash
PORT=8080 npm start
```

**Want auto-restart during development?**
```bash
npm run dev
```

---

## Network Setup Options

### Option A: School WiFi (Recommended)
- Connect laptop to school WiFi
- Students connect to same WiFi
- Share your IP address

### Option B: Laptop Hotspot
- Create hotspot on your laptop
- Students connect to your hotspot
- Use IP: `192.168.x.1` (varies by OS)

### Option C: Ethernet + WiFi Bridge
- Laptop connected via ethernet
- Share connection via WiFi
- Most stable for large classes

---

## File Structure at a Glance

```
fractal-grids-platform/
├── grids/                          ← Put your HTML files here
│   └── violent-earth-sacred-summits.html
├── server.js                       ← Don't touch (unless customizing)
├── package.json                    ← Don't touch
└── public/index.html              ← Customize landing page here
```

---

## Pro Tips

### 1. Test Before Class
Always test from a student device before class starts.

### 2. Backup Your Grids
```bash
# Copy grids folder to backup location
cp -r grids/ ~/Desktop/grids-backup/
```

### 3. Pre-load on Student Devices
If students have laptops, you can give them the HTML files directly as a backup.

### 4. Use QR Codes
Generate a QR code for your URL - students can scan instead of typing!

### 5. Bookmark for Students
Create a simple bookmark page with all your grid URLs.

---

## Next Steps

1. ✅ Server is running
2. ✅ Test from your phone/tablet
3. ✅ Test from a student device
4. ✅ Create your second grid
5. ✅ Customize the landing page

**Ready to create more grids?** See `FRACTAL-GRID-PROMPT.md` for the complete guide.
