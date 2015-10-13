#!/bin/bash
./build.sh
aws s3 sync public/ s3://russellperkins.net --exclude '*.gz'
aws s3 sync public/ s3://russellperkins.net --exclude '*' --include '*.gz' --content-encoding 'gzip'