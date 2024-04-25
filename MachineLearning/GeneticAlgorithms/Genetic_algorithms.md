> [!important]- Metadata
> **Tags:** #Algorithms #StatisticalLearning #GeneticAlgorithms 
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
- A guided random [[Search_algorithms|search]] strategy, ideal for navigating large search spaces for an ideal solution
- Most problems can be generalised as a search problem a genetic algorithm can solve 
## Genetic algorithm terminology
- **Population**: a set of chromosomes
- **Chromosome**: a candidate solution
- **Gene**: a parameter in an individual chromosome 
- **Allele**: value of an individual gene

![[Pasted image 20231111164640.png|400|400]]
## Genetic algorithm process
1. **Start**: generate random population of N chromosomes
2. **Fitness**: evaluate the fitness of each chromosome
3. **New population**: generate next permutation of population by repeating:
	1. **Selection**: select two parents based on fitness 
	2. **Crossover**: with a probability of crossover occurring, try to cross both parents to form a new offspring, else create exact copy of parent
	3. **Mutation**: with a probability of mutation occurring,  try to mutate offspring at each gene
	4. **Accepting**: place new offspring in a new population
	5. **Fitness**: evaluate the fitness of each chromosome 
4. **Replace**: generate a new population for a further run of algorithm 
5. **Test**: check if end condition is satisfied, is so stop and return best solution in current population
6. **Loop**: go to step 3
### End condition of a genetic algorithm 
- The algorithm stops when it converges, this can take place in a variety of ways such as:
    1. A high percentage (eg 90%) of the population has the same fitness value 
    2. The number of generations exceeds a fixed number 
    3. The average fitness is unchanged for several generations 
## Fitness function
- When the correct answer is known, fitness is a distance metric towards it 
- When the correct answer is unknown, fitness is an estimator of how valuable a solution is 
- Fitness functions often need to quantify multiple goals into a single numeric value, evolution is only as good as it's fitness function 
- In general an ideal fitness function needs to be: 
	1. **Clearly defined**
	2. **Efficient** (non-bottleneck of algorithm)
	3. **Intuitive in results** (best/worst chromosome should have best/worst score)
