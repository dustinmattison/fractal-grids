# ✅ Classroom Deployment Checklist

## 📋 Pre-Class Setup (5 minutes)

### 1. Network Connection
- [ ] Laptop connected to classroom WiFi
- [ ] WiFi is stable and working
- [ ] Alternative: Laptop hotspot enabled

### 2. Start Server
```bash
cd /Users/dustinrobertmattison/CascadeProjects/fractal-grids
npm start
```
- [ ] Server started successfully
- [ ] No error messages in console
- [ ] Port 3000 is available

### 3. Get Your IP Address
```bash
ipconfig getifaddr en0
```
- [ ] IP address noted: `________________`
- [ ] IP address written on board/slide

### 4. Test Access
- [ ] Open `http://localhost:3000` on laptop ✅
- [ ] Landing page loads correctly ✅
- [ ] All grids visible in library ✅
- [ ] Click a grid - it opens correctly ✅

### 5. Test from Student Device
- [ ] Connect phone/tablet to same WiFi
- [ ] Open `http://[your-ip]:3000`
- [ ] Landing page loads ✅
- [ ] Grid opens and works ✅

### 6. Firewall Check (if students can't connect)
**Mac:**
- [ ] System Preferences → Security & Privacy → Firewall
- [ ] Node.js is allowed

**Windows:**
- [ ] Windows Defender Firewall → Allow an app
- [ ] Node.js is allowed

---

## 🎓 During Class

### Student Instructions (Write on Board)
```
1. Connect to WiFi: [network name]
2. Open browser
3. Go to: http://[your-ip]:3000
4. Select a grid to explore
```

### Quick Troubleshooting
| Problem | Solution |
|---------|----------|
| "Can't connect" | Check WiFi, verify IP address |
| "Page not loading" | Refresh browser, check server |
| "Grid won't open" | Clear browser cache |
| "Slow loading" | Too many students? Check bandwidth |

---

## 🔄 After Class

### Option A: Keep Running
- [ ] Leave server running for next class
- [ ] Note: Laptop must stay on

### Option B: Stop Server
```bash
# Press Ctrl+C in terminal
```
- [ ] Server stopped
- [ ] Terminal closed

### Optional: Backup
```bash
# Backup your grids
cp -r grids/ ~/Desktop/grids-backup/
```

---

## 📊 Class Session Log

**Date:** _______________  
**Class:** _______________  
**Grid(s) Used:** _______________  
**Students:** _______________  
**Issues:** _______________  
**Notes:** _______________

---

## 🚨 Emergency Backup Plan

### If Server Won't Start
1. Check if port is in use: `lsof -i :3000`
2. Use different port: `PORT=8080 npm start`
3. Update student URL accordingly

### If Network Issues
1. **Plan B:** Share HTML file directly via USB/AirDrop
2. Students open file locally in browser
3. All features work offline!

### If Laptop Fails
1. Have backup laptop with grids folder
2. Quick setup: `npm install && npm start`
3. Or use student device as server

---

## 📱 Student Device Compatibility

### Tested & Working
- ✅ Chrome (desktop & mobile)
- ✅ Safari (desktop & mobile)
- ✅ Firefox (desktop & mobile)
- ✅ Edge (desktop)

### Known Issues
- ⚠️ Internet Explorer: Not supported
- ⚠️ Very old browsers: May have issues

---

## 🎯 Success Indicators

### Technical Success
- [ ] All students connected within 2 minutes
- [ ] No server crashes during class
- [ ] Grids loaded quickly (<3 seconds)
- [ ] No major technical interruptions

### Educational Success
- [ ] Students engaged with content
- [ ] Interactive features used (zoom, flip)
- [ ] Students explored multiple levels
- [ ] Positive feedback received

---

## 📝 Notes for Next Time

**What worked well:**
- _______________________________________________
- _______________________________________________

**What to improve:**
- _______________________________________________
- _______________________________________________

**New grids needed:**
- _______________________________________________
- _______________________________________________

---

## 🔧 Quick Commands Reference

```bash
# Start server
npm start

# Start with auto-reload (development)
npm run dev

# Find your IP
ipconfig getifaddr en0

# Check what's on port 3000
lsof -i :3000

# Test API
curl http://localhost:3000/api/grids

# Stop server
Ctrl+C
```

---

## 📞 Quick Support

**Server won't start?** → Check README.md "Troubleshooting"  
**Students can't connect?** → Verify firewall settings  
**Grid won't load?** → Check grids/ folder  
**Need new grid?** → See FRACTAL-GRID-PROMPT.md

---

**Last Updated:** [Current Date]  
**Platform Version:** 1.0  
**Status:** 🟢 Production Ready
