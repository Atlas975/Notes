---
aliases: SR latch
---

> [!important]- Metadata
> **Tags:** #EmbeddedSystems 
> **Located:** EmbeddedSystems/LogicGates
> **Created:** 13/05/2023 - 16:07
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Set reset latch

- The SR latch is an electronic circuit made of two cross-coupled NOR gates (or NAND gates) that can store a single bit of information using [[Logic_gates|boolean logic]].
- Has two inputs: S (Set) and R (Reset). When S is set to 1, the latch is "set" and its output is 1. When R is set to 1, the latch is "reset" and its output is 0.

![[Pasted image 20230513184712.png|300|300]]
- $\overline{Q}$ represents the inverse of the current latch state 
- The latch is controlled by pulses only, S and R are never on simultaneously in the NOR gate version / off simultaneously on the NAND gate version 
## SR latch logic gates 

![[Pasted image 20230513161957.png|450|450]]

## SR latch uses 
1.  **Memory storage** - to store a single bit of data even when a signal is removed 
2.  **Control logic** - to enable or disable certain functions based on the state of the latch.
3.  **Flip-flops** - as a building block for more complex circuits.
4.  **Pulse shaping** - to filter out noise and produce clean output signals.


## Gated SR latch 
- A variation of the  SR latch that with an additional input called the "Enable" input. This  allows for control on when the SR latch is able to change its state or not.

![[Pasted image 20230513185510.png|200|200]]

- The addition of the third input allows for the latching effect to be enabled or disabled as needed
- Example of a gated SR latch added on to the NOR gate SR latch, this works the same with the active high NAND gate version but with NAND gates used instead of AND gates: 

![[Pasted image 20230513185804.png|400|400]]
