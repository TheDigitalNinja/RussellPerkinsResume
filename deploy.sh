#!/bin/bash
./build.sh 

aws s3 sync dist/ s3://russellperkins.net --exclude '*.html' --exclude '*.js' --exclude '*.css' --exclude '*.map' --cache-control 'max-age=86400'

aws s3 cp dist/*.html s3://russellperkins.net --content-encoding 'gzip' --cache-control 'max-age=86400'
aws s3 sync dist/js/ s3://russellperkins.net/js/ --content-encoding 'gzip' --cache-control 'max-age=86400'
aws s3 sync dist/css/ s3://russellperkins.net/css/ --content-encoding 'gzip' --cache-control 'max-age=86400'
