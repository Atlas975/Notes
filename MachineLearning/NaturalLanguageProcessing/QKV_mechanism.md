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
# QKV mechanism
- A mechanism used in [[Self-attention|self-attention]], involves 3 components:
    - **Query ($Q$)**: represents the current token’s information, which is used to seek relevance or compatibility with other tokens in the sequence.
    - **Key ($K$)**: encapsulates the information about other tokens in the sequence, which the query token uses to assess relevance or compatibility
    - **Value ($V$)**: the actual information / context of interest, this is what's aggregated based on attention scores 