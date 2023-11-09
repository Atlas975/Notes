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
- A guided random [[Search_algorithms|search]] strategy, ideal for navigating large search spaces for a ideal solution 
- Outline of a genetic algorithm:
    1. 
- 
