> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> **Created:** 02/04/2024 - 18:47
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Clustering
- Organises data into groups based on similarity, where each group, or cluster, contains items more similar to each other than to those in other groups.
- Used to find inherent structures or patterns in the data without pre-labeled classes
- Can be either 

