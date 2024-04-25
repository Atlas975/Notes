> [!important]- Metadata
> **Tags:** #GeneticAlgorithms 
> **Located:** MachineLearning/GeneticAlgorithms
> **Created:** 12/11/2023 - 15:02
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Selection
- The first operation in the reproductive phase of a [[Genetic_algorithms|genetic algorithm]], used to choose the fittest chromosomes to carry on to the next generation
- These procedures can be broadly classified as ordinal / fitness proportionate selection
- This needs to favour strong chromosomes enough to keep favourable traits while still occasionally picking some of the weaker ones to allow for genetic diversity 
## Tournament selection
- Chromosomes are randomly selected from the population,  the best chromosome from this group is then selected to carry on
- Tournament size refers to the size of the initial selection with 2 being widely used. 
- This selection can be with or without replacement 

![[Pasted image 20231112152113.png|400|400]]
- With a large tournament size weaker individuals have a smaller chance of surviving
- This selection method is extremely efficient and can work in [[Concurrency|parallel]]
## Roulette wheel selections 
- Selects chromosomes based on a probability proportional to fitness
- This process is repeated until a desired number of chromosomes are selected 

![[Pasted image 20231112152606.png|350|350]]