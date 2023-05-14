> [!important]- Metadata
> **Tags:** #EmbeddedSystems 
> **Located:** EmbeddedSystems/LogicGates
> **Created:** 14/05/2023 - 11:46
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Full adder

-   A full adder is a digital circuit that performs addition on three input bits: A, B, and a carry bit (Cin), producing a sum bit (S) and a carry bit (Cout) as outputs using [[Logic_gates|boolean logic]]
-   The full adder accounts for any carry bit that may be generated from a previous addition, making it capable of adding multiple bits.

![[Pasted image 20230514114933.png|450|450]]
-   The truth table for a full adder has eight possible input combinations and two possible output combinations for S and $C_{out}$.
-   Full adders are commonly used in digital electronics, such as in microprocessors, to perform arithmetic operations on binary numbers.

![[Pasted image 20230514115920.png|450|450]]
## Full adder boolean expression 
- Note the actual circuit is made more efficient through cross work 
$$\text{S}=A\oplus B\oplus C$$
$$C_{out}=AB+C_{in}(A\oplus B)$$