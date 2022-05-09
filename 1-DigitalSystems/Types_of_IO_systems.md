# Synchronous IO
- Simplest way to do IO
- The CPU just waits for input
- Limited by how unless the device is ready instantly, the processor spends a lot of time polling (sampling status of input device) for the next byte
## Process:
>![[Pasted image 20211130111234.png]]
## Synchronous IO with block transfer
- Waits for the first block and then transfers a whole block of data at once
## Asynchronous IO
- Allows other processes to continue before transmission has finished. 

# DMA (Direct memory access)
- DMA devices have their own internal processor letting them directly access a computers memory
- The computers processor determines how much data is to be transferred 
- This requires dual port memory, making the device complex and expensive

# Interrupt handling 
- A signal passed to a processor device, causes the processor to jump to a memory address known as the interrupt service routine (ISR)
- Happens unpredictably between instructions
- The following process occurs:
1. Stops what its doing
2. Note the execution state for later in the program counter (PC)
3. Runs interrupt code 
4. Retrieves execution state and continues where left off.
- Note the program counter acts as a stack in this case.

## Interrupt vector
- A memory address where the computer expects to find an ISR
>![[Pasted image 20211130113054.png]]

## Interrupt priority
- Higher priority: eg. network interference 
- Lower priority: eg. slower devices like the keyboard
- Most interrupts cand be ignored (masked) to prevent the processor being interrupted during critical operations.
- High priority is not maskable.