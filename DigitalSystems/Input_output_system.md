# What does the I/O system do
- Allows attachment of data into and out of a machine.
## I/O layout
>![[Pasted image 20211119220139.png|500|500]]
# I/O problems / challenges
## Speed
- Usually mechanical, making them slower than the CPU potentially slowing it down.
- Any difference in performance can be a problem, wasting CPU clock cycles.
## Diverse diversity
1. Different access modes such as read/write
2. Accessed by either a single byte or a stream of bytes.
3. Random access like a disk or sequential access like a tape.
4. Device specific operations like camera focus or timers.
# Device drivers
- Software plugins inside the OS, purpose is to abstract data by grouping somewhat similar devices together like external storage.
- Other functions include
1. Registering and initializing devices with OS
2. Initiating data transfer to/from a device 
3. Monitoring status of devices
4. Managing device/system shutdown, ensuring the OS doesen't completely go offline data that needs to be written has been stored.
## Device driver types
1. Character devices: send/receive one byte at a time eg keyboard
2. Block devices: send/receive multi-byte block at a time eg hard disk 

## Block device example: hard disk
- Naturally block oriented with smallest unit of disk storage being a sector
>![[Pasted image 20211119222858.png|200|300]]
- With these disks, how fast they can be accessed is usually more important than the rate they transfer data.
## Components of disk access latency
- Seek time: time taken for the head disk to leave and enter the cylinder.
- Rotational delay: time required for the sector to make a full rotation.
- These are both mechanical delays, which are much larger than CPU delays.

# Types of processor support for IO
## Isolated I/O
- Dedicated physical pins/ports for I/O connect
- Dedicated instructions for I/O
- Best suited for simple devices as classifying devices through abstraction doesn't help much when using limited instructions.
- A common data bus can be used but a control line is also needed to distinguish between read/write
>![[Pasted image 20211119225107.png|500|500]]

## Memory mapped I/O
- Linear memory address eg next keyboard character can be determined with address of previous character.
- Can fall victim to electrical noise, distorting data.


# Input / Output 
- Unlike other operating systems, Unix / Linux uses an abstract device that does not need to know what kind of device its communicating with.
- This is achieved using a data stream, an ordered sequence of bytes, the C runtime environment supports this as well
- Unix merges the I/O system with the filesystem through the use of device files present on the system eg /dev/mouse. 
- /dev/ houses I/O mechanisms 
- The same interface are used for writing to and from normal files. This is done by accessing and closing these files

	
- There are two standard device types diffrentiated by the type of hardware they work with and by the way the OS processes them.

>![[Pasted image 20220503113647.png]]

## Streams 
- Streams are the standard way of reading and writing data
- Each process has access to 3 distinct streams, these are already open and can be used instantly.

>![[Pasted image 20220503114414.png]]


## Buffers
- Streams are typically buffered, writing to a stream writes to a buffer
- These are occasionally flushed when the buffer is full / stream is closed / a newline is written. A flush is manually achieved using fflush

## EOF : end of file 
- Indicates when the end of a stream is reached, also used to report random erors
- feof() explicitly checks for EOF

## Basic I/O functions
>![[Pasted image 20220503115358.png]]

## Pipes
- A method of sharing data between processes 
>![[Pasted image 20220503142054.png]]

- These can also be used to connect a program with an existing one using popen()

## Sockets 
- Allows data to be exchanged across different computers  through the use of IP sockets
- A TCP/IP connection is established between hosts


# Synchronous IO
- Simplest way to do IO
- The CPU just waits for input
- Limited by how unless the device is ready instantly, the processor spends a lot of time polling (sampling status of input device) for the next byte
## Process:
>![[Pasted image 20211130111234.png]]
## Synchronous IO with block transfer
- Waits for the first block and then transfers a whole block of data at once
## Asynchronous IO
- Allows other processes to continue before transmission has finished. 

# DMA (Direct memory access)
- DMA devices have their own internal processor letting them directly access a computers memory
- The computers processor determines how much data is to be transferred 
- This requires dual port memory, making the device complex and expensive

# Interrupt handling 
- A signal passed to a processor device, causes the processor to jump to a memory address known as the interrupt service routine (ISR)
- Happens unpredictably between instructions
- The following process occurs:
1. Stops what its doing
2. Note the execution state for later in the program counter (PC)
3. Runs interrupt code 
4. Retrieves execution state and continues where left off.
- Note the program counter acts as a stack in this case.

## Interrupt vector
- A memory address where the computer expects to find an ISR
>![[Pasted image 20211130113054.png]]

## Interrupt priority
- Higher priority: eg. network interference 
- Lower priority: eg. slower devices like the keyboard
- Most interrupts cand be ignored (masked) to prevent the processor being interrupted during critical operations.
- High priority is not maskable.