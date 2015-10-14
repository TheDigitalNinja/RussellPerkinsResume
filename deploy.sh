#!/bin/bash
./build.sh && aws s3 sync dist/ s3://russellperkins.net --content-encoding 'gzip' --delete --cache-control 'max-age=86400'
