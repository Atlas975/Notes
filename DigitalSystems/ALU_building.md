# ALU fundamentals
- The ALU handles all arithmetic logic operators (+, -,  /, *, AND, OR, NOT, XOR etc.)
- Floating point numbers (decimal points) are handled using special equipment called the floating point unit.
- It also facilitates registers and status flags (overflow, zero, negative)
> ![[Pasted image 20211108184719.png|500|500]]
- During binary addition, the ALU can solve an overflow error by dividing a function into 2 separate functions:
# Half adder
> ![[Pasted image 20211108185340.png|500|500]]  
#### Note these are also AND , XOR gates
- These separate functions can also be represented by a logic gates:
> ![[Pasted image 20211108185514.png|500|500]]
## Half adder with expanded XOR
> ![[Pasted image 20211109111635.png|500|500]]
## Full adder
> ![[Pasted image 20211109112335.png|500|500]]
> ![[Pasted image 20211129235449.png|600|600]]
- Note that C_Out is high whenever theres 2 or more inputs, the sum is high only if there are an odd number of inputs
- This can also be done with NAND gates
## Proof by perfect induction
> ![[Pasted image 20211109112833.png|600|600]]
## Multi-stage full adder
> ![[Pasted image 20211109113046.png|500|500]]
# Data buses
- A computer system that takes data from one component to another.
# Address buses
- Runs between CU and main memory, tells memory to access specific address. It's width determines addressable memory
>Examples: 16 bits -> 65536 bytes (2^16)

# Carry-select adders
- Shown in the diagram, each stage must wait for a carry bit from previous bit making it slow.

# Splitting solution for speed
- Parallel computing, adding the lower half (n/2) and the upper half (n/2) of the bits separately. 
- Lower bits done as normal, upper bits use two full adders one assuming the carry C is 0 and the other assuming the carry C is 1. Effectively doubling the speed.
>![[Pasted image 20211109114845.png]]

# Status flags
- Acts on a NOR gate to determine if positive or negative
>![[Pasted image 20211110010125.png]]

# Overflow flag
>![[Pasted image 20211110011249.png|500|500]]
>![[Pasted image 20211110011401.png|400|200]]
- In the two highlighted cases Cin XOR Cout gives 1, indicating arithmetic overflow

# Bit shifting
- Bit shifting allows for simple multiplication/division of multiples of 2. For instance 20 -> 10 is 10100 -> 01010 resulting in division of two by shifting left, shift right to multiply.
>![[Pasted image 20211110012401.png]]