> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/Transformers
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Self-attention
- A mechanism in [[Neural_networks|neural networks]] primarily used in [[Transformers|transformer]] models, allows the model to weigh the importance of different tokens in a sequence relative to each other
- This helps the model understand the context of each word by considering its relationship with other words in the sequence