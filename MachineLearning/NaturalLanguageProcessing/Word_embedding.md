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

- A higher dimensional embedding can capture fine-grained relationships between words and offer better word separation, but takes more data to learn. 
- A well-trained embedding should give words that appear in similar contexts a similar embeddings and capture complex relationships eg
$$E(\text{king})-E(\text{man})\approx E(\text{queen})-E(\text{women})$$
- This may require giving words multiple embeddings eg literal vs sarcastic use variants of a word
- The floating point numbers used to form these embeddings are learnt via a [[Neural_networks|neural nets]]. This has the advantage of being able to learn from the context of words in the training set

![[Pasted image 20240607164255.png|400|400]]


## Word embedding hyperparameters
- Small windows may also miss important context while large windows may be noisy
## Continuous bag of words
- A word embedding model, involves making word predictions using the surrounding context words in a text (a few words that appear before and after it in a sentence, defined by window size)
- Weights all inputs equally, not ideal if certain words are more informative than others


![[Pasted image 20240609161945.png|300|300]]



## Skip-gram

- Computationally more expensive

![[Pasted image 20240609163013.png|300|300]]
