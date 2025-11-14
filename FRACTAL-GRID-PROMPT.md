# Complete Prompt for Interactive 9×9 Fractal Grid Visualization

## Overview
Create an interactive, bilingual (English/Chinese) fractal grid visualization using HTML, CSS, and JavaScript. The grid implements a 3-level zoom system (L0, L1, L2) with flip cards for bilingual content display.

---

## I. FRACTAL ARCHITECTURE

### Mathematical Structure
```
L0 (1×1): Single cell - the core organizing principle (the "sun")
L1 (3×3): Central principle + 8 supporting elements (sun + 8 "planets")
L2 (9×9): Central 3×3 + 8 peripheral 3×3 grids
```

### L2 Grid Layout
```
┌─────────┬─────────┬─────────┐
│ 3×3     │ 3×3     │ 3×3     │
│ Grid P1 │ Grid P2 │ Grid P3 │
├─────────┼─────────┼─────────┤
│ 3×3     │ 3×3     │ 3×3     │
│ Grid P4 │ CENTRAL │ Grid P5 │
│         │ (L1)    │         │
├─────────┼─────────┼─────────┤
│ 3×3     │ 3×3     │ 3×3     │
│ Grid P6 │ Grid P7 │ Grid P8 │
└─────────┴─────────┴─────────┘
```

### Fractal Coherence Rules
1. **L1 → L2 Transformation**: Each of the 8 L1 "planets" becomes the "sun" (center cell) of its own 3×3 grid in L2
2. **Central Grid**: The center 3×3 grid in L2 is an exact replica of the L1 grid
3. **Content Consistency**: The center cell of each peripheral L2 grid must contain the exact same content as its corresponding L1 planet

---

## II. CONTENT CREATION GUIDELINES

### Step 1: Identify Your Core Concept (L0)
Choose a central organizing principle that can be broken down into 8 major aspects.

**Example**: "Violent Earth: Sacred Summits" → Volcanic mountains as both life-givers and destroyers

### Step 2: Define 8 Supporting Elements (L1 Planets)
Break down your core concept into 8 distinct but related topics that orbit around the central idea.

**Example L1 Structure**:
```
Position 1 (Top-Left): Mount Fuji
Position 2 (Top-Center): Volcanic Threats
Position 3 (Top-Right): Scientific Monitoring
Position 4 (Middle-Left): Popocatépetl
Position 5 (Center): VIOLENT EARTH (the sun)
Position 6 (Middle-Right): Religious Significance
Position 7 (Bottom-Left): Human Settlement
Position 8 (Bottom-Center): Cultural Practices
Position 9 (Bottom-Right): Pacific Ring of Fire
```

### Step 3: Expand Each Planet into 8 Sub-Elements (L2)
For each of the 8 L1 planets, create 8 detailed sub-topics that explore different facets.

**Example - Mount Fuji Expansion**:
```
Position 1: Geographical Prominence
Position 2: Volcanic Classification
Position 3: Historical Eruption Pattern
Position 4: Urban Proximity Risks
Position 5: Mount Fuji (CENTER - same as L1 planet)
Position 6: Population Exposure
Position 7: Tourism and Pilgrimage
Position 8: Religious Traditions
Position 9: Cultural Symbolism
```

### Content Depth Levels
Each cell should have THREE levels of content detail:

1. **Title**: Short, descriptive name (3-8 words)
   - English: `titleEn`
   - Chinese: `titleZh`

2. **Short Content**: Brief description (1 sentence, ~10-20 words)
   - English: `contentEn`
   - Chinese: `contentZh`

3. **Description**: Additional context (1 sentence, ~10-20 words)
   - English: `descEn`
   - Chinese: `descZh`

4. **Full Content**: Detailed explanation (2-3 sentences, ~30-50 words) - ONLY for L2 cells
   - English: `fullContentEn`
   - Chinese: `fullContentZh`

