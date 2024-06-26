> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation/BottomUpParsing
> **Created:** 01/05/2024 - 16:50
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Parsing tables
- The creation of action and goto tables is vital for carrying out [[LR(0)_parsing|LR(0) parsing]] 
- This process of doing this involves augmentation of the grammar, identifying item sets, performing closures, and establishing state transitions
## Grammar augmentation
- A [[Formal_languages|grammar]] needs a definitive completion state, this reduction occurs when the input is accepted
- This rule is always at the top of the parse tree, where `E` is the old start symbol:

$$\color{#8DB600}(0)\ S\to E\color{white}$$
$$(1)\ E\to E*B$$
$$(2) \ E = E+B$$
$$(3) \ E \to B$$
$$(4) \ B \to 0$$
$$(5) \ B \to 1$$


## Item sets
- LR(0) item groupings that represent all possible parser states based on received input
- This is mainly required for when multiple states exist eg `E-> E + B`, `E-> E * B`
- Note the `●` indicates the parsers position within a rule eg the items for the following grammar: 

![[Pasted image 20240501172310.png|450|450]]

- The only exception are rules in the form `A -> ε`, the only item would be `A -> ●`
- When the parser is in a state of superposition (multiple valid possible states), the set of items it can become can be written in the following way `{E-> E ● + B, E-> E ● * B}`

![[Pasted image 20240501231221.png|400|400]]
![[Pasted image 20240501231401.png|175|175]]
### Item set closure 
- If a `●` precedes a non-terminal in an item, rules for it are activated and included in the item set
- This is because non-terminals cannot be directly read into the input stream, so all potential branch states must be considered as items. These items are the closure of the item set

```
E -> E + ● B
B -> ● 1 // both variants of B need to be added to the item set
B -> ● 0
```

![[Pasted image 20240501223517.png|300|300]]


## Adding state transition actions
- Once the item sets have been formulated, the action and goto table can be populated 
- Needs to represent all possible shifts, reductions, and accept actions based on the grammar
- Columns for NON-TERMINAL's copied into the goto table, columns for terminals are copied to the action table as shifts:

![[Pasted image 20240501233252.png|350|350]]

## Adding reduce actions 
- For any item set that contains a rule with `●` at the end (eg `B -> 0 ●` ), it's corresponding row is filled with the reduce action for that rule
- The distinguished symbol (set 0) is the only exception to this, filled out action table:

![[Pasted image 20240501234916.png|350|350]]

## Adding terminating symbol 
- An extra column for `$` (end of input) is added to the action table that contains `acc` for every item set that contains `S -> E ●` (completes a parse of distinguished symbol)
- Some grammar's may have multiple `acc` terminators 

![[Pasted image 20240502005519.png|300|300]]