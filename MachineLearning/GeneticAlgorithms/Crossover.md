> [!important]- Metadata
> **Tags:** #GeneticAlgorithms 
> **Located:** MachineLearning/GeneticAlgorithms
> **Created:** 12/11/2023 - 15:30
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Crossover
- The process of chromosomes being recombined / crossed over to create the next iteration of chromosomes. Takes place after [[Genetic_selection|genetic selection]] and is used to potentially combine successful traits
- In most recombination operators, the probability two chromosomes are combined is referred to as the crossover probability
## K point crossover 
- The 1-point and 2-point crossover is the simplest and most widely used crossover method
- This involves two parents being selected with crossover points generated randomly 

![[Pasted image 20231112153542.png|450|450]]
## Uniform crossover
- For each position, exchange alleles with a given probability 

![[Pasted image 20231112153857.png|450|450]]