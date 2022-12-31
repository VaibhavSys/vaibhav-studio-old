+++
canonical = ""
categories = []
date = 2022-12-31T15:47:20Z
description = "A symbolic link (also known as a symlink or soft link) is a special type of file that points to another file or directory on your file system. Symbolic links behave like shortcuts in Windows - they are often used to redirect applications and commands to the desired location without having to move or copy the actual files."
draft = true
featured = false
featured_image = ""
keywords = ["what are symbolic links in linux", "linux what is a symbolic link", "what is symbolic link in unix", "symbolic link in linux", "how to create a symbolic link in linux", "what is a symbolic link in linux", "how to create a soft link in linux", "symbolic links in ubuntu"]
seotitle = ""
tags = ["linux"]
title = "What is a symbolic link in Linux?"

+++
# Introduction

In Linux, a symbolic link (also known as a symlink or soft link) is a special type of file that contains a reference to another file or directory. Symlinks are used to store the paths of other files or directories and allow multiple names, links, or paths for accessing them. They are often used to redirect applications and commands to the desired location without having to move or copy the actual files.

# Creating a Symlink

The syntax to create a symlink (also known as a soft link) to a directory is:

`$ ln -s [original path] [new link name]`

The syntax to create a symlink to a file is similar, that is:

`$ ln -s [original path/filename] [new link filename]`

The link command is `ln`. In the absence of the `-s` switch, a hard link is created.

# Hard Links

Each file within the Linux filesystem begins with a single hard link. The link is between the filename and the actual data stored on the filesystem. The creation of another hard link to a file means several things.

When modifications are made to one filename, the other reflects these modifications. The permissions, link count, ownership, timestamps, and file are exactly the same. The data remains under the secondary hard link if the original file is deleted. Data is only deleted from your drive once all links to the data have been deleted. If you find two files with identical properties but are unsure if they are hard-linked, use the `ls -i` command to display the inode number. Hard-linked files have the same inode number.

Note: In `exa`, the `-l` switch will be needed to be used in combination with the `-i` switch to display inode numbers for files.

## Limits of Hard Links

Although useful, there are some limits to what hard ties can do. To start, they can only be created for regular files (not directories or special files). Moreover, one hard link cannot span multiple file systems. They only function when the new hard link exists on the same file system as the original.

# Soft Links

Commonly known as symbolic links, soft links connect non-regular and regular files. They can also span multiple filesystems. By definition, a soft link is not a standard file, but a special file that references an existing file.

All this sounds good, but there are a few disadvantages to using a soft link. The greatest worry is data loss and data confusion. In case the original file is deleted, the soft link is broken. This situation is referred to as a dangling soft link. If you were to create a new file with the same name as the original, your dangling soft link is no longer dangling. It references the newly created file, whether that was your intent or not, so be sure to keep that in mind.

# What to choose?

There is no clear answer here. The best link is the type that fits your particular circumstances. Although these concepts may be difficult to remember, the syntax is quite simple, so it's a plus! So that both remain easily separated in your mind, remember that:

* A hard link always references a filename to data on a storage device.
* A soft link always references a filename to another filename, which then references data on a storage device.