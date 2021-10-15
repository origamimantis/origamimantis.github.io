#!/bin/bash

msg="$@"

if [[ $msg = "" ]]
then
  msg="update website"
fi

pushd pictures
python3.7 addimgs.py
popd

git add -A
git commit -m "$msg"
git pull
git push
