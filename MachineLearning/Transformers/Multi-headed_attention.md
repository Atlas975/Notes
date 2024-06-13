> [!important]- Metadata
> **Tags:** #StatisticalLearning #NLP 
> **Located:** MachineLearning/Transformers
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Multi-headed attention


## Multi-head benefits 

$$\color{#8DB600}\text{Which do}\color{white}\ \text{you like better, coffee or tea}\ \color{#8DB600}?\color{white} \to \text{structure focus}$$
$$\text{Which do }\color{#FF8C00}\text{you}\ \color{white}\text{like better,}\ \color{#FF8C00}\text{coffee or tea?}\color{white} \to \text{noun focus}$$
