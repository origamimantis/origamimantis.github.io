#!/bin/bash

msg="$@"

if [[ $msg = "" ]]
then
  msg="update website"
  echo $msg
fi

python3.7 addimgs.py

git add -A
git commit -m "$msg"
git pull
git push
