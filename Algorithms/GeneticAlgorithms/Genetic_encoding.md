> [!important]- Metadata
> **Tags:** #GeneticAlgorithms
> **Located:** Algorithms/GeneticAlgorithms
> **Created:** 11/11/2023 - 16:48
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Genetic encoding

## Binary encoding 
- Each chromosome is a string of bits that are either 0 / 1
- Common used in [[Linear_programming#Knapsack problem|Knapsack]] style problems, meaning of bit groups can vary 

![[Pasted image 20231112141958.png|350|350]]
## Value encoding 
- Each chromosome is a string of values, easier to encode non binary information
- Useful for [[Neural_Network_notation]] where


## Permutation encoding 

## Tree encoding 