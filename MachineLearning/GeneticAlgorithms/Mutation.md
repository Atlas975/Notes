> [!important]- Metadata
> **Tags:** #GeneticAlgorithms 
> **Located:** MachineLearning/GeneticAlgorithms
> **Created:** 12/11/2023 - 15:54
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Mutation
- Introduces random changes to new offsprings (typically after [[Crossover]])
- Adds diversity to search space, this is vital to prevent chromosomes from exploring the same search tree and to avoid getting stuck at a local minima of the cost function
- The frequency of this occurring is controlled by the **mutation rate**. This needs to be high enough to explore while still being moderate enough to not disrupt convergence 

## Bit flip mutation

![[Pasted image 20231112155721.png|500|500]]

## Permutation encoding mutation

![[Pasted image 20231112155807.png|500|500]]

## Value encoding mutation
![[Pasted image 20231112160018.png|450|450]]
