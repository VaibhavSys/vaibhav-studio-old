+++
canonical = ""
categories = ["How To"]
date = 2022-12-04T16:53:36Z
description = "Moving a file or directory in Linux is easy! We can use the mv command to move files and directories."
featured = false
featured_image = ""
keywords = []
seotitle = ""
tags = ["linux"]
title = "How to move files and directories in Linux"

+++
Moving a file or directory in Linux is easy! We can use the mv command to moving files and directories.

## Syntax

    ~/sheep_farm » mv <old_path> <new_path>

## Examples

```shell
~/sheep_farm » ls
sheep_quantity.txt  sheep_report.txt  sheeps
```

I have a directory named sheeps, two files.

I want to move `sheep_report.txt` into `sheeps` directory.

I would use the command:
```shell
~/sheep_farm » mv sheep_report.txt sheeps
```
Let's see the result
```shell
~/sheep_farm » ls
sheep_quantity.txt  sheeps
----------------------------------------------------------------------
~/sheep_farm » ls sheeps
sheep_four_report.txt  sheep_report.txt        sheep_two_report.txt
sheep_one_report.txt   sheep_three_report.txt
```
