+++
canonical = ""
categories = ["How To"]
date = 2022-12-06T12:18:26Z
description = "We can count the number of files or directories in linux with the help of utilities like ls, find and wc."
featured = false
featured_image = ""
keywords = ["count the number of files in linux", "count the number of directories in linux", "count the number of files and directories in linux", "count the number of files or directories in linux", "number of files or directories in linux", "count files in linux", "count directories in linux"]
seotitle = ""
tags = ["linux"]
title = "Count the number of files and directories in Linux"

+++
# How to count the number of files or directories in Linux

We can count the number of files or directories in linux with the help of utilities like ls, find and wc.

## Count Files ONLY

`~/sheep_farm » ls -pA1 | grep -v / | wc -l`

Explanation:

* `ls -p1`: Tells `ls` to add a `/` infront of directories. The `-1` tells `ls` to only show one file per line.
* `grep -v /`: Tells grep to filter out all enteries with a `/` in them
* `wc -l`: Tells `wc` to count the lines

Note: This flag does not exist in `exa`, users of it will have to use standard ls, if you have aliased `ls` to `exa` then you can execute the ls binary from `/usr/bin/ls.`

The `-A` flag is not available in exa, you will need to use standard ls for that.

Like: `~/sheep_farm » /usr/bin/ls -p | grep -v /`

## Count Directories ONLY

`~/sheep_farm » ls -1d */ | wc -l`

Explanation: Tells `ls` to only list one file per line and to only list directories not their contents of all directories in the current directory.

Note: This will only count non-hidden directories, to count hidden directories use: `~/sheep_farm » ls -ld .*/ | wc -l`

Quick little bash one liner to list the directories in the current directory hidden and non hidden excluding `.` and `..: $ echo "$(expr $(ls -1d .*/ | wc -l) + $(ls -1d */ | wc -l) - 2)"`

## Count Files AND Directories

`~/sheep_farm » ls -A1 | wc -l`

Explanation: Tells `ls` to show one file per line and show almost all files (excluding `.` and `..`) and to count the lines.

## Count Files Recursively

`~/sheep_farm » find . -type f | wc -l`

## Count Directories Recursively

`~/sheep_farm » echo "$(expr $(find . -type d | wc -l) - 1)"`

## Count Files and Directories Recursively

`~/sheep_farm » echo "$(expr $(find . -type d | wc -l) - 1 + $(find . -type f | wc -l))"`