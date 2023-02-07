+++
canonical = ""
categories = ["Guide"]
date = 2023-02-07T05:18:54Z
description = "Learn how to transfer files securely using SCP with this comprehensive guide from Vaibhav.Studio. Discover the syntax and advanced options for transferring files and directories over an SSH connection."
featured = false
featured_image = ""
keywords = []
seotitle = ""
tags = ["linux"]
title = "Guide to SCP: Secure Copy to Transfer Files via SSH"

+++
## Introduction

SCP (Secure Copy) is a file transfer program used to transfer files securely between computers over an SSH (Secure Shell) connection. SCP is based on the SSH protocol and is used to securely transfer files between a local and a remote server, or between two remote servers. This guide will provide a comprehensive overview of SCP and how to use it to transfer files over SSH.

## What is SCP?

SCP (Secure Copy) is a command-line tool used to securely transfer files between a local and a remote computer. SCP uses the SSH (Secure Shell) protocol to encrypt the data during transmission, ensuring that the data is protected from prying eyes. The SCP command is used to copy files from one computer to another, either between a local and a remote computer or between two remote computers.

## What is SSH?

SSH (Secure Shell) is a protocol that provides secure encrypted communications between two untrusted hosts over an insecure network. SSH is commonly used for logging into a remote machine and executing commands, but it also supports tunneling, forwarding TCP ports, and transferring files. SSH is a secure alternative to the standard telnet and FTP protocols.

## How to Use SCP

To use SCP, you need to have access to an SSH server. Most Unix-based systems (such as Linux and macOS) come with SSH installed, and many web hosting providers offer SSH access to their servers. If you are using a Windows system, you will need to install an SSH client, such as PuTTY.

Once you have access to an SSH server, you can use the following syntax to transfer files using SCP:

```bash
$ scp source_file username@destination_host:destination_folder
```

Replace `source_file` with the path and filename of the file you want to transfer, `username` with your username on the destination server, `destination_host` with the hostname or IP address of the destination server, and `destination_folder` with the path to the folder on the destination server where you want to save the file.

For example, if you wanted to transfer the file `my_file.txt` from your local machine to a remote server with the hostname `example.com` and the username `john`, you would use the following command:

```bash
$ scp my_file.txt john@example.com:/home/john/
```
This would transfer the file `my_file.txt` from your local machine to the `/home/john/` folder on the remote server `example.com` as the user `john`.

## Transferring Files from a Remote Server to a Local Machine

To transfer files from a remote server to your local machine, you can use the following syntax:

```bash
$ scp username@source_host:source_file destination_folder
```

Replace `username` with your username on the source server, `source_host` with the hostname or IP address of the source server, `source_file` with the path and filename of the file you want to transfer, and `destination_folder` with the path to the folder on your local machine where you want to save the file.

For example, if you wanted to transfer the file `my_file.txt` from the remote server with the hostname `example.com` and the username `john` to your local machine, you would use the following command:

```bash
$ scp john@example.com:/home/john/my_file.txt ~/Downloads/
```

This would transfer the file `my_file.txt` from the `/home/john/` folder on the remote server `example.com` to the `~/Downloads/` folder on your local machine.

## Transferring Directories using SCP

SCP can also be used to transfer entire directories and their contents. To transfer a directory, you need to add the `-r` (recursive) option to the SCP command. The following syntax can be used to transfer a directory from a local machine to a remote server:

```bash
$ scp -r source_directory username@destination_host:destination_folder
```

Replace `source_directory` with the path to the directory you want to transfer, `username` with your username on the destination server, `destination_host` with the hostname or IP address of the destination server, and `destination_folder` with the path to the folder on the destination server where you want to save the directory.

For example, if you wanted to transfer the directory `my_folder` from your local machine to the remote server with the hostname `example.com` and the username `john`, you would use the following command:

```bash
$ scp -r my_folder john@example.com:/home/john/
  ```

This would transfer the directory `my_folder` and all its contents from your local machine to the `/home/john/` folder on the remote server `example.com` as the user `john`.

Similarly, to transfer a directory from a remote server to a local machine, you can use the following syntax:

```bash
$ scp -r username@source_host:source_directory destination_folder
```

Replace `username` with your username on the source server, `source_host` with the hostname or IP address of the source server, `source_directory` with the path to the directory you want to transfer, and `destination_folder` with the path to the folder on your local machine where you want to save the directory.

For example, if you wanted to transfer the directory `my_folder` from the remote server with the hostname `example.com` and the username `john` to your local machine, you would use the following command:

```bash
$ scp -r john@example.com:/home/john/my_folder ~/Downloads/
```

This would transfer the directory `my_folder` and all its contents from the `/home/john/` folder on the remote server `example.com` to the `~/Downloads/` folder on your local machine.

## Conclusion

SCP is a powerful tool for transferring files securely between computers over an SSH connection. Whether you are transferring a single file or an entire directory, SCP provides a fast and secure way to transfer data between servers. By using SCP, you can ensure that your data is protected from prying eyes during transmission.

By using the simple syntax outlined in this guide, you can easily transfer files and directories using SCP. In addition to its ease of use, SCP also offers a number of advanced options, such as setting transfer speed limits, setting custom SSH options, and using a proxy server for transfers.

It is important to note that SCP only transfers files over an existing SSH connection, so it is necessary to have an active SSH session established with the remote server before you can use SCP. Additionally, you will need to have the necessary permissions on the remote server to transfer files to or from that server.

In summary, SCP is a versatile and powerful tool for transferring files securely between computers over an SSH connection. Whether you are a system administrator, a developer, or just someone who needs to transfer files regularly, SCP is a valuable tool to have in your arsenal.

For more information on Linux tools, visit the [Linux section of Vaibhav Studio](/tags/linux).