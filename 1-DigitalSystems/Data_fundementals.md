# Data size 

## Data type sizes 
>![[Pasted image 20220607214052.png]]
note that null terminated langauges like c will allocate 2 bytes for a char to include the null byte, does not apply to langauges like rust where a single byte will be allocated instead. This additional byte is also not counted in the sizeof() function 
## Data scale 
> ![[Pasted image 20220607213658.png]]

## Data reading 
- Data is read and written through chunks, a chunk is a 4 byte word on a 32 bit system
- **Data alignment** is used to preserve FDE performance, therefore data is put at a memory offset equal to a chunk size through the use of padding when necessary 
- Example with a C struct [[C_basics]]
```c
struct student {  // struct is 16 bytes
	char *name;   // pointer is 8 bytes
	int id;       // int is 4 bytes 
};
```