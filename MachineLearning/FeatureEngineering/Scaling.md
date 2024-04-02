> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** MachineLearning/FeatureEngineering
> **Created:** 02/04/2024 - 19:40
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Scaling
