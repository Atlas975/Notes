
---
aliases: [I/O]
---
> [!important|inIL]- Metadata
> **Tags:** #OperatingSystems #Concurrency 
> **Located:** OperatingSystems
> **Created:** 26/12/2022 - 09:28
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
# Input & output systems
- Allows attachment of data into and out of a machine.
- I/O layout:

![[Pasted image 20211119220139.png|350|350]]

# Interrupts
- Alternative to **polling** which involves the code spinning whilst awaiting a status change on a busy flag. this method makes it difficult to interleave useful code and is also known as **synchronous I/O**
## Synchronous I/O
- Simplest way to process I/O, the CPU waits for an input
- Limited by how unless the device is ready instantly, the processor spends a lot of time polling (sampling status of input device) for the next byte
- Synchronous I/O can also be done via **block transfer** where where data from the first block is waited on then transferred all at once

![[Pasted image 20221129110641.png|450|450]]

## Asynchronous I/O
- I/O driven by interrupts, the main thread is able to run with the interrupt control flow only taking over once an interrupt is sent. This is less wasteful of resources

![[Pasted image 20221129001447.png|450|450]]

- Interrupts prioritize themselves through the [[#Interrupt vector]]
## Interrupt handling
- A signal passed to a processor device, causes the processor to jump to a memory address known as the interrupt service routine (ISR)
- Happens unpredictably between instructions
- The following process occurs:
  1. Stops what its doing, disabling interrupts of lower priority
  2. Note the execution state for later in the program counter (PC)
  3. Uses interrupt code to find and run an interrupt service routine
  4. Retrieves execution state and continues where left off.
- Note the program counter acts as a stack in this scenario

![[Pasted image 20221206152217.png|300]]

## Interrupt lines
- When an interrupt occurs, the CPU is unaware of which process called it
- This means it has to poll each device to find out
- This can be done faster by grouping similar devices together

![[Pasted image 20221206153048.png|300]]

- Example of interrupt handling on x86 processors

![[Pasted image 20221206153621.png|500]]
> registers store current program state prior to interrupt

## Programmable interrupt controller
- To avoid the CPU having to have pins for every device, a PIC is used
- This handles several interrupts at once, sending a single electrical signal allowing the CPU to have a single interrupt line for a group of interrupts
- The Interrupt handler is able to communicate with the PIC to query the individual interrupt line responsible

![[Pasted image 20221206154423.png|550|550]]

## Interrupt vector
- A memory address where the computer expects to find an interrupt service routine (ISR)
- Interrupts are typically disabled on entry to the ISR, an interrupt like a power failure would be high priority, immediately allocating resources to preparing for recovery

![[Pasted image 20211130113054.png|500|500]]

- Interrupt priorities:
  - Higher priority: eg. network interference
  - Lower priority: eg. slower devices like the keyboard
- Most interrupts can be ignored (masked) to prevent the processor from being interrupted during critical operations.
- High priority interrupts are not maskable and take priority over the current process
- Interrupts themselves may be interrupted resulting in nested interrupts,  example application view of interrupts

![[Pasted image 20221206154634.png|500|500]]

## Interrupt mechanisms
- Interrupts can be sent by device connected via wire or by a message requested through an intelligent bus
- **Exceptions** which can encompass multiple errors at once are a response to an internal processor problem, calling the appropriate interrupt to respond to the exception
- Software interrupts are a mechanism where a particular instruction exists that invokes the same interrupt mechanism. Good way of transferring execution to a known piece of code

![[Pasted image 20221207142225.png|450|450]]

- Interrupts are required to be handled, if no ISR exists for an interrupt, the processor raises the **double fault** interrupt, attempting to recover from the unknown state ie blue screen of death which dumps out debugging information to trace the problematic interrupt
- If double fault isn't handled, processor **triple faults** forcing machine to restart

# I/O Problems / challenges
## Speed
- Usually mechanical, making them slower than the CPU potentially slowing it down.
- Any difference in performance can be a problem, wasting CPU clock cycles.
## Device diversity
1. Different access modes such as read/write
2. Accessed by either a single byte or a stream of bytes.
3. Random access like a disk or sequential access like a tape.
4. Device specific operations like camera focus or timers.
# Device drivers
- Software plugins inside the OS, purpose is to abstract data by grouping  similar devices together eg external storage, mouse devices etc
- Other functions include
  1. Registering and initializing devices with OS
  2. Initiating I/O from a device as well as having I/O protection and scheduling
  3. Monitoring status of devices
  4. Managing device/system shutdown, ensuring that data that needs to be written has been stored if the OS goes offline
- The complexity of device drivers comes from not knowing how they'll be called by applications, its essential that drivers aren't written in a way that assumes a uniform set of requests
- Unix's file oriented approach to drivers has a general interface of entry points for drivers

![[Pasted image 20221208112603.png|400]]
> certain operations may be classified as null if not relevant to device
![[Pasted image 20221208112834.png|500]]

- Device drivers will also order requests in a way to optimize resources, attempting to match the traversal of a disk head rather than having it move back and forth (avoid disk hotspots)
## Device driver types
1. **Character devices**: send/receive one byte at a time eg keyboard
2. **Block devices**: send/receive multi-byte block at a time eg hard disk

![[Pasted image 20221208113824.png|500]]

- **Cooked devices** offer post processed data, for instance pressing a letter followed by backspace cancels out returning nothing, in raw devices this is not the case. Another example would be returning usable addresses in file systems rather than metadata, this would be considered the 'cooked' output
- Drivers also need to account for the type of device
  - Single instance (ie a printer)
  - Multi-instance (ie a disk)
# Processor support for IO
## Memory mapped I/O
- I/O devices visible as memory locations, can easily be accessed by **pointers**
- Linear memory address eg next keyboard character can be determined with address of previous character.
- Can consist of:
  - Status registers to known if a device is ready to accept more data
  - Memory space to transfer data to device
- Can fall victim to electrical noise which will distort data.
- Only fast I/O should be attached directly to the main memory bus

![[Pasted image 20221127154625.png|400|400]]

- Slowest input device acts as a bottleneck, making memory only as fast as itself
- Not optimal for devices that need slow I/O mechanical items
## Isolated I/O
- Dedicated physical pins/ports for I/O connect for slower devices
- Dedicated instructions for I/O, acts as a separate memory bus
- This means no special hardware requirements or special chips to attach to memory bus

![[Pasted image 20221127155307.png|400|400]]

- Best suited for simple devices as classifying devices through abstraction doesn't help much when using limited instructions.
- A common data bus can be used but a control line is also needed to distinguish between read/write

![[Pasted image 20211119225107.png|250|250]]

- Since memory bus is in separate address space, this is not going to be understood by traditional higher level languages
- Special processor instructions needed to access these devices, this means routines need to be written in **assembler**
## DMA (Direct memory access)
- Alternative to programmed I/O , relieving CPU of data transfer
- DMA devices have their own internal processor letting them directly access a computers memory and decouple this process from the CPU

![[Pasted image 20221127163035.png|400|400]]

- The computers processor determines how much data is to be transferred
- This requires dual port memory, making the device complex and expensive
## Optimizing I/O memory use
- Information to and from devices is managed by circular queues of messages
- Status register holds info on device readiness and data availability

![[Pasted image 20221127162710.png|450|450]]

# Program level I/O
- Unix uses an abstract device that does not need to know what kind of device its communicating with.
- This is achieved using a data stream, an ordered sequence of bytes, the [[C_language]] runtime environment supports this as well
- Unix merges the I/O system with the filesystem through the use of device files present on the system eg /dev/mouse for a mouse device. **/dev** houses I/O mechanisms
- The same interface is used for writing to and from normal files. This is done by accessing and closing these files
- Programs use two standard device types differentiated by the type of hardware they work with and the way the OS processes them.
### Character devices
- Transmits data once character at a time
- Used for stream communication mice, keyboards etc
### Block devices
- Moves data in blocks, supports random access and seeking and uses buffered I/O
- Used for hard disks, flash drives, CD etc
## Streams
- Streams are the standard way of reading and writing data
- Each process has access to 3 distinct streams, these are already open and can be used instantly. These are:
  - **stdin:** standard input, generally text terminal that started program
  - **stdout:** standard output, generally text terminal which initiated program
  - **stderr**: standard error, same destination as stdout, output stream for error messages
## Buffers
- Streams are typically buffered, writing to a stream writes to a buffer
- These are occasionally flushed when the buffer is full / stream is closed / a newline is written. A flush is manually achieved using fflush
## EOF : end of file
- Indicates when the end of a stream is reached, also used to report random erors
- feof() explicitly checks for EOF in
## Sockets
- Allows data to be exchanged across different computers  through the use of IP sockets
- A TCP/IP connection is established between hosts
