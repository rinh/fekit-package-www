#!/bin/bash
path=$(cd $(dirname $0);echo $PWD)

[[ -e $path/pid.nohup ]] && kill -QUIT `cat $path/pid.nohup`
sleep 2
nohup sudo node $path/app.js >/dev/null 2>&1 &
echo $! > $path/pid.nohup
