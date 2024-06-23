> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Transformers
- A [[Neural_networks|deep learning]] model specialised in handling sequential data through the use of the [[Self-attention|self-attention mechanism]], this has the benefit of being highly [[Concurrency|parallelisable ]] 
- 


![[Pasted image 20240612163637.png|400|400]]
