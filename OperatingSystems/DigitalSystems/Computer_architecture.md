> [!important]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems/DigitalSystems
> **Created:** 26/12/2022 - 09:27
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Computer architecture

[[Computer_memory]][[Operating_system_design]]
- Describes the aspects of hardware required for a computer system to operate.
# Von Neumman architecture 
- Largely what modern computers are based on.
![[Pasted image 20211030190435.png|500|300]]
- Alternatives may include cache memory as well
![[Pasted image 20211030190812.png|500|300]]
## Cache memory
- High speed memory stored near/in CPU containing frequently used data
- Faster to access than RAM resulting in it being accessed less.
## Registers
- Small high-speed pieces of memory in the CPU that hold data being worked on. 
# Modern PC architecture 
![[Pasted image 20211030191111.png|500|500]]

# Metrics of computer speed
- Clock rate: how frequently a processor generates pulses. Not a good metric, different instructions require different tick amounts.
- MIPS (millions of instructions per second): depends on which instruction counted
- Floating point operations per second: measure of calculation speed of a computer.

# Speed limiting factors 
- Moore's law (density limitations of transistors approaching atom size) 
- Power limitations: heat problems arise as clock rate increases. 

## Moore's law
- The density of transistors in an area double every two years.
- This led to exponential growth in computing and storage space as well as a reduction in a shift in the price performance ratio 

## Solutions to speed limiting factors
- Multi-core processors

![[Pasted image 20211031003159.png|500|500]]

- Clustering: linking multiple computers together using high speed networks.


# RISC and CISC architecture 
## Reduced instruction set computing
- Utilizes a small, optimized set of instructions with a focus on software.
- Instructions under this architecture are simple and standardized
- Heavy use of RAM which can result in bottlenecks when working with limited RAM
- Instructions are executed in single cycles
## Complex instruction set computing 
- Utilizes a larger set of instructions with a focus on hardware
- Complex variable length instructions 
- More efficient ram usage 
- Instructions can take several cycles 


# The CU
- An element of the CPU, monitors all functions of the computer system. Can be thought of as a smaller program inside the processor that constantly executes the F -> D -> C cycle.
- It is controlled by the clock which gives timed electrical pulses / ticks
## Controlling the CU
- Simplified execution of a single instruction:
![[Pasted image 20211117195922.png|450|450]]

# Types of registers
## Instruction register (IR)
- Holds instruction currently being executed.
## Memory address register (MAR)
- Holds the memory address from which the processor will read data from. 
## Memory data register (MDR)
- Holds data entering/leaving the memory

# Reading content indicated by MAR into MDR
![[Pasted image 20211117201133.png|450|450]]
![[Pasted image 20211117201205.png|450|450]]

# Fetch-Decode-Execute cycle traced
![[Pasted image 20211117201703.png|450|450]]
![[Pasted image 20211117201938.png|450|450]]

# Control unit types
- There are two types of control units:
1. Finite state machine: hard wired sequential logic built in NAND gates. High performance but expensive.
2. Microcode: sequence of micro-instructions, lower performance but more flexible, easy to add new instruction
# Pipelining
- Way to speed up FDE cycle, executes more than 1 instruction at the same time. Splits each instruction into several simpler stages, each of which is executed in one clock cycle, instructions at different stages are fed through overlapped, increasing overall throughput
- Each instruction takes several cycles to pass through the pipeline completely, keeping overall instruction execution time the same.
![[Pasted image 20211117202947.png|450|450]]
- Allows more than one instruction to be executed at the same time.
![[Pasted image 20211117203157.png|450|450]]
- In this case 4 instructions will be executed at the same time, with each instruction being in a different stage.
## Pipeline hazards
- Control hazards: an instruction changes the flow of execution. Not being executed in the sequence it's supposed to.
- Data hazards: if one instruction needs data from another instruction, it must wait until that instruction is finished. This also occurs if two instructions need to access the same data.
- Structural hazards: when two instructions need to access the same hardware eg. the ALU.
