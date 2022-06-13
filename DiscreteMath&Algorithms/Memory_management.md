# Program memory
- When a program is loaded it can be taught of as having two sections, **data & instructions**
- Note that a function calls are handled using a stack structure
## Main variable types
- Global
- Local
- Pointer

## Memory for different data types
- Int : 4 bytes
- Char: 1 byte
- String: char size + 1 for null byte
# Memory distribution
- Consists of the stack, heap, static data and code
>![[Pasted image 20211216140228.png]] 
# Memory mapping in arrays
## Row Major mapping:
- Memory is linear, for 2D arrays this means that an array is completed before the next array is stored
>![[Pasted image 20211216140607.png|300|300]]
>![[Pasted image 20211216140725.png|200|300]]
## Linked mapping 
- A header array holds pointers to all individual rows
- Does not involve multiplication for direct access, making access faster
- Extra space is needed for mapping 
>![[Pasted image 20211216150411.png|300|300]]
- For 3D arrays
>![[Pasted image 20211216150601.png]]
# Records in memory
- For the following record:
>![[Pasted image 20211216152729.png]]
- It's size can be represented as:
>![[Pasted image 20211216152836.png|200|300]]
>![[Pasted image 20211216153702.png]]
- The size must always be a multiple of 4