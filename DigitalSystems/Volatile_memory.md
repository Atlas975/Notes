# What is memory 
- Memory / primary memory is a device designed for storing information (bits) for immediate use in a computer.
- Not part of the CPU.
- The CPU uses a program counter to get an address and then sends it to the memory to access this instruction.
- Memory is usually organized into multiple memory chips
# Volatile memory
- Only used while computer is active, data wipes when computer is shutdown making it volatile.
- In contrast to ROM, which contains the computers start up instructions.
- RAM is an example of volatile memory, but cache memory is faster as its closer to the CPU.
#### There are two types of volatile memory:
# Dynamic (main) memory
- Slower than static but cheaper.
- Bits stored by charging and discharging a device
- Bits are read by sensing the presence/absence of stored charge.
- Looks like pigeon holes, where each hole stores one unit of data and each location having an address. These addresses are usually linear: 1,2,3.

# Static memory
- Involves the allocation of memory during compile time before actual program execution.
- A network of logic circuits are used to build storage of individual bits.		
# Memory map
- A database containing information on how memory is structured on a computer system. Each computer file has a unique memory address reserved for it.
>![[Pasted image 20211110122442.png]] 

# Address decoding
- Maps an address to a specific location in a memory chip. A 3 bit address decoder for example can get 8 different location (binary representation of 0-7)
# Memory hierarchy
>![[Pasted image 20211110120043.png|500|500]]
# Byte ordering in multi-byte word
- Multi-byte words (eg 8*4=32 bits) can be organized in different ways.
## Big-endian
- The byte with the lowest memory address holds the most significant byte 
## Little-endian 
- The byte with the lowest memory address holds the least significant byte  
>![[Pasted image 20211110124619.png]]
- This needs to be accounted for when performing operation on words or when transferring from one endian to another. 


