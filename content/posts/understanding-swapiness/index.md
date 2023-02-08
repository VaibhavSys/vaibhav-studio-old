+++
canonical = ""
categories = ["Guide", "How To"]
date = 2023-02-08T14:05:28Z
description = "Learn what swappiness is in Linux and how to check and adjust its value for optimized system performance. Check out our guide on creating a swap file on vaibhav.studio."
featured = false
featured_image = ""
keywords = ["swappiness", "Linux", "kernel parameter", "swap space", "physical memory", "RAM", "temporary", "persist", "reboot", "sysctl.conf", "performance", "Creating a Swap File", "vaibhav.studio"]
seotitle = ""
tags = ["linux"]
title = "Understanding and Adjusting Swapiness in Linux: A Comprehensive Guide"

+++
## Introduction

Swappiness is a Linux kernel parameter that defines how aggressively the system uses the swap file. The higher the `swappiness` value, the more aggressive the system will be in using the swap file, and vice versa. In this article, we'll cover what `swappiness` is, how to check its current value, and how to adjust it. Also check out our article on \[creating a swap file\[(/posts/linux-create-swap/) in Linux.

## What is Swappiness?

As mentioned earlier, `swappiness` is a Linux kernel parameter that determines how aggressively the system uses the swap file. It's a value between 0 and 100, where a value of 0 means that the system will only use the swap file when physical memory (RAM) is completely depleted, while a value of 100 means that the system will use the swap file as soon as it begins to run out of physical memory.

## Checking the Current Swappiness Value

To check the current `swappiness` value, you can use the following command in the terminal:

```bash
$ cat /proc/sys/vm/swappiness
```

This command will return a single number, which is the current `swappiness` value.

## Adjusting the Swappiness Value

To adjust the `swappiness` value, you can use the `sysctl` command, which allows you to modify kernel parameters. To do this, you'll need to run the following command as root:

```bash
$ sudo sysctl vm.swappiness=60
```

Replace `60` with the desired value. This change will not persist after a reboot, so if you want the change to persist, you'll need to modify the `/etc/sysctl.conf` file:

```bash
$ sudo nano /etc/sysctl.conf
```

At the bottom of the file, add the following line:

    vm.swappiness=60

Save the file and close it. The change will take effect after the next reboot.

## Conclusion

In this article, we have covered what `swappiness` is, how to check its current value, and how to adjust it. By understanding and adjusting the `swappiness` value, you can control how aggressively the system uses the swap file and optimize the performance of your system.

If you haven't already, be sure to check out our article on \[creating a swap file\](/posts/linux-create-swap), which provides a step-by-step guide for creating a swap file in Linux.