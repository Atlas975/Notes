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

![[Pasted image 20230513161216.png|350|350]]

- The latch is controlled by pulses only, S and R are never on simultaneously in the NOR gate version / off simultaneously on the NAND gate verion


## SR latch logic gates 

![[Pasted image 20230513161957.png|500|500]]
