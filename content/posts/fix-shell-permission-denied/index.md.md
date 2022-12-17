+++
canonical = ""
categories = []
date = 2022-12-17T17:27:26Z
description = "This error usually occurs when the file you are trying to execute does not have the required permissions."
draft = true
featured = false
featured_image = ""
keywords = ["fix zsh permission denied", "fix bash permission denied", "fix sh permission denied", "fix permission denied", "shell permission denied", "cannot execute file"]
seotitle = "fix bash: permission denied: ./sheep_checkup.jar"
tags = ["linux"]
title = "Fix Bash Permission Denied"

+++
# bash: permission denied: ./sheep_checkup.jar

## What does bash: permission denied: ./sheep_checkup.jar mean?

The permission denied error is encountered when the script you are running does not have the execution permission. Unix and similar operating systems generally do not execute a shell script unless it has permission to execute it.

Look at the following example

```bash
$ ./sheep_checkup.jar

bash: permission denied: ./sheep_checkup.jar
```

Here, the error is raised because the file doesn't have the execute permission.

```bash
$ ls -alh sheep_checkup.jar

Permissions Size User  Date Modified Name
.rw-r--r--   155 mouse 17 Dec 23:05  sheep_checkup.jar
```

In the above result, you can see that the file has only the read and write permissions, but no execute permissions (denoted by x). So, the file cannot be executed.

Let's learn how to fix that.

## Solution to bash: permission denied: ./sheep_checkup.jar

We can use the `chmod` command to modify the permissions of the file.

#### To allow the file owner to execute the file

Use**_`$ chmod u+x filename`_**

#### To allow everyone to execute the file

Use **_`$ chmod +x filename`_**