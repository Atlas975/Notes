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
- A [[Bottom-up_parsing|bottom-up parser]] with no lookahead, foundational in compiler construction
- With no lookahead, the grammar must have no ambiguity (deterministic)
-  Consists of the following components: 
	- **Input buffer**: holds string to be passed
	- **Stack**: keeps a list of states it has been in 
	- **Action table**: guides parser on to the next state based on current state and input symbol
	- **Goto table**: dictates what [[Formal_languages|rule]] to apply based on current state and input symbol (reduce)

## Action table entries
- **Shift (`sn`):** Move to state `n` and fetch next terminal from input stream
- **Reduce (`rm`):** Apply grammar rule `m`, push rule to output string
- **Accept (`acc`):** Indicate the parse acceptance of the input string.
- An action table can be thought of a way to store an [[Finite_state_machines|FSM]] in a grid
- Note that shift operates on the next symbol, reduce works on current symbols

## LR(0) Parsing process
- The output of the parsing process is the series of rules 
	1. Initialise the stack with state [0] and augment input string with `$`
	2. Use the current state + terminal to determine the action from action table.
	3. Perform actions - shift, reduce, accept, or report syntax error.
	4. Repeat steps until the string is accepted or an error is found.
### Parsing steps
- The following example grammar will be used: 
$$(1)\ E\to E*B$$
$$(2) \ E = E+B$$
$$(3) \ E \to B$$
$$(4) \ B \to 0$$
$$(5) \ B \to 1$$
![[Pasted image 20240501122448.png|300|300]]
0. Initialisation 
	- Start with an empty stack, output stream and the input string `1+1`
	- Augment input string with a termination symbol `$` at the end: `1+1$`
	- **Stack**: `[0]` (indicates start at state 0)

![[Pasted image 20240501123226.png|350|350]]
1. Parsing input `1`
	- **Shift action:** push  `s2` onto the stack, occurs from `action(s0, 1) = s2`
	- **Input** move to symbol `+`
	- **Stack:** `[0, (1,  s2)]`
2. Reducing `1` to `B`
	- **Reduce action**: apply reduce `B->1` occurs from using `action(s2, 1) = r5 `
	- **Output**: `5`
	- **Goto action**:  in state 0, apply `goto(s0, B) = s4`  and push to stack
	- **Stack**: `[0, (B, s4)]`
4. Reducing `B` to `E`
    - **Reduce action**: apply reduce `E->B` , occurs from `action(s4, B) = r3`
    - **Output**: `53`
    - **Goto action**: in state 0, apply `goto(s0, E) = 3` and push to stack 
    - **Stack**: `[0, (E, s3)]`
5. Parsing input `+`
    - **Shift action**: push `s6` onto the stack, occurs from `action(s3, +) = s6`
    - **Input**: move to symbol `1`
    - **Stack**: `[0, (E, s3), (+, s6)]`
6. Parsing input `1`
    - **Shift action**: push `s2` onto the stack, occurs from `action(s6, 1) = s2`
    - **Input**: move to termination symbol `$`
    - **Stack:** `[0, (E, s3), (+, s6), (1, s2)]`
7. Reducing `1` to `B`
    - **Reduce action**: apply reduce `B->1`, occurs from using `action(s2, 1) = r5`
    - **Output**: `535`
    - **Goto action** in state 6, apply `goto(s6, B) = 8` and push to stack 
    - **Stack:** `[0, (E, s3), (+, s6), (B, s8)]`
8. Reducing `E+B` to `E`
    - **Reduce action**: apply reduce `E=E+B`, occurs from `action(s8, $) = r2`
    - **Output**: `5352`
    - **Goto action**: in state 0, apply `goto(s0, E) = 3`  and push to stack
    - **Stack**: `[0, (E, s3)]`
9. Accept the input 
    - **Accept action**: the `acc` action has been reached, occurs from using `action(s3, $) = acc`
    - **Final output**: `5352`
    - **Stack**: `[0, (E, s3)]`  indicates successful parsing, entire input accepted

- The input "1+1" has been successfully parsed and the output sequence `5352` represents the sequence of applied grammar rules in reverse order. The steps include:
    -  `5` for `B → 1`
    -  `3` for `E → B`
    -  `5` for `B → 1` (second occurrence)
    -  `2` for `E → E + B`

![[Pasted image 20240501143718.png|350|350]]

## LR(0) Parse tree 
- Due to being a bottom up parser, the parse tree is constructed starting from the input tokens (leaves) to the root (grammar start symbol). Each subtree represents the application of a rule
- Note that whenever a push operation occurs, it becomes that parent of what's been popped

![[Pasted image 20240501144008.png|400|400]]