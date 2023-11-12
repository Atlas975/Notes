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
- Adds diversity to search space, ensuring all of it can be explored. 
- This prevents all chromosomes from exploring similar trees all at once
- Can also prevent problems of reaching a local minima, mutation should still be done with a low probability to prevent erratic movement

## Bit flip mutation 

![[Pasted image 20231112155721.png|500|500]]

## Permutation encoding mutation 

![[Pasted image 20231112155807.png|500|500]]

## Value encoding mutation
![[Pasted image 20231112160018.png|450|450]]