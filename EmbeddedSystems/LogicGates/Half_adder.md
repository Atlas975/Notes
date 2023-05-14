> [!important]- Metadata
> **Tags:** #EmbeddedSystems 
> **Located:** EmbeddedSystems/LogicGates
> **Created:** 14/05/2023 - 11:23
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Half adder
-   A basic digital circuit that performs addition on two bits, produces a sum bit and a carry bit
-   A half adder does not account for any carry bit that may be generated from a previous addition. Therefore, it can only add two single bits.

![[Pasted image 20230514112924.png|450|450]]

-   Half adders are commonly used as building blocks in more complex circuits, such as [[Full_adder|full adders]], which can add multiple bits and account for carry bits.

![[Pasted image 20230514114629.png|300|300]]