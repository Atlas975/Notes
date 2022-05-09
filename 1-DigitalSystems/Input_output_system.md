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