#!/bin/bash

msg="$@"

if [[ $msg = "" ]]
then
  msg=update website
fi

git add -A
git commit -m "$msg"
git pull
git push
