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


## Item sets
- LR(0) item groupings that represent all possible parser states based on received input
- Note the `●` indicates the parsers position within a rule eg for `E -> E+B` the items are: 
```
E -> ● E + B
E -> E ● + B
E -> E + ● B
E -> E + B ●
```

- The only exception are rules in the form `A->ε`, the only item would be `A -> ●`
- This is mainly required for when multiple states exist eg `E-> E + B`, `E-> E * B`
- When the parser is in a state of superposition (multiple valid possible states), the set of items it can become can be written in the following way `{E-> E ● + B, E-> E ● * B}`
### Item set closure 
- If a `●` precedes a non-terminal in an item, rules for it are activated and included in the item set
- This is because non-terminals c
```
E -> E + ● B
B -> ● 1 // both variants of B need to be added to the item set
B -> ● 0
```

## Grammar augmentation
- 
