e# MIPS basics
- No variables, just registers + memory
- Essential for embedded programs
- Stands for Microprocessor without interlocked pipeline systems
- MIPS is [[Computer_architecture#Von Neumman architecture]]
- It is a **reduced instruction set computer (RISC)**
- 111 instructions
- 32 bit architecture, this is the range of values in basic arithmetic (how big a number) and the width of standard register. All instructions operate on 32 bit registers
- Also means num of adressable byetes is (2^31)-1
- Designed to run in SINGLE clock cycle

# Two segments of memory
- Text: readable, executable instructions
- Data: readable and writable instructions

## Instruction types
1. Register type (R-type)
2. Immediate type (I-type) (act as constants)
3. Jump type (J-type)

## MIPS goals
- Lowering compiler to hardware level
- Not raising hardware to software level

## Whats needed to specify instruction
>![[Pasted image 20211205120046.png]]
>![[Pasted image 20211205120132.png]]
>![[Pasted image 20211209151209.png]]
>![[Pasted image 20211209151231.png]]
# MIPS registers
- Registers are used as they are extremely fast and can operate simultaneously unlike main memory   
## Registers
>![[Pasted image 20220116170518.png]]
- Note that these values are hard coded and cant be changed
- Registers can also have different functions:
>![[Pasted image 20211207083905.png]]
- $zero is a hardcoded register where all bits are set to 0, can be used to represent 0 or be used as a target for instructions to have their value discarded
# Operations
## Adding
>![[Pasted image 20211207084227.png]]

## Subtracting
>![[Pasted image 20211207084308.png]]
## Multiple operations
>![[Pasted image 20211207084420.png]]
## Operating with constants
>![[Pasted image 20211207085542.png]]

# Logical operations

## MIPS SHIFTING
- Moves bits by given number of positions
>![[Pasted image 20211207090209.png]]

## MIPS AND 
>![[Pasted image 20211207090246.png]]

## MIPS NOR
>![[Pasted image 20211207090314.png]]

## MIPS NOT
- NOR can also be used to implement NOT by inflicting it on a single value
>![[Pasted image 20211207093229.png]]
- The 0 register can also be used for the last register to achieve the same results
# MIPS number encoding 
- Uses 2's compliment, each register holds a 32 bit instruction so can represent (2^31)-1 numbers
- Note to flip from negative back to positive, flip digits and add 1
- Overflow is possible with 2's compliment caused when sign bits of operands are the same

# Accessing memory
- Memory needs to be copied from the main memory and registers
>![[Pasted image 20211207141329.png]]
- Data is represented by [[Volatile_memory#Big-endian]] type structure

# Main memory types
>![[Pasted image 20211209150808.png]]
# Preserved vs unpreserved registers
>![[Pasted image 20220118142730.png]]

## Register spilling
- Registers m

# C to MIPS
- For loop
>![[Pasted image 20211209152148.png]]
- If then else
>![[Pasted image 20211209152258.png]]
- If then else alternative
>![[Pasted image 20211209152234.png]]