#OperatingSystems [[Bitwise_arithmatic]][[DigitalSystem_design]]

# Memory structure
> ![[Pasted image 20211116110439.png]]

# Primary memory
- Memory / primary memory is a device designed for storing information (bits) for immediate use in a computer.
- Not part of the CPU.
- The CPU uses a program counter to get an address and then sends it to the memory to access this instruction.
- Memory is usually organized into multiple memory chips
# Volatile memory
- Only used while computer is active, data wipes when computer is shutdown making it volatile.
- In contrast to ROM, which contains the computers start up instructions.
- RAM is an example of volatile memory, but cache memory is faster as its closer to the CPU.
- There are two types of volatile memory:
## Dynamic (main) memory
- Slower than static but cheaper.
- Bits stored by charging and discharging a device
- Bits are read by sensing the presence/absence of stored charge.
- Looks like pigeon holes, where each hole stores one unit of data and each location having an address. These addresses are usually linear: 1,2,3.

## Static memory
- Involves the allocation of memory during compile time before actual program execution.
- A network of logic circuits are used to build storage of individual bits.	

# Byte ordering in multi-byte words
- Multi-byte words (eg 8*4=32 bits) can be organized in different ways.
## Big-endian
- The byte with the lowest memory address holds the most significant byte 
## Little-endian 
- The byte with the lowest memory address holds the least significant byte  
>![[Pasted image 20211110124619.png]]
- This needs to be accounted for when performing operation on words or when transferring from one endian to another. 



# Data size 
## Data scale 
> ![[Pasted image 20220607213658.png]]
## Data type sizes 
>![[Pasted image 20220607214052.png]]
note that null terminated langauges like c will allocate an additional byte for strings to include a null character

## Data allignment 
- Data is read and written through chunks, a chunk is a 4 byte word on a 32 bit system, 
- **Data alignment** is used to preserve FDE performance, therefore data is put at a memory offset equal to the largest datatype in a struct, using padding when necessary 
- Note that unions will only allocate the size of its largest member
- Example with a C struct [[C_language]]
```c
struct student {  // struct is 16 bytes (8 byte alligned)
	char *name;   // pointer is 8 bytes
	int id;       // int is 4 bytes 
};
```

>![[Pasted image 20220608082511.png]]

-   A **char** (one byte) will be 1-byte aligned.
-   A **short** (two bytes) will be 2-byte aligned.
-   An **int** (four bytes) will be 4-byte aligned.
-   A **long** (four bytes) will be 4-byte aligned.
-   A **float** (four bytes) will be 4-byte aligned.
-   A **double** (eight bytes) will be 8-byte aligned on Windows and 4-byte aligned on Linux (8-byte with _-malign-double_ compile time option).
-   A **long long** (eight bytes) will be 4-byte aligned.
-   Any **pointer** (eight bytes) will be 8-byte aligned. (e.g.: char\*, int\*) ( 64 bit systems)
-   Any **pointer** (four bytes) will be 4-byte aligned. (e.g.: char\*, int\*)

## Alignment problems 
- Data alignment can be problematic between different devices, namely the difference in architecture when data is stored or transmitted. The packed attribute helps solve this 
```c
struct student {  // struct is 12 bytes (allignment disabled)
	char *name;   // pointer is 8 bytes 
	int id;       // int is 4 bytes
} __attribute__((packed));
```
> ![[Pasted image 20220608082333.png]]


# Program memory
- When a program is loaded it can be taught of as having two sections, **data & instructions**
- Note that a function call are handled using a stack structure
## Main variable types
- Global
- Local
- Pointer

# Memory distribution
- Consists of the stack, heap, static data and code, each of which handles different aspects of a program

>![[Pasted image 20211216140228.png]] 

# Array memory mapping 
## Row Major mapping:
- Memory is linear, for 2D arrays this means that an array is completed before the next array is stored
>![[Pasted image 20211216140607.png|400|400]]
>![[Pasted image 20211216140725.png|400|400]]
## Linked mapping 
- A header array holds pointers to all individual rows
- Does not involve multiplication for direct access, making access faster
- Extra space is needed for mapping 
>![[Pasted image 20211216150411.png|400|400]]
- For 3D arrays
>![[Pasted image 20211216150601.png|400|400]]