5. **Multimedia (Optional)**: Images, audio, and video
   - Image: `image`, `imageAlt`
   - Audio: `audioUrl`, `audioTitle`, `audioSize`
   - Video: `videoUrl`, `videoTitle`, `videoSize`, `videoPoster`

---

## III. DATA STRUCTURE

### L0 Data Format
```javascript
L0: [
    {
        titleEn: "Core Concept Title",
        titleZh: "核心概念标题",
        contentEn: "Brief description of the core organizing principle.",
        contentZh: "核心组织原则的简要描述。",
        descEn: "Additional context about why this matters.",
        descZh: "关于为什么这很重要的额外背景。",
        cellClass: "subsun"
    }
]
```

### L1 Data Format
```javascript
L1: [
    // Position 1 (Top-Left)
    {titleEn: "Planet 1 Title", titleZh: "行星1标题", contentEn: "Brief description", contentZh: "简要描述", descEn: "Context", descZh: "背景", cellClass: ""},
    
    // Position 2 (Top-Center)
    {titleEn: "Planet 2 Title", titleZh: "行星2标题", contentEn: "Brief description", contentZh: "简要描述", descEn: "Context", descZh: "背景", cellClass: ""},
    
    // ... positions 3, 4 ...
    
    // Position 5 (Center) - THE SUN
    {titleEn: "CORE CONCEPT", titleZh: "核心概念", contentEn: "Central idea", contentZh: "中心思想", descEn: "Main theme", descZh: "主题", cellClass: "subsun"},
    
    // ... positions 6, 7, 8, 9 ...
]
```

### L2 Data Format
```javascript
L2: [
    // SUBGRID 1: Expansion of L1 Position 1
    {
        titleEn: "Planet 1 Title",  // MUST match L1 Position 1 title
        titleZh: "行星1标题",
        cells: [
            // 8 supporting cells + 1 center cell
            {titleEn: "Sub-topic 1", titleZh: "子主题1", contentEn: "...", contentZh: "...", descEn: "...", descZh: "...", cellClass: "", fullContentEn: "Detailed explanation...", fullContentZh: "详细说明..."},
            
            // ... positions 2, 3, 4 ...
            
            // Position 5 (Center) - MUST be identical to L1 Position 1
            {titleEn: "Planet 1 Title", titleZh: "行星1标题", contentEn: "Same as L1", contentZh: "与L1相同", descEn: "Same as L1", descZh: "与L1相同", cellClass: "subsun", fullContentEn: "...", fullContentZh: "..."},
            
            // ... positions 6, 7, 8, 9 ...
        ]
    },
    
    // SUBGRID 2-4: Expansions of L1 Positions 2-4
    // ... (same structure)
    
    // SUBGRID 5 (CENTER): Exact copy of L1 grid
    {
        titleEn: "Core Concept (L1 Grid)",
        titleZh: "核心概念（L1网格）",
        cells: [
            // EXACT COPY of all 9 L1 cells
            // Position 1: Copy of L1 Position 1
            // Position 2: Copy of L1 Position 2
            // ...
            // Position 5: Copy of L1 Position 5 (the sun)
            // ...
            // Position 9: Copy of L1 Position 9
        ]
    },
    
    // SUBGRID 6-9: Expansions of L1 Positions 6-9
    // ... (same structure as Subgrid 1)
]
```

---

## IV. VISUAL DESIGN SPECIFICATIONS

### Color Scheme
1. **Central Sun (L0/L1 center)**: Light grey gradient (`#e8e8e8` to `#d0d0d0`)
2. **8 L1 Planets**: Each gets a unique color
   - Position 1: Light pink (`#ffe6e6` to `#ffcccc`)
   - Position 2: Light blue (`#e6f2ff` to `#cce5ff`)
   - Position 3: Light green (`#e6ffe6` to `#ccffcc`)
   - Position 4: Light orange (`#fff0e6` to `#ffe0cc`)
   - Position 6: Light purple (`#f0e6ff` to `#e0ccff`)
   - Position 7: Light pink (`#ffe6f0` to `#ffcce0`)
   - Position 8: Light cyan (`#e6ffff` to `#ccffff`)
   - Position 9: Light yellow (`#ffffe6` to `#ffffcc`)

