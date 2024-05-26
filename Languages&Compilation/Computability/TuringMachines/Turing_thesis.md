> [!important]- Metadata
> **Tags:** #Compilers 
> **Located:** Statistics
> **Created:** 15/02/2024 - 12:09
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Turing thesis
- There is no machine more powerful than a Turing machine, the limitations of a Turing machine are the minimum limitations of any computer
- This doesn't compare the number of steps needed or how much storage is required. The Thesis only describes power in terms of weather or not something can be computed 
## Turing completeness
- Means a system can solve any problem given enough time and memory, thus simulating a Turing machine which implies the following capabilities:
	1. **Conditional Logic**: It must support operations like 'if-then-else'. This allows the system to make decisions based on conditions.
	2. **Variables and State Manipulation**: The ability to store and manipulate data is crucial. This often involves variables and some form of memory.    
	3. **Infinite Loops or Recursion**: The system should be able to perform operations indefinitely, subject to external constraints like physical memory limits.
	4. **[[Input&Output_systems|I/O]] Operations**: It should be able to interact with input data and produce output.
- Two systems are Turing equivalent if they can simulate each other
