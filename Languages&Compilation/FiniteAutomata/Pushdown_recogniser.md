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
- A PDR effectively does a derivation on the stack beginning with the start symbol S, a string is only valid if halt (H) can be reached with no input string left
- These are needed as a FSR cannot be designed to be equivalent to a [[Context_free_grammars|context free language]]
## Pushdown recogniser syntax
- Pushing $\epsilon$ does nothing, PUSH(abc) is the the same as PUSH(c), PUSH(b), PUSH(a)
- The following format can be used to check what is pushed on the arc of the recogniser:


$$a/b/c$$
$$a =\text{symbol read in the input string}$$
$$b =\text{symbol popped off the stack}$$
$$c =\text{symbol(s) pushed onto the stack}$$


- The $\epsilon$ symbol can be used to ignore the read operation / not move pointer eg $\epsilon$/b/c
- Example of transition with this format, note how its at symbol a, pops the top symbol from the stack and pushes c at the end:

![[Pasted image 20240212153924.png|400|400]]


## Constructing a pushdown recogniser
1. Create 3 states (start state, intermediate state, halt state)

![[Pasted image 20240212154535.png|400|400]]

2. Add an arc from 1 to the intermediate state with the start symbol, no read operation

![[Pasted image 20240212154705.png|400|400]]

3. Add an arc from last intermediate state to halt state denoting an empty stack 

![[Pasted image 20240212154807.png|400|400]]

4. Each production rule involves an arc from state 2 to 2 eg $S\to bA$ and $A\to bAA |a$

![[Pasted image 20240212154942.png|400|400]]

5. For each terminal (t) in the grammar an arc from state 2 to 2 is created as t/t/$\epsilon$. This is used to represent the pop operation without pushing to the stack 

![[Pasted image 20240212155338.png|400|400]]

### Example PDA construction
- PDR for a non-regular language:

![[Pasted image 20240222162905.png|350|350]]

- Example parsing for the string 'aaabbb'

![[Pasted image 20240222163545.png|350|350]]
![[Pasted image 20240222163602.png|350|350]]

## Deterministic pushdown recogniser
- No formula exists for crafting a deterministic PDR due to the variance in strings that can be built from a non-deterministic PDR.  
- Many context free languages are non-deterministic and cannot become a deterministic PDR
- Example deterministic PDR for the grammar ${\{a^ib^{i}\text{ : }i\geq{1} \}}$:

![[Pasted image 20240222165447.png|450|450]]

- These can also include multiple edges, example where string optionally starts with 'c' characters, note how the number of 'c' does not need to be remembered on the stack

![[Pasted image 20240222170153.png|450|450]]

