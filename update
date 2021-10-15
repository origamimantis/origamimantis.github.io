#!/bin/bash

msg="$@"

if [[ $msg = "" ]]
then
  msg="update website"
fi

python3.7 addimgs.py

git add -A
git commit -m "$msg"
git pull
git push
