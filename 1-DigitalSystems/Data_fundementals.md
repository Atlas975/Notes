# Data size 

## Data type sizes 
>![[Pasted image 20220607214052.png]]
note that null terminated langauges like c will allocate 2 bytes for a char to include the null byte, does not apply to langauges like rust where a single byte will be allocated instead. This additional byte is also not counted in the sizeof() function 
## Data scale 
> ![[Pasted image 20220607213658.png]]

## Data reading 
- Data is read and written through chunks, a chunk is a 4 byte word on a 32 bit system, 
- **Data alignment** is used to preserve FDE performance, therefore data is put at a memory offset equal to the largest datatype in a struct, using padding when necessary 
- Note that unions will only allocate the size of its largest member
- Example with a C struct [[C_basics]]
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
- Alignment of structs can also cause problems , namely difference in architecture when data is stored or transmitted. The packed attribute helps solve this 
```c
struct student {  // struct is 12 bytes (allignment disabled)
	char *name;   // pointer is 8 bytes 
	int id;       // int is 4 bytes
} __attribute__((packed));
```
> ![[Pasted image 20220608082333.png]]