3. **Color Application Rules**:
   - L1: All 9 cells colored (8 planets + 1 grey sun)
   - L2 peripheral grids: Only center cells (subsuns) colored
   - L2 central grid: All 9 cells colored (exact replica of L1)

### Border Hierarchy
1. **Regular cells**: 2px solid #333
2. **Central sun (L1 & L2)**: 8px solid black
3. **Central 3×3 grid container (L2)**: 4px solid black
4. **All other subsuns**: 2px solid #333

### Card Flip Design
- **Front side**: ALWAYS displays English content
- **Back side**: ALWAYS displays Chinese content
- Flip indicator: 🔄 icon in bottom-right corner
- 3D flip animation on click

---

## V. INTERACTION FEATURES

### Zoom Levels
1. **L0 (Level 0)**: Single cell view - core concept only
2. **L1 (Level 1)**: 3×3 grid - default view
3. **L2 (Level 2)**: 9×9 grid overview - shows all 9 subgrids with title-only cells
4. **L2.5 (Level 2 Zoomed)**: Single 3×3 subgrid with full content

### Controls
1. **Zoom In** (➕): L1 → L0
2. **Zoom Out** (➖): L1 → L2
3. **Back to L2** (◀): L2.5 → L2
4. **Flip All** (🔄): Flip all cards simultaneously
5. **UI Language** (🌐): Toggle interface language (English ↔ Chinese)
6. **Presentation Mode** (🖥️): Full-screen mode

### Click Behaviors
- **L2 Overview**: Click any 3×3 subgrid to zoom into L2.5 view
- **Individual cells**: Click to flip front ↔ back
- **Flip All**: Toggles all cards globally

---

## VI. TECHNICAL IMPLEMENTATION

### File Structure
Single HTML file containing:
- CSS styles (embedded in `<style>` tag)
- JavaScript logic (embedded in `<script>` tag)
- Content data (JavaScript object)

### Key CSS Classes
```css
.grid.level-0          /* L0 single cell view */
.grid.level-1          /* L1 3×3 grid */
.grid.level-2          /* L2 9×9 overview */
.grid.level-2-5        /* L2.5 zoomed subgrid */
.cell.subsun           /* Central sun cells */
.cell.pos-1 to pos-9   /* Position-based colors */
.cell-flipper          /* 3D flip container */
.cell.front            /* Front of card (English) */
.cell.back             /* Back of card (Chinese) */
.subgrid               /* 3×3 grid container */
.subgrid-overlay       /* Clickable overlay for zoom */
```

### Critical JavaScript Functions
```javascript
createCell(cellData, useFullContent, position)
  // Creates flip card with bilingual content
  // position: 1-9 for color assignment

renderGrid()
  // Main rendering function
  // Handles L0, L1, L2, L2.5 views

zoomToSubgrid(index)
  // Zooms into specific L2 subgrid
  // index: 0-8 for the 9 subgrids
```

### Position Class Assignment Logic
```javascript
// L1: All cells get position classes (1-9)
// L2 peripheral grids: Only subsuns get position classes (matching their L1 origin)
// L2 central grid: All cells get position classes (1-9, matching L1)
```

---

## VII. CONTENT CREATION WORKFLOW FOR LLMs

### Prompt Template for Content Generation

