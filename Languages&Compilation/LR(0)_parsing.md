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
-  Consists of the following components: 
	- **Input buffer**: holds string to be passed
	- **Stack**: keeps a list of states it has been in 
	- **Action table**: guides parser on to the next state based on current state and input symbol
	- **Goto table**: dictates what [[Formal_languages|grammar rule]] to apply based on current state and input symbol
- With no lookahead, the grammar must have no ambiguity (deterministic)

## Action table entries
- **Shift (`sn`):** Move to state `n`.
- **Reduce (`rm`):** Apply grammar rule `m`, push rule to output string
- **Accept (`acc`):** Indicate the parse acceptance of the input string.
- An action table can be thought of a way to store an [[Finite_state_machines|FSM]] in a grid

![[Pasted image 20240501122448.png|300|300]]
## LR(0) Parsing process
- The output of the parsing process is the series of rules 
    1. Initialise the stack with state 0.
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
1. Initialisation 
    - 
 - Step 1: Initialisation
    - Start with an empty stack and the input string "1 + 0", augmented with a termination symbol `$` at the end: "1 + 0$".
    - The parser starts with the initial state `0` on the stack.

#### Step 2: Parsing "1"

- **Input:** 1
- **Action Table Lookup:** Depending on the state, the action for `1` will typically be a shift (s2 for example, where 2 is the next state).
- **Stack Action:** Push the state `2` onto the stack.
- **Stack:** [0, 2]

#### Step 3: Reducing "1" to B

- **Action Table Lookup:** In state `2`, if the reduction by the rule "B → 1" is applicable, execute it.
- **Reduce Action:** Replace `1` with `B` and consult the Goto table to find the next state based on the current state (from the top of the stack) and non-terminal `B`.
- **Stack:** [0, 3] (assuming the Goto table directs us to state `3` after reducing to `B`).

#### Step 4: Reducing B to E

- **Action:** Further reduce `B` to `E` using the rule "E → B".
- **Stack Action:** Replace `B` with `E` and consult the Goto table to find the next state. Suppose it sends us to state `4`.
- **Stack:** [0, 4]

#### Step 5: Parsing "+"

- **Input:** +
- **Action Table Lookup:** Depending on the parser's state, a shift action is typically taken for `+`.
- **Stack Action:** Shift and push the new state onto the stack.
- **Stack:** [0, 4, 5] (assuming state `5` is the next state for `+`).

#### Step 6: Parsing "0"

- **Input:** 0
- **Action Table Lookup:** If a shift is required, move to the next state.
- **Stack Action:** Shift and push the new state onto the stack.
- **Stack:** [0, 4, 5, 6] (assuming state `6` is after reading `0`).

#### Step 7: Reducing "0" to B

- **Action:** Reduce using the rule "B → 0".
- **Stack Action:** Replace `0` with `B` and consult the Goto table to find the next state, e.g., `7`.
- **Stack:** [0, 4, 5, 7]

#### Step 8: Reducing "E + B" to E

- **Action:** Finally, apply the reduction "E → E + B".
- **Stack Action:** Pop three times for `E`, `+`, and `B`, and then push `E` with the resulting state from the Goto table. Assume the final state is `8`.
- **Stack:** [0, 8]

#### Step 9: Accepting the Input

- **Input:** $
- **Action Table Lookup:** If the parser is in a state that corresponds to an accepting action for the end of the input, the string is accepted.
- **Final Stack:** [0, 8] and the input is accepted as syntactically correct according to the grammar.

![[Pasted image 20240501123226.png|350|350]]