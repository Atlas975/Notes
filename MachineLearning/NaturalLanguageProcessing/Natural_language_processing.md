---
aliases:
  - NLP
---
> [!important]- Metadata
> **Tags:** #StatisticalLearning #Languages 
> **Located:** MachineLearning/NaturalLanguageProcessing
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Natural language processing
- The study of the interaction between between computers and humans through natural language 
- The goal of NLP is to enable computers to understand, interpret, and generate human language in a way that is both meaningful and useful