> [!important]- Metadata
> **Tags:** #ContinuousMath 
> **Located:** ContinuousMath
> **Created:** 24/10/2023 - 18:33
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Distance metics
- Distance metrics are a mathematical measures used to quantify the similarity or dissimilarity between two data points or objects. Various metrics exist
- These metrics help in comparing and analysing data in various applications, such as clustering, classification, recommendation systems, and data mining.
## Euclidean distance 
>$$\sqrt{\sum_{i}(a_{i}-b_{i})^2 }$$

## Square Euclidean distance 
>$$\sum_{i}(a_{i}-b_{i})^2$$
## Manhattan distance 
- Useful when a straight line distance isn't possible ie 
>$$\sum_{i}|a_{i}-b_{i}|$$
## Cosine distance 

## Maximum distance 
>$$max_{i}|a_{i}-b_{i}|$$
