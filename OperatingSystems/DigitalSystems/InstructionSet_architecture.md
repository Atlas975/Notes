```ad-info
title: Metadata
collapse: closed


**Created:** 26/12/2022 - 09:23
**Located:** OperatingSystems/DigitalSystems
**Tags:** #    

```dataview
table without id
    link(file.name) as "Links"
from !"XX-Attachment"
where contains(this.file.inlinks, file.link)
   or contains(file.outlinks, this.file.link)
```

# InstructionSet architecture
<% tp.file.cursor(2) %>


#OperatingSystems 
# Reduced instruction set computers (RISC)
- Small number of instructions 
- Simplifies ISA.

# Stack-based ISA's
- Uses stack operations (push/pop)

# MIPS arithmetic and logic instructions
>![[Pasted image 20211102142155.png]]

# MIPS data-transfer instructions
>![[Pasted image 20211102142559.png]]
# MIPS control-transfer instructions
>![[Pasted image 20211103000137.png]]

# MIPS properties
## Resistors
- MIPS is mostly designed to work on registers only, not main memory since registers are much faster.
- Processors also have special resistors such as the PC (program counter) and SP (stack counter)
- General purpose registers handle arithmetic and logic instructions. 
## Subroutines
- AKA functions, when using these control needs to be transferred to the function and back
>![[Pasted image 20211103002059.png]]
- When a function is called the program counter remembers current address (return), jumps to the subroutine and then back to the return address.
- MIPS's jal function does this (jump and link) with jr being used to return.
# Instruction encoding
- example:
> add $2, $4, $2
![[Pasted image 20211102143133.png]]

# Core CPU uses
> ![[Pasted image 20211102143456.png|400|400]]



# Inline assembly
- Allows assembly code to be invoked through C
- Some common reasons for this include

> ![[Pasted image 20220503142936.png]]
- This is done through the asm() keyword

## x86 assembly 
>![[Pasted image 20220503143532.png]]