+++
canonical = ""
categories = ["How To"]
date = 2022-12-04T14:14:55Z
description = "Renaming a file or directory in Linux is easy! We can use the mv command to rename files and directories."
featured = false
featured_image = ""
keywords = ["how to rename a directory in linux", "how to rename a file in linux", "how to change a filename in linux", "change a filename in linux", "rename a directory in linux", "rename a file in linux"]
seotitle = ""
tags = ["linux"]
title = "How to rename a files and directory in Linux"

+++
Renaming a file or directory in Linux is easy! We can use the mv command to rename files and directories.

## Syntax
```shell
$ mv <current_path> <new_path>
```
## Examples
```
~/sheep_farm » ls
sheep  sheep_count.txt  sheep_report.txt
```
I have a directory named sheep, two files.
I want to rename `sheep_count.txt` to `sheep_quantity.txt`.
I would use the command:
```shell
$ mv sheep_count.txt sheep_quantity.txt
```
Let's see the output
```shell
~/sheep_farm » ls
sheep  sheep_quantity.txt  sheep_report.txt
```