```
I need you to create content for a 9×9 fractal grid visualization about [TOPIC].

STRUCTURE:
- L0: 1 central concept
- L1: The central concept + 8 supporting topics
- L2: Each of the 8 L1 topics expanded into 8 sub-topics + 1 central grid (copy of L1)

CONTENT REQUIREMENTS:
1. Each cell needs bilingual content (English and Chinese)
2. Three levels of detail:
   - Title (3-8 words)
   - Short content (1 sentence, ~10-20 words)
   - Description (1 sentence, ~10-20 words)
3. L2 cells also need full content (2-3 sentences, ~30-50 words)

FRACTAL RULES:
1. The center cell of each L2 peripheral grid MUST be identical to its corresponding L1 planet
2. The L2 central grid (position 5) MUST be an exact copy of the entire L1 grid
3. All content should be thematically coherent and build upon the central concept

TOPIC: [Your topic here]

Please provide the content in this JSON structure:
{
  "L0": [{titleEn, titleZh, contentEn, contentZh, descEn, descZh}],
  "L1": [9 cells with same structure],
  "L2": [
    {
      titleEn, titleZh,
      cells: [9 cells with titleEn, titleZh, contentEn, contentZh, descEn, descZh, fullContentEn, fullContentZh]
    },
    ... 8 more subgrids
  ]
}
```

### Example Topics for Fractal Grids
1. **Business**: "Digital Transformation" → 8 business areas → detailed strategies
2. **Education**: "Learning Mastery" → 8 competencies → specific skills
3. **Health**: "Holistic Wellness" → 8 wellness dimensions → practices
4. **Technology**: "AI Revolution" → 8 AI domains → applications
5. **Environment**: "Climate Action" → 8 action areas → initiatives
6. **History**: "Ancient Civilizations" → 8 civilizations → aspects
7. **Science**: "Quantum Physics" → 8 concepts → phenomena
8. **Art**: "Renaissance Art" → 8 movements → masterpieces

---

## VIII. QUALITY CHECKLIST

Before finalizing your fractal grid, verify:

### Content Coherence
- [ ] L0 represents a clear, unifying concept
- [ ] All 8 L1 planets relate directly to the L0 concept
- [ ] Each L2 subgrid's 8 cells relate to their central planet
- [ ] No duplicate content across different cells
- [ ] Bilingual translations are accurate and natural

### Fractal Structure
- [ ] L2 Subgrid 1 center = L1 Position 1 (exact match)
- [ ] L2 Subgrid 2 center = L1 Position 2 (exact match)
- [ ] ... (verify all 8 peripheral subgrids)
- [ ] L2 Subgrid 5 (center) = Complete L1 grid (exact copy)

### Visual Design
- [ ] 9 unique colors assigned (8 planets + 1 grey sun)
- [ ] Colors consistent across L1 and L2
- [ ] Thick border (8px) only on central suns
- [ ] Medium border (4px) on L2 central grid container
- [ ] Normal borders (2px) on all other cells

### Functionality
- [ ] All zoom levels work correctly
- [ ] Clicking L2 subgrids opens correct content
- [ ] Card flips work on individual and global level
- [ ] Language toggle changes UI labels only
- [ ] Presentation mode displays properly

---

## IX. CUSTOMIZATION OPTIONS

### Easy Modifications
1. **Change colors**: Update the `.cell.pos-X` gradient values
2. **Adjust grid size**: Modify `.grid` gap and padding values
3. **Change fonts**: Update `font-family` in body styles
4. **Modify borders**: Adjust border thickness in `.cell` classes

### Advanced Customizations
1. **Add more zoom levels**: Extend fractal to L3 (27×27 grid)
2. **Different languages**: Replace Chinese with any other language
3. **Add images**: Include image URLs in cell data
4. **Export functionality**: Add PDF/PNG export buttons
5. **Animation effects**: Customize flip animation timing/style

---

## X. EXAMPLE USAGE

```html
<!-- Minimal implementation example -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Fractal Grid</title>
    <style>
        /* Copy all CSS from the template */
    </style>
</head>
<body>
    <div class="header">
        <h1>My Topic: Fractal Grid</h1>
    </div>
    
    <div class="controls">
        <!-- Control buttons -->
    </div>
    
    <div id="gridContainer" class="grid-container">
        <div id="grid" class="grid level-1"></div>
    </div>
    
    <script>
        const contentData = {
            L0: [/* your L0 data */],
            L1: [/* your L1 data */],
            L2: [/* your L2 data */]
        };
        
        /* Copy all JavaScript functions from template */
        
        // Initialize
        renderGrid();
    </script>
</body>
</html>
```

