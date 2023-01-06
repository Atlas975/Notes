#OperatingSystems [[Input&Output_systems]][[InstructionSet_architecture]]
# Multiplexer
- A device that allows in several inputs and gives one output. 

>![[Pasted image 20211103110900.png]]

- The amount of inputs it can take depends on the number of control inputs (**2n**), in this case 2*2 = 4 inputs.
## Truth table representation:

> ![[Pasted image 20211103111909.png]]
> ![[Pasted image 20211103111513.png|500|500]]

- Note inputs like A are only considered when a combination of 0,0 is present. Other inputs are not considered as denoted by the X. An on state is only achieved if A is also equal 1.
## Applying de Morgans law:

> ![[Pasted image 20211103113707.png]]

- This allows a logic circuit to be built only of inverted AND's / OR's

> ![[Pasted image 20211103113818.png|500|500]]

- This is an example of a 3 input logic circuit.


# Combinatorial logic
- Output function is purely based on it's inputs. It does not matter what inputs came before that to lead to the output that would become the current input.
# Sequential logic
- Output is based on its inputs and on the sequence of past inputs.

> Truth table representation:![[Pasted image 20211110132247.png]]
> Logic circuit representation:![[Pasted image 20211110132359.png]]

-  A high pulse on S always gives Q=1 state (set)
-  A high pulse on R always gives Q=0 state (reset)
-  Both cannot occur at the same time.
-  Having both S and R off stays where it is.
-  Current step denoted by Q0, next step denoted by Q
## S-R flip flop

>![[Pasted image 20211115231715.png|500|500]]

# S-R Limitations
- Issues when implementing a bit in a register, has distinct SET AND RESET inputs. Ideally this should be handled by a single input. 
- There is no way of telling it when to store input data with a 'Latch' signal like with clocked D-type flip slop.



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

- Note that C_Out is high whenever there's 2 or more inputs, the sum is high only if there are an odd number of inputs
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

# Clocked D flip flop
- The latch is what decides weather or not an input is accepted

>![[Pasted image 20211116104526.png|400|500]]

- Latching a 0

> ![[Pasted image 20211117184332.png]]

- Example register operation "ADD A,A 10", A is both source and destination:

> ![[Pasted image 20211117190726.png]]

## Master slave flip flop

>![[Pasted image 20211117191207.png]]

- Data only moves from the master to the slave if the latch = 0. In this case the master will not be functional while the slave will be.
- The main advantage of master slave is that instead of the output constantly changing from 1 to 0, the output only changes ONCE in a clock cycle (cycling)
- Multiple master-slave flip-flop register:

>![[Pasted image 20211117193752.png]]

# 3 Data bus register

> ![[Pasted image 20211117194428.png|500|500]]

- This is a mastaful boo

enn
