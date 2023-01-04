+++
canonical = ""
categories = ["How To"]
date = 2023-01-04T10:18:05Z
description = "List users in Linux with the simple command line methods shown here. The manual also contains tips for finding and counting users."
draft = true
featured = false
featured_image = ""
keywords = ["how to list users in linux", "listing users in linux", "count users in linux", "find a users in linux", "searching users in linux"]
seotitle = ""
tags = ["linux"]
title = "How to list users in Linux"

+++
# Introduction

Linux stores local user details in the `/etc/passwd` file. Each line in the file contains information about a user, including their username, user ID number (UID), home directory, and login shell.

### List Users with `cat` Command

The `cat` command allows easy listing of the contents of the `/etc/passwd` file.

To view the contents, enter the command:

`$ cat /etc/passwd`

![](/uploads/2023-01-04-etc-passwrd-cat.png)

To view the number of users only, pipe the output of the previous command to the [`wc` command](/posts/count-files-directories-linux/) and make it count the number of lines:

`$ cat /etc/passwd | wc -l`  
![](/uploads/2023-01-04-cat-passwd-wc.png)

The number of lines in `/etc/passwd` equals the total number of users.

# List users with `less` and `more`

On systems with many users, it is worth limiting the output of the `/etc/passwd` file displayed at the same time. Use a terminal pager command, such as `less` or `more`, to navigate the contents of the file line by line or page by page.

To view `/etc/passwd` through `less`:  
`$ less /etc/passwd`

![](/uploads/2023-01-04-etc-passwd-less.png)The `more` command is similar but is older and has a smaller set of features.

`$ more /etc/passwd`

![](/uploads/2023-01-04-etc-passwd-more.png)

# List users with `awk` command

Use the awk command to list user names only, without any additional user information. As the fields in `/etc/passwd` are separated with a colon symbol, the following syntax tells awk to display only the first field of each row:

`$ awk -F':' '{ print $1}' /etc/passwd`

![](/uploads/2023-01-04-etc-passwd-awk.png)

# List users with `getent` command

The `getent` command looks for and shows the system database entries. Searchable databases are available from `/etc/nsswitch.conf`.

List the entire contents of the `passwd` database by typing:

`$ getent passwd`

![](/uploads/2023-01-04-etc-passwd-getent.png)

You can also use this command  to look up specific users or to lookup a range of users.

To lookup a user by username:

`$ getent passwd [username]`

![](/uploads/2023-01-04-etc-passwd-getent-username.png)

To lookup a user by UID:

`$ getent passwd [UID]`

![](/uploads/2023-01-04-etc-passwd-uid.png)

To lookup users in a range of UUIDs:

`$ getent passwd {[first-UID]..[last-UID]}`

![](/uploads/2023-01-04-etc-passwd-range.png)

# Conclusion

This manual showed you how to list all Linux users, search for users, and find the number of users in Linux.