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
- A [[Bottom-up_parsing|bottom-up parser]] with no lookahead, consists of the following components: 
	- **Input buffer**: holds string to be passed
	- **Stack**: keeps a list of states it has been in 
	- **Action table**: guides parser on to the next state based on current state  and the terminal / NON-TERMINAL that was read 
	- **Goto table**: dictates what [[Formal_languages|grammar rule]] to apply considering current state and the terminal / NON-TERMINAL that was read 
- With no lookahead, the grammar must have no ambiguity 

## Action table entries
- **Shift (`sn`):** Move to state `n`.
- **Reduce (`rm`):** Apply grammar rule `m`, push rule to output string
- **Accept (`acc`):** Indicate the acceptance of the input string.
- An action table can be thought of a way to store an [[Finite_state_machines|FSM]] in a grid
## LR(0) Parsing process
- The following example grammar will be used: 
$$(1)\ E\to E*B$$
$$(2) \ E = E+B$$
$$(3) \ E \to B$$
$$(4) \ B \to 0$$
$$(5) \ B \to 1$$

- The output of the parsing process is the series of rules 
1. Initialise the stack with state 0.
2. Use the current state + terminal to determine the action from the action table.
3. Perform actions - shift, reduce, accept, or report syntax error.
1. Repeat steps until the string is accepted or an error is found.
