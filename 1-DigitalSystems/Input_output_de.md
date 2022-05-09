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