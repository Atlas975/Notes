# Data size 

## Data type sizes 
>![[Pasted image 20220607214052.png]]
note that null terminated langauges like c will allocate 2 bytes for a char to include the null byte, does not apply to langauges like rust where a single byte will be allocated instead. This additional byte is also not counted in the sizeof() function 
## Data scale 
> ![[Pasted image 20220607213658.png]]

## Data reading 
- Data is read and written through chunks, a chunk is a 4 byte word on a 32 bit system, 
- **Data alignment** is used to preserve FDE performance, therefore data is put at a memory offset equal to the largest datatype in a struct, using padding when necessary 
- Example with a C struct [[C_basics]]
```c
struct student {  // struct is 16 bytes (8 byte alligned)
	char *name;   // pointer is 8 bytes
	int id;       // int is 4 bytes 
};
```

-   A **char** (one byte) will be 1-byte aligned.
-   A **short** (two bytes) will be 2-byte aligned.
-   An **int** (four bytes) will be 4-byte aligned.
-   A **long** (four bytes) will be 4-byte aligned.
-   A **float** (four bytes) will be 4-byte aligned.
-   A **double** (eight bytes) will be 8-byte aligned on Windows and 4-byte aligned on Linux (8-byte with _-malign-double_ compile time option).
-   A **long long** (eight bytes) will be 4-byte aligned.
-   A **long double** (ten bytes with C++Builder and DMC, eight bytes with Visual C++, twelve bytes with GCC) will be 8-byte aligned with C++Builder, 2-byte aligned with DMC, 8-byte aligned with Visual C++, and 4-byte aligned with GCC.
-   Any **pointer** (eight bytes) will be 8-byte aligned. (e.g.: char\*, int\*) ( )
-   Any **pointer** (four bytes) will be 4-byte aligned. (e.g.: char\*, int\*)