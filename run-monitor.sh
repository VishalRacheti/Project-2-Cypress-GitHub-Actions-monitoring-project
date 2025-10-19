#!/bin/bash

# File: run-monitor.sh
# Purpose: Run Cypress tests and log results with timestamp

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
LOGFILE="cypress-monitor-$TIMESTAMP.log"

echo "Starting Cypress tests at $TIMESTAMP" | tee -a "$LOGFILE"

# Run Cypress headless
npx cypress run --headless 2>&1 | tee -a "$LOGFILE"

echo "Cypress tests completed at $(date +"%Y-%m-%d_%H-%M-%S")" | tee -a "$LOGFILE"
