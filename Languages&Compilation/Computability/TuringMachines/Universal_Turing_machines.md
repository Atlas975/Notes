> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 25/02/2024 - 19:11
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Universal Turing machines
- Runs problems as a separate [[Turing_machine|TM]] program, avoids the need for separate TMs for each problem
- A computer can only be as powerful as a UTM given unlimited storage, the UTM itself is a close analogy of a program fed to a computer 
- Takes in a coded version of a TM and its input string, producing the same output as a standard TM, the difference in process can be seen here:

![[Pasted image 20240225192207.png|400|400]]



## Turing machine encoding
- We can represent any Turing machine as a set of 5 items (quintuple):
	1. Current state 
	2. Symbol being read 
	3. Symbol to write 
	4. Move (L/R)
	5. New state 
- Each arc becomes it's own quintuple:

![[Pasted image 20240227150504.png|350|350]]


## Universal Turing machine tape
- This needs to store the following:
	1. The quintuples of the machine being simulated 
	2. Start state of simulated machine 
	3. Contents of non-blank part of data 
	4. A mark on simulated tape to indicate r/w head location


![[Pasted image 20240225191352.png|450|450]]


## Universal Turing machine process
1. Find first quintuple matching the simulated machine's current state, quintuples that don't match are changed from Q to F. If a Q is followed by a second Q, the machine has halted
2. Compare data symbol under simulated r/w head with quintuple from previous step, if this doesn't match change Q to F and go back to step 1 to find another quintuple 
3. Copy new data symbol from matching quintuple to data square under r/w head
