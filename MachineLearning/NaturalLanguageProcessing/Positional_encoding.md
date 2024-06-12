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

## Positional encoding calculation 
- Positional encodings are calculated using sine and cosine functions of different frequencies. This ensures that each position has a unique encoding to capture relative positions of words 
- For even indices ($2i$):
$$PE_{(pos,2i)}=\sin\left( \frac{pos}{10000^{2i/d}} \right)$$
- For odd indices ($2i+1$):
$$PE_{(pos,2i+1)}=\cos\left( \frac{pos}{10000^{2i/d}} \right)$$

- $pos$ is the position of the word in the sentence.
- $i$ is the dimension index (0-indexed so ranging from $0$ to $d-1$ ).
- $d$  is the dimensionality of the word embeddings.