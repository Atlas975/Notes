> [!important]- Metadata
> **Tags:** #
> **Located:** Languages&Compilation
> **Created:** 16/03/2024 - 20:34
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# LR(0) Parsing
- A [[Bottom-up_parsing|botttom-up parser]] with no lookahead, consists of the following components: 
    - **Input buffer**: holds string to be passed
    - **Stack**: keeps a list of states it has been in 
    - **Action table**: guides parser on to the next state based on current state  and the terminal / NON-TERMINAL that was read 
    - **Goto table**: dictates what [[Formal_languages|grammar rule]] to apply considering current state and the terminal / NON-TERMINAL read 

## LR(0) parsing process 
- The following example grammar will be used: 
$$(1)\ E\to E*B$$
$$(2) \ \text{IDLIST} \to \text{IDLIST}, \text{ID}$$
$$(3) \ \text{IDLIST} \to \text{ID}$$
$$(4) \ \text{ID} \to A|B|C|D$$