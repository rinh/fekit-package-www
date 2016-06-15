#!/bin/bash

path=$(cd $(dirname $0);echo $PWD)
cd $path
sudo pm2 stop fekit-package-www
sudo pm2 start $path/app.js --name="fekit-package-www"