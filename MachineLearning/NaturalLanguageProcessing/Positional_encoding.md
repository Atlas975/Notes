> [!important]- Metadata
> **Tags:** #NLP 
> **Located:** MachineLearning/NaturalLanguageProcessing
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Positional encoding
- [[Word_embedding|Word embedding]] alone does not capture the order of words in a sentence. A [[Transformer]] needs to be able to process words in [[Concurrency|parallel]] 
- Positional encoding achieves this by adding a unique position-based vector to each word embedding. This is used by the model to improve sequence understanding

