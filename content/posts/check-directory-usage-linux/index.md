+++
canonical = ""
categories = []
date = 2022-11-23T12:47:59Z
description = "The  command “du” (Disk Usage) is a standard Unix/Linux command, used to check the information of disk usage of files and directories on a machine."
draft = true
featured = false
featured_image = ""
keywords = ["directory usage in linux", "check directory usage in linux", "how to find how much space a directory is taking in linux", "check directory space in linux"]
seotitle = ""
tags = ["linux"]
title = "Check directory usage in Linux"

+++
The  command “du” (Disk Usage) is a standard Unix/Linux command, used to check the information of disk usage of files and directories on a machine.

## How to find the disk usage of a directory

Using the “-h” option with the “du” command provides results in “Human Readable Format“. This means that you can see the sizes in Bytes, Kilobytes, Megabytes, Gigabytes, and so on.

```shell
[vaibhav@vaibhav-studio /]$ sudo du -sh /etc

15M	/etc
```

#### Lets break that command down

* `sudo` - The command starts with sudo because most of the files and directories inside the /etc directory are owned by the root user and are not readable by the regular users. 
* `du` - The command
* `s` - Display only the total size of the specified directory, do not display file size totals for subdirectories.
* `h` - Print sizes in a human-readable format (`h`).
* `/etc` - The path of the directory of which you want to get the size of.