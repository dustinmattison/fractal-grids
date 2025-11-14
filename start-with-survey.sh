#!/bin/bash

# Startup script for Fractal Grids + Student Survey
# This script starts both the fractal grids server and the student survey app

echo "🚀 Starting Fractal Grids Platform with Student Survey..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SURVEY_DIR="/Users/dustinrobertmattison/CascadeProjects/homework-feedback/student-survey"

# Check if survey directory exists
if [ ! -d "$SURVEY_DIR" ]; then
    echo -e "${YELLOW}⚠️  Warning: Survey directory not found at: $SURVEY_DIR${NC}"
    echo "Survey app will not be started."
    SURVEY_DIR=""
fi

# Function to cleanup on exit
cleanup() {
    echo ""
    echo -e "${YELLOW}🛑 Shutting down servers...${NC}"
    kill $(jobs -p) 2>/dev/null
    exit 0
}

# Set up trap to catch Ctrl+C
trap cleanup SIGINT SIGTERM

# Start Fractal Grids Server (Node.js on port 3000)
echo -e "${BLUE}📚 Starting Fractal Grids Server...${NC}"
cd "$SCRIPT_DIR"
npm start &
GRIDS_PID=$!

# Wait a moment for the server to start
sleep 2

# Start Student Survey (Streamlit on port 8501) if directory exists
if [ -n "$SURVEY_DIR" ]; then
    echo -e "${BLUE}📝 Starting Student Survey App...${NC}"
    cd "$SURVEY_DIR"
    python3 -m streamlit run survey_app.py &
    SURVEY_PID=$!
    
    # Wait for both to start
    sleep 3
    
    echo ""
    echo -e "${GREEN}✅ Both servers are running!${NC}"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${GREEN}📚 Fractal Grids:${NC}     http://localhost:3000"
    echo -e "${GREEN}📝 Student Survey:${NC}    http://localhost:8501"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo -e "${YELLOW}💡 Tip: Click the '📝 Weekly Survey' button in the grid header${NC}"
    echo -e "${YELLOW}    to open the survey in a new tab.${NC}"
    echo ""
    echo "Press Ctrl+C to stop both servers"
    echo ""
else
    echo ""
    echo -e "${GREEN}✅ Fractal Grids Server is running!${NC}"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${GREEN}📚 Fractal Grids:${NC}     http://localhost:3000"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
fi

# Wait for background processes
wait
