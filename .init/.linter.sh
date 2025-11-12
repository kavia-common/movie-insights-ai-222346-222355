#!/bin/bash
cd /home/kavia/workspace/code-generation/movie-insights-ai-222346-222355/movie_ai_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

