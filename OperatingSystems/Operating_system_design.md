---
aliases: [OS]
---

> [!important|inIL]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems
> **Created:** 26/12/2022 - 09:27
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Operating system design
- A software layer that simplifies the computer model for programs and manages system resources
- An OS does the following:
	- Manages hardware and system resources 
	- Offers a secure environment for applications and multiple users
	- Provides common device or [[Input&Output_systems|I/O system]]
- Does not account for applications and services, this includes the desktop environment
- An OS provides an abstract view of a computer for applications to work with 

![[Pasted image 20221124231055.png|500]]

- An OS can also be written over a hardware level of abstraction
- A typical Linux distribution would consist of:
	1. Linux Kernel
	2. GNU tools (gcc, gdb) and libraries
	3. Additional software + documentation
	4. Desktop environment (eg Gnome / KDE) + window system (eg Wayland / i3)
	5. Package management system (eg Flatpak / Snap)

![[Pasted image 20221124153323.png|400|300]]

- An OS will also fairly allocate resources between users, preventing two users from using the same resource or interfering with other users in any way.
## Kernel
- The core of a computer OS, controls interactions between hardware and software components
- Always resident in memory and handles use of processes such as use of the CPU, memory, disk I/O and networking
## Linux filesystem
- The linux [[File_systems|file system]] tree:

![[Pasted image 20220618155352.png|600|600]]

## Booting process

- The boot process can be broken down into 3 core steps, system management and initialization daemons such as **systemd** exist which cover all of these
### BIOS
- Stands for **basic input/output system**
- Initializes the program counter and performs the basic hardware initialization, the first few sectors of a device are also loaded into memory.
- The bootloader and kernel code of target OS is typically part of initialization
### Bootloader
- Started by BIOS, loads kernel img and  **initrd** img (initial ram disk & temp root file system) to memory. 
- On linux, can be found in /boot/grub/grub.cfg
### Boot process
- Root file system switched from memory to one on disk
- Executes the init script with PID 1 (process identification number)
## Login process
- Login from the console provided by the **getty** program, getty reads the username and run the login program.
- Login over a network handled through **ssh**
- Kernel has no knowledge of logins, this is handled through system programs 
### Authentication
- On unix, authentication is provided by PAM (pluggable authentication modules),  PAM uses the following config file:
	- **/etc/passwd** account info
	- **/etc/shadow** secure account info (password hash)
	- **/etc/group** group info
## Shell
- A program used to employ commands [[Bash]]
- Common variants include bash, tcsh, dash, csh,  and zsh
- The shell is an interactive command language, scripting language and is used by the operating system to control the system via shell scripts


## System processes
- A running instance of a program invoked by exec()
- [[Concurrency#Threads|Threads]] are a flow of execution within a process
- Threads are more efficient as they don't have the baggage of needing hardware info, permissions, etc.
- When a process is run the OS needs to account for its **context** which describes the info related to an individual process, this includes
	- File permissions
	- [[Computer_memory#Memory distribution|Memory map / layout]]
	- On-going communication state 
	- Resource usage
- Child processes are part of this as well
- Context is stored in table, basic process control block:

![[Pasted image 20221125105733.png|450|450]]

- Multiple processes:

![[Pasted image 20221125110337.png|350|350]]

### Process hierarchy
- Processes can spawn child processes 
- Limit is imposed by system both system (for system stability) and per process (for fairness)

![[Pasted image 20221125110745.png|350|350]]

> Parents get the PID, child processes always get a PID of 0

- Child goes into zombie state before resources are returned to parent
- Process states:
	- **Interruptible**: operation can be stopped
	- **Uninterruptible**: operation must complete

![[Pasted image 20221125111147.png|450|450]]

## System calls
- System calls act as a standard interface and access control mechanism to OS / kernel  functions
- User programs cannot directly communicate with most hardware, unrestricted access would allow a program to read/write anything. 
- **fread** for example is a higher level application that calls the standard read function 
- System calls work by loading passed in parameters in registers and then invoking an **interrupt** that acts as a trigger to call the kernel.
- [[Input&Output_systems#Interrupts|Interrupts]] tell the kernel a system call was made

## Clocks and timers
- **Real time clock (RTC)**: returns encoding of current date 
- **Programmable interrupt timer**: creates periodic events at set / configurable level, used to invoke periodic tasks within the kernel 
### Frequency problems
- Low frequency can make the kernel seem unresponsive 
- High frequency can make the OS spend too much overhead managing timers
### Dynamic interval timers
- Creates event queue with a timer that's configured to fire when the next task is due rather than in fixed periods that have been set
- Governed by shortest gap between events that need to be managed  

![[Pasted image 20221127161943.png|550|550]]
