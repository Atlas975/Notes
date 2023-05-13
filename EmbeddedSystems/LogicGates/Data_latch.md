---
aliases: D latch
---
> [!important]- Metadata
> **Tags:** #EmbeddedSystems 
> **Located:** EmbeddedSystems/LogicGates
> **Created:** 13/05/2023 - 19:09
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Data latch
- Same purpose as an [[Set_reset_latch#Gated SR latch|gated SR latch]]
- The standard [[Set_reset_latch|SR latch]] can suffer from a [[Concurrency#Race condition|race condition]] if both S and R are on simultaneously in active low / off simultaneously on active high, The D latch helps remedy this
- This is done by inverting the input of S and feeding it as R, this allows for a one input SR latch. In this scenario S is known as a data-latch (D)

![[Pasted image 20230513191547.png|450|450]]
- While Enable is on, Q is always the same as D
- This circuit can also be rewired to only use 4 components like the standard gated SR latch, allowing for greater efficiency:

![[Pasted image 20230513192108.png|450|450]]
![[Pasted image 20230513193317.png|450|450]]