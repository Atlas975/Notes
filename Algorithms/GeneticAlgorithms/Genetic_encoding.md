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

## Value encoding 

## Permutation encoding 

## Tree encoding 