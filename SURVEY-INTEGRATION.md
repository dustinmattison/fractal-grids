# 📝 Student Survey Integration

The Fractal Grids platform now includes integration with the Student Weekly Reflection Survey app.

## 🎯 Features

- **One-Click Access**: Survey button in the grid header
- **Seamless Integration**: Opens survey in a new tab
- **Easy Startup**: Single command to run both apps
- **Independent Apps**: Each app runs on its own port

## 🚀 Quick Start

### Start Both Apps Together

```bash
./start-with-survey.sh
```

This will start:
- **Fractal Grids**: http://localhost:3000
- **Student Survey**: http://localhost:8501

### Start Apps Separately

**Fractal Grids only:**
```bash
npm start
```

**Survey only:**
```bash
cd /Users/dustinrobertmattison/CascadeProjects/homework-feedback/student-survey
streamlit run survey_app.py
```

## 📚 How Students Use It

1. **View the lesson** on the fractal grid
2. **Click "📝 Weekly Survey"** button in the header
3. **Survey opens** in a new tab
4. **Enter student code** and complete reflection
5. **Submit** - responses save to their file automatically

## 🎨 Survey Button

The green "📝 Weekly Survey" button appears in the control bar at the top of every grid page.

**Button Features:**
- ✅ Opens survey in new tab (doesn't interrupt lesson)
- ✅ Green color to stand out
- ✅ Hover effect for visual feedback
- ✅ Tooltip shows "Complete your weekly reflection"

## 🔧 Configuration

### Change Survey URL

If you deploy the survey to a different URL (e.g., Streamlit Cloud), update the button in your grid HTML files:

```html
<button id="surveyBtn" class="btn survey" 
        onclick="window.open('YOUR_SURVEY_URL_HERE', '_blank')" 
        title="Complete your weekly reflection">
    📝 Weekly Survey
</button>
```

### Survey Setup

The survey app requires:
1. **Student codes** - Generated from roster
2. **Vault path** - Where student files are saved
3. **Streamlit** - Python package for the web app

See the survey app's README for full setup instructions:
`/Users/dustinrobertmattison/CascadeProjects/homework-feedback/student-survey/README.md`

## 📁 File Locations

### Fractal Grids
- **Server**: `/Users/dustinrobertmattison/CascadeProjects/fractal-grids/server.js`
- **Grids**: `/Users/dustinrobertmattison/CascadeProjects/fractal-grids/grids/`
- **Port**: 3000

### Student Survey
- **App**: `/Users/dustinrobertmattison/CascadeProjects/homework-feedback/student-survey/survey_app.py`
- **Codes**: `/Users/dustinrobertmattison/CascadeProjects/homework-feedback/student-survey/student_codes.json`
- **Port**: 8501

## 🎓 Classroom Workflow

### At Start of Class
1. Start both apps: `./start-with-survey.sh`
2. Share grid URL with students: http://localhost:3000
3. Students explore the lesson content

### At End of Class
1. Announce: "Please complete your weekly reflection"
2. Students click the "📝 Weekly Survey" button
3. Students enter their code and submit
4. Responses automatically save to their files

### After Class
1. Stop servers: Press `Ctrl+C` in the terminal
2. Review student reflections in Obsidian vault
3. Responses are saved in markdown format

## 🔒 Security

- **Student codes** are required for survey access
- **Codes are hidden** (password input type)
- **One submission per week** per student
- **Files saved locally** to your Obsidian vault

## 🛠️ Troubleshooting

### Survey button doesn't work
- Check that Streamlit app is running on port 8501
- Open http://localhost:8501 directly to verify

### Survey won't start
- Install Streamlit: `pip install streamlit`
- Check student_codes.json exists
- Verify vault path in .streamlit/secrets.toml

### Both apps won't start together
- Check ports 3000 and 8501 are available
- Run apps separately to identify which one fails
- Check the startup script has execute permissions

## 📊 Student Response Format

Survey responses are saved to student markdown files in this format:

```markdown
## 2025-11-14 - Weekly Reflection Survey (submitted 15:45)

**🌟 What went well this week:**
I understood the volcano concepts and enjoyed the interactive grid.

**🤔 What was challenging:**
Some vocabulary was difficult to remember.

**💡 What I learned:**
I learned about the Ring of Fire and sacred mountains.

**🎯 Goals for next week:**
Review vocabulary and watch the videos again.

**📊 Self-Assessment:**
- Effort: 8/10
- Understanding: 7/10
- Confidence: 7/10
- Engagement: 9/10

**💬 Additional comments:**
The fractal grid made learning more engaging!

---
```

## 🎉 Benefits

✅ **Seamless integration** - One button click  
✅ **No context switching** - Survey opens in new tab  
✅ **Automatic saving** - No manual file management  
✅ **Easy deployment** - Both apps run locally  
✅ **Student-friendly** - Simple, intuitive interface  

## 📝 Notes

- Survey responses save to: `VAULT_PATH/StudentName.md`
- Each student has a unique code format: `INITIAL-ANIMAL-NUMBER`
- Survey can be completed once per week
- Responses include timestamp and self-assessment ratings

---

**Questions?** Check the individual README files for each app or contact your system administrator.
