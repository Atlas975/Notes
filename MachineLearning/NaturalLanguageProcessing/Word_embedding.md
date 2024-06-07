> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/NaturalLanguageProcessing
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Word embedding
- A technique used in [[Natural_language_processing|NLP]] and [[Artificial_intelligence|ML]] to represent words in a continuous vector space where words with similar meanings have similar representations
- This dense representation has a lower memory requirement than [[Categorical_data_handeling#One-hot encoding|One-hot encoding]]  and is able to capture the [[Formal_languages|semantic]] meaning of words more effectively 


![[Pasted image 20240607160736.png|350|350]]

- A higher dimensional embedding can capture fine-grained relationships between words and offer better word seperation, but takes more data to learn. 
- A well-trained embedding shoud