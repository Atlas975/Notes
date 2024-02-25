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
- Runs any problem as a separate Turing machine as if it were a program, this avoids the need for creating a separate TM for each problem
- This makes a UTM the counterpart of a computer but is of course much more powerful
- Takes in a coded version of a TM and its input string, producing the same output as a standard TM, the difference in process can be seen here:

![[Pasted image 20240225192207.png|400|400]]



• We can represent any Turing machine as a set of quintuples (groups of 5 things) 
	1. Current state
	2. Symbol being read 
	3. Symbol to write 
	4. Move (L or R) 
	5. New State



## Universal Turing machine process



![[Pasted image 20240225191352.png|450|450]]
