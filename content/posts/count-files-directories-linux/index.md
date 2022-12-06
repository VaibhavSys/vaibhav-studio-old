+++
canonical = ""
categories = ["How To"]
date = 2022-12-06T12:18:26Z
description = "We can count the number of files or directories in linux with the help of utilities like ls, find and wc."
draft = true
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

`~/sheep_farm » ls -p | grep -v / | wc -l`

Explanation:

* `ls -p`: Tells `ls` to add a `/` infront of directories
* `grep -v /`: Tells grep to filter out all enteries with a `/` in them
* `wc -l`: Tells `wc` to count the lines

Note: This flag does not exist in `exa`, users of it will have to use standard ls, if you have aliased `ls` to `exa` then you can execute the ls binary from `/usr/bin/ls.`

Like: `~/sheep_farm » /usr/bin/ls -p | grep -v /`

## Count Directories ONLY

`~/sheep_farm » ls -ld */`

Explanation: Tells `ls` to show more information about files so that they are on separate lines and to only list directories not their contents of all directories in the current directory.