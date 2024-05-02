> [!important]- Metadata
> **Tags:** #Compilers 
> **Located:** Statistics
> **Created:** 15/02/2024 - 12:02
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Halting problem
- A decision problem that defines the impossibility of a **universal** algorithm that can correctly determine if a program will halt or run indefinitely regardless for any given input
- This problem presents a computational limit for all computer 
## Halting problem proof
- This is done via a proof by contradiction for the following "Can we design a machine which if given a program can find out if that program will always halt or not halt on a particular input?"

1. Assume a Hypothetical Program 'Halt':
```
fn Halt(program P, input I) -> boolean:
    if P halts on I then
        return true
    return false
```

2. Create the contradictory program 'Paradox':

```
fn Paradox(program P) -> null:
    if Halt(P, P) then    // run with own code as input
        while true: 
            continue    // infinite loop
    return    // Halts
```

3. Apply 'Paradox' to Itself 
    - If `Halt(Paradox, Paradox)` returns `true`, meaning `Paradox` halts when given itself as input, then according to `Paradox`'s definition, it should run indefinitely, leading to a contradiction.
    - If `Halt(Paradox, Paradox)` returns `false`, meaning `Paradox` will run indefinitely, then according to `Paradox`'s definition, it should halt, which is again a contradiction.
```
Parodox(Parodox)    // Now consider when we call `Paradox` with itself as the argument.
```


4. Conclusion - The Halting Problem is Undecidable:
    - This contradiction implies that our initial assumption about the existence of the `Halt` function is false. No such function can exist that can determine for every possible program `P` and input `I` whether `P` halts on `I` or runs indefinitely.
    - This pseudocode representation demonstrates that the Halting Problem hinges on the self-referential paradox, which leads to the conclusion that there is no universal algorithm that can determine the halting behavior of all possible programs.