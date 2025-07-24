#!/bin/bash
# Auto-commit and push every 5 minutes
while true; do
  git add .
  git commit -m "Auto-commit: periodic sync" --allow-empty
  git push
  sleep 300
done 