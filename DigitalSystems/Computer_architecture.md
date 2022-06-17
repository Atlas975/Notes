# Computer architecture 
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


