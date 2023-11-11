> [!important]- Metadata
> **Tags:** #Algorithms #StatisticalLearning 
> **Located:** Algorithms/GeneticAlgorithms
> **Created:** 09/11/2023 - 18:22
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Genetic algorithms
- A guided random [[Search_algorithms|search]] strategy, ideal for navigating large search spaces for a ideal solution.
- Most problems can be generalised as a search problem a genetic algorithm can solve 
- Outline of a genetic algorithm:
	1. **Start**: generate random population of N chromosomes
	2. **Fitness**: evaluate the fitness of each chromosome
	3. **New population**: generate next permutation of population by repeating:
		1. **Selection**: select two parents based on fitness 
		2. **Crossover**: with a probability of crossover occurring, attempt to cross both parents to form a new offspring, else create exact copy of parent
		3. **Mutation**: with a probability of mutation occuring, m
