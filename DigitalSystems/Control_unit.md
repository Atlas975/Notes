# The CU
- An element of the CPU, monitors all functions of the computer system. Can be thought of as a smaller program inside the processor that constantly executes the F -> D -> C cycle.
- It is controlled by the clock which gives timed electrical pulses / ticks
## Controlling the CU
- Simplified execution of a single instruction:
>![[Pasted image 20211117195922.png]]

# Types of registers
## Instruction register (IR)
- Holds instruction currently being executed.
## Memory address register (MAR)
- Holds the memory address from which the processor will read data from. 
## Memory data register (MDR)
- Holds data entering/leaving the memory

# Reading content indicated by MAR into MDR
>![[Pasted image 20211117201133.png]]
>![[Pasted image 20211117201205.png]]

# Fetch-Decode-Execute cycle traced
![[Pasted image 20211117201703.png]]
![[Pasted image 20211117201938.png]]

# Control unit types
- There are two types of control units:
1. Finite state machine: hard wired sequential logic built in NAND gates. High performance but expensive.
2. Microcode: sequence of micro-instructions, lower performance but more flexible, easy to add new instruction
# Pipelining
- Way to speed up FDE cycle, executes more than 1 instruction at the same time. Splits each instruction into several simpler stages, each of which is executed in one clock cycle, instructions at different stages are fed through overlapped, increasing overall throughput
- Each instruction takes several cycles to pass through the pipeline completely, keeping overall instruction execution time the same.
>![[Pasted image 20211117202947.png]]
- Allows more than one instruction to be executed at the same time.
>![[Pasted image 20211117203157.png]]
- In this case 4 instructions will be executed at the same time, with each instruction being in a different stage.
## Pipeline hazards
- Control hazards: an instruction changes the flow of execution. Not being executed in the sequence it's supposed to.
- Data hazards: if one instruction needs data from another instruction, it must wait until that instruction is finished. This also occurs if two instructions need to access the same data.
- Structural hazards: when two instructions need to access the same hardware eg. the ALU.
