> [!important]- Metadata
> **Tags:** #Compilers 
> **Located:** Languages&Compilation/CompilerConstruction/Analysis
> **Created:** 04/05/2024 - 17:00
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Literal table
- Similar to [[Symbol_table|symbol table]] but contains entries of literal representations of input stream values. This provides a centralised way to manage constants
- Each table entry includes the literal, its type, and a unique identifier / temporary address. Helps avoid redundancy by ensuring each literal is stored once
- In [[Three_address_code|TAC]], literals are referenced by their literal table identifier 

```
Consider `x = y + 5;`. In TAC, this may be translated using a literal table as follows:
- Literal Table Entry**: `1 -> 5`
- Three-Address Code:
    
t1 = y + #1     // #1 refers to the literal '5' from the literal table x = t1
```