> [!important]- Metadata
> **Tags:** #Languages #Compilers 
> **Located:** Languages&Compilation
> **Created:** 24/02/2024 - 19:18
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Turing machine
- Able to successfully read symbols from and input string (called the tape) while switching states
- Can read/write from tape while having unrestricted access and potentially memory
- Can process [[Context_free_grammars|context free grammars]] (and [[Unrestricted_grammars|unrestricted grammars]]), an [[Finite_state_machines|FSM]] or [[Pushdown_recogniser|pushdown recogniser]] are not powerful enough for this.
## Turing machine tape
- Infinite in both directions and divided into squares. Each square contains a symbol from the alphabet of a language. Most squares are blank (B)
- This is done with a read/write head

![[Pasted image 20240224192537.png|400|400]]

- Multiple variants of TMs exist eg infinite in only one direction, several rapes and r/w head, non deterministic TM's etc
- Any non-standard TM can still be modelled as a functionally equivalent standard TM, they can however be different in efficiency and complexity
## Turing machine instructions
- Behaviour can be specified similar to that of an FSM, the machine remembers what to write by being in one state rather than another.
- An arc is labeled with:
	- Symbol read 
	- Symbol written
	- Direction to move (L: left, R: right)


![[Pasted image 20240224192812.png|350|350]]

- In this case a/bL means read a, write b and move left 
- 0/1R means read, write 1 and move right 
- These arcs can be repeated as many times as needed

### Turing machine instruction examples
- Example of a more complex and complete TM:
- This machine writes the left most 0 as 1 and returns to start, if no leftmost 0 exists it goes right until it reaches B where it then returns to start as well

![[Pasted image 20240224193254.png|400|400]]

- Recogniser TM for $\{ a^ib^ic^{j}\text{ : }i\geq{1} \}$:
- Writes T for true if successful and halts, this is a linear bounded machine

![[Pasted image 20240224194235.png|450|450]]

## Turing machine bounds
- TM's that only use the space taken by the input string are called **linear bounded Turing machine**. This can include a fixed number of extra squares. These are limited in what they can solve
	- This bound is sufficient for any CF grammar ($|L|\leq{|R|}$) as derivation only grows
- Standard TM's do not have this memory limit, instead having access to an infinite tape
### Turing machine vs finite state register
- An FSR being less powerful than a TM, is effectively writing the same symbol it read each arc:

![[Pasted image 20240225114002.png|350|350]]
