#-*- cording: utf-8 -*-
import sys
import subprocess

pathToMP3 = "mp3/" + sys.argv[1] + ".MP3"
subprocess.call("mpg321 " + pathToMP3, shell=True)
