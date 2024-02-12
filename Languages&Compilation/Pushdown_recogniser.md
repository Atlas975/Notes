> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 09/02/2024 - 16:21
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Pushdown recogniser
- A [[Finite_state_machines|FSM]] with extra storage through the use of a stack 
- This stack is potentially infinite in size and can contain both terminals and non-terminals
- The bottom marker of this stack is denoted by the $\perp$ symbol (z is used in JFlap instead)

![[Pasted image 20240209163021.png|350|350]]




## Pushdown recogniser syntax
- Pushing $\epsilon$ does nothing, PUSH(abc) is the the same as PUSH(c), PUSH(b), PUSH(a)
- The following format can be used to check what is pushed on the arc of the recogniser:


![[Pasted image 20240212154110.png|350|350]]
- Example of transition with this format, note how its at symbol a, pops the top symbol from the stack and pushes c at the end:

![[Pasted image 20240212153924.png|400|400]]

- The $\epsilon$ symbol can be used to ignore the read operation / not move pointer eg $\epsilon$/b/c
## Constructing a pushdown register 
