
# MIPS_assembly
created: 2022-06-27 07:09
#Programming 

---
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
![[Pasted image 20211205120046.png|450|450]]
![[Pasted image 20211205120132.png|450|450]]
![[Pasted image 20211209151209.png|450|450]]
![[Pasted image 20211209151231.png|450|450]]
# MIPS registers
- Registers are used as they are extremely fast and can operate simultaneously unlike main memory   
## Registers
![[Pasted image 20220116170518.png|450|450]]
- Note that these values are hard coded and cant be changed
- Registers can also have different functions:
![[Pasted image 20211207083905.png|450|450]]
- $zero is a hardcoded register where all bits are set to 0, can be used to represent 0 or be used as a target for instructions to have their value discarded
# Operations
## Adding
![[Pasted image 20211207084227.png|450|450]]

## Subtracting
![[Pasted image 20211207084308.png|450|450]]
## Multiple operations
![[Pasted image 20211207084420.png|450|450]]
## Operating with constants
![[Pasted image 20211207085542.png|450|450]]

# Logical operations

## MIPS SHIFTING
- Moves bits by given number of positions
![[Pasted image 20211207090209.png|450|450]]

## MIPS AND 
![[Pasted image 20211207090246.png|450|450]]

## MIPS NOR
![[Pasted image 20211207090314.png|450|450]]

## MIPS NOT
- NOR can also be used to implement NOT by inflicting it on a single value
![[Pasted image 20211207093229.png|450|450]]
- The 0 register can also be used for the last register to achieve the same results
# MIPS number encoding 
- Uses 2's compliment, each register holds a 32 bit instruction so can represent (2^31)-1 numbers
- Note to flip from negative back to positive, flip digits and add 1
- Overflow is possible with 2's compliment caused when sign bits of operands are the same

# Accessing memory
- Memory needs to be copied from the main memory and registers
![[Pasted image 20211207141329.png|450|450]]
- Data is represented by big endian type structure

## MIPS load word instruction logic 
![[Pasted image 20220608140101.png|450|450]]


## MIPS store word instruction logic 
![[Pasted image 20220608140521.png|450|450]]

# Main memory types
![[Pasted image 20211209150808.png|450|450]]
# Preserved vs unpreserved registers
![[Pasted image 20220118142730.png|450|450]]

## MIPS stack movement
![[Pasted image 20220608134513.png|450|450]]
![[Pasted image 20220608134645.png|450|450]]

- To store a register on the stack the following can be done, note the de-increment of the stack pointer
```c
add $sp, $sp, -4
sw $t0, $sp
```

![[Pasted image 20220608135106.png|450|450]]

# C to MIPS
- For loop
![[Pasted image 20211209152148.png|450|450]]
- If then else
![[Pasted image 20211209152258.png|450|450]]
- If then else alternative
![[Pasted image 20211209152234.png|450|450]]





# MIPS error handling
- Handling in mips is handled by co-processors  
- Co-processor 0 acts as a parallel exception handler
![[Pasted image 20220215111308.png|450|450]]
![[Pasted image 20220215111332.png|450|450]]
![[Pasted image 20220215111538.png|450|450]]
- Exception control address:
![[Pasted image 20220215111824.png|450|450]]
![[Pasted image 20220215111933.png|450|450]] 
# MIPS polling
- Constant interrupt handling is inefficient, this can be handled by polling
![[Pasted image 20220215114703.png|450|450]]
- MIPS code example:
![[Pasted image 20220215114747.png|450|450]]
![[Pasted image 20220215114801.png|450|450]]



# MIPS OS control
- MARS is not a full OS but it can schedule processes by being used as a scheduler
![[Pasted image 20220215141832.png|450|450]]
## The operating system
![[Pasted image 20220215141141.png|450|450]]
![[Pasted image 20220215141116.png|450|450]]
- Scheduling example:
![[Pasted image 20220215141419.png|450|450]]


# MIPS keyboard input
![[Pasted image 20220215112639.png|450|450]]