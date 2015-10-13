#!/bin/bash
git pull
npm install

# Create base files
grunt sass
grunt exec:index

# Create compressed files
gzip -kf public/css/*.css
gzip -kf public/css/*.map
gzip -kf public/js/*.js
gzip -kf public/js/*.map
gzip -kf public/*.html