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
- The process of chromosomes being recombined / crossed over to create the next iteration of chromosomes. Takes place after [[Selection|genetic selection]] and is used to potentially combine successful traits
- The frequency of this occurring is controlled by the **crossover rate**. This needs to be high enough to combine successful traits while low enough to avoid losing the integrity of these traits
## K point crossover 

![[Pasted image 20231112153542.png|450|450]]
## Uniform crossover

![[Pasted image 20231112153857.png|450|450]]