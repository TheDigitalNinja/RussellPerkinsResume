#!/bin/bash
git pull
npm install

# Create base files
grunt sass
grunt exec:index

# Prep files
if [! -f dist/ ]
	mkdir dist
fi
rm -rf dist/*
cp -r public/* dist/

# Compress files
find dist/*.html -exec gzip -9 {} \; -exec mv {}.gz {} \;
find dist/css/*.css -exec gzip -9 {} \; -exec mv {}.gz {} \;
find dist/css/*.map -exec gzip -9 {} \; -exec mv {}.gz {} \;
find dist/js/*.js -exec gzip -9 {} \; -exec mv {}.gz {} \;
#find dist/js/*.map -exec gzip -9 {} \; -exec mv {}.gz {} \;