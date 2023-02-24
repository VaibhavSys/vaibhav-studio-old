+++
canonical = ""
categories = ["How To"]
date = 2022-12-06T12:18:26Z
description = "Learn how to count files and directories in Linux using utilities like ls, find, and wc. Increase your productivity with these simple commands. Master Linux file management today!"
featured = false
featured_image = ""
keywords = ["count the number of files in linux", "count the number of directories in linux", "count the number of files and directories in linux", "count the number of files or directories in linux", "number of files or directories in linux", "count files in linux", "count directories in linux"]
seotitle = ""
tags = ["linux"]
title = "How to Count Files and Directories in Linux: A Comprehensive Guide"

+++
## Introduction

As a Linux user, you may find yourself needing to count the number of files or directories in a given location. Luckily, there are several utilities available that can help you accomplish this task quickly and easily. In this guide, we will cover various methods for counting files and directories in Linux using utilities like ls, find, and wc.

## Counting Files Only in Linux

To count the number of files in Linux, you can use the following command:
```
~/sheep_farm » ls -pA1 | grep -v / | wc -l
```    

Here's what each part of the command does:

* `ls -p1`: Adds a `/` in front of directories. The `-1` option tells `ls` to show only one file per line.
* `grep -v /`: Filters out all entries with a `/` in them
* `wc -l`: Counts the lines

Note: The above command will not work in `exa`, as the `-A` and `-p` flags are not available. In such a case, you can use standard `ls` or execute the `ls` binary from `/usr/bin/ls` if you have `ls` aliased to `exa`.

## Counting Directories Only in Linux

To count the number of directories in Linux, you can use the following command:
```
~/sheep_farm » ls -1d */ | wc -l
```
Here's what each part of the command does:

* `ls -1d */`: Lists all directories in the current directory, showing only one directory per line
* `wc -l`: Counts the lines

Note: This command will only count non-hidden directories. To count hidden directories, use the following command instead:
```
~/sheep_farm » ls -ld .*/ | wc -l
```
## Counting Files and Directories in Linux

To count the number of files and directories in Linux, you can use the following command:
```
~/sheep_farm » ls -A1 | wc -l
```
Here's what each part of the command does:

* `ls -A1`: Shows almost all files (excluding `.` and `..`) and displays one file per line
* `wc -l`: Counts the lines

## Counting Files and Directories Recursively in Linux

If you need to count files and directories recursively, you can use the following commands:

### Counting Files Recursively in Linux
```
~/sheep_farm » find . -type f | wc -l
```
### Counting Directories Recursively in Linux
```
~/sheep_farm » echo "$(expr $(find . -type d | wc -l) - 1)"
```
### Counting Files and Directories Recursively in Linux
```
~/sheep_farm » echo "$(expr $(find . -type d | wc -l) - 1 + $(find . -type f | wc -l))"
```
Note: The above commands may take some time to complete if you have a large number of files and directories.

## Conclusion

Counting files and directories in Linux can be achieved using a variety of methods, each with its own strengths and limitations. Whether you prefer to use `ls`, `find`, or a combination of both, you now have the knowledge to count files and directories like a pro.