#!/bin/bash

asdf=$@

if [[ $@ = "" ]]
then
  asdf=update website
fi

git add -A
echo 1
git commit -m \"$asdf\"
echo 2
git pull
git push
