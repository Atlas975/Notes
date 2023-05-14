---
aliases: boolean logic
---
> [!important]- Metadata
> **Tags:** #EmbeddedSystems 
> **Located:** EmbededSystems
> **Created:** 13/05/2023 - 15:30
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Logic gates
-   Logic gates are electronic components that perform logical operations on one or more binary inputs and produce a single binary output based on those inputs.
-   There are several types of logic gates, including AND gates, OR gates, NOT gates, NAND gates, NOR gates, and XOR gates, each with their own unique input/output behaviours.

## Boolean laws 
![[Pasted image 20211031135124.png|450|450]]
## NOT gate 
![[Pasted image 20230513155520.png|400|400]]

## OR gate
![[Pasted image 20230513155607.png|400|400]]
## AND gate 

![[Pasted image 20230513155710.png|400|400]]


## XOR gate 

![[Pasted image 20230513155841.png|400|400]]

- On a lower level, this is created using only AND and OR which can be built as:

$$\overline{A}B +A\overline{B}$$
$$(A+B)(\overline{A+B})$$