---

## XI. TROUBLESHOOTING

### Common Issues

**Problem**: L2 subgrids all open to the same content
- **Cause**: Closure issue in click handler
- **Solution**: Use IIFE pattern: `((idx) => () => zoomToSubgrid(idx))(index)`

**Problem**: Colors not showing in L2 central grid
- **Cause**: Missing position classes
- **Solution**: Assign `pos-${cellIndex + 1}` to central grid cells

**Problem**: Overlay not clickable
- **Cause**: Missing `position: relative` on `.subgrid`
- **Solution**: Add `position: relative` to `.subgrid` CSS

**Problem**: Cards not flipping
- **Cause**: Missing `transform-style: preserve-3d`
- **Solution**: Ensure `.cell-flipper` has proper 3D transform styles

---

## XII. RESOURCES

### Recommended Tools
- **Content Generation**: Claude, ChatGPT, or other LLMs
- **Translation**: DeepL, Google Translate (verify accuracy)
- **Color Palette**: Coolors.co, Adobe Color
- **Testing**: Chrome DevTools, Firefox Developer Tools

### Further Reading
- CSS 3D Transforms: MDN Web Docs
- Grid Layout: CSS-Tricks Complete Guide
- Fractal Design Principles: Mathematical visualization resources

### Multimedia Enhancement
- **Template**: See `grids/multimedia-template.html`
- **Guide**: See `MULTIMEDIA-GUIDE.md` for complete documentation
- **Examples**: Template includes image, audio, and video examples

---

## XIII. MULTIMEDIA SUPPORT (NEW)

### Overview
Enhance your fractal grids with images, audio podcasts, and video files. Students can view media directly in cells and download files for offline access.

### Supported Media Types
1. **Images** (JPG, PNG, WebP, SVG)
2. **Audio/Podcasts** (MP3, M4A, OGG)
3. **Video** (MP4, WebM)

### Adding Images
```javascript
{
    titleEn: "Mount Fuji",
    titleZh: "富士山",
    contentEn: "Japan's sacred mountain",
    contentZh: "日本的神圣山脉",
    image: "images/mount-fuji.jpg",
    imageAlt: "Mount Fuji snow-capped peak"
}
```

### Adding Audio/Podcasts
```javascript
{
    titleEn: "Volcanic Threats",
    titleZh: "火山威胁",
    contentEn: "Understanding the dangers",
    contentZh: "了解危险",
    audioUrl: "audio/volcanic-threats-podcast.mp3",
    audioTitle: "Expert Interview (12 min)",
    audioSize: "8.5 MB"
}
```

### Adding Video
```javascript
{
    titleEn: "Eruption Simulation",
    titleZh: "喷发模拟",
    contentEn: "3D computer model",
    contentZh: "3D计算机模型",
    videoUrl: "videos/eruption-simulation.mp4",
    videoTitle: "Pyroclastic Flow Simulation (8 min)",
    videoSize: "65 MB",
    videoPoster: "images/eruption-poster.jpg"
}
```

### Features
- 🖼️ Images display at top of cells
- 🎧 Podcast icon with play and download buttons
- 🎬 Video icon with play and download buttons
- ⬇️ Download capability for offline access
- 📱 Mobile-responsive design
- 🌐 Works on both English and Chinese sides

### File Organization
```
grids/
├── your-grid.html
├── images/          ← Image files
├── audio/           ← Audio/podcast files
└── videos/          ← Video files
```

### Quick Start
1. Use `grids/multimedia-template.html` as starting point
2. Add media files to appropriate folders
3. Update cell data with media URLs
4. Test in browser
5. Deploy to platform

### Complete Documentation
See `MULTIMEDIA-GUIDE.md` for:
- Detailed implementation examples
- File size guidelines
- Compression tools
- Best practices
- Troubleshooting

---

**Created**: November 2024  
**Version**: 1.0  
**License**: Open for educational and commercial use
