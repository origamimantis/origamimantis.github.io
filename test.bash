#!/bin/bash


python3.7 addimgs.py
python3.7 -m http.server --directory . 9476
