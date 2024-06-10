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
- A technique used in [[Natural_language_processing|NLP]] and [[Artificial_intelligence|ML]] to represent words in a continuous vector space where words with similar meanings have similar vector representations
- This dense representation has a lower memory requirement than [[Categorical_data_handeling#One-hot encoding|One-hot encoding]]  and is able to capture the [[Formal_languages|semantic]] meaning of words more effectively 


![[Pasted image 20240607160736.png|350|350]]


- Well-trained embedding schemes should give words that appear in similar contexts similar embeddings, capturing complex relationships. May require multiple embeddings per word
- The floating point numbers used to form these embeddings are learnt via a [[Neural_networks|neural nets]]. This has the advantage of being able to learn from the context of words in the training set
$$E(\text{king})-E(\text{man})\approx E(\text{queen})-E(\text{women})$$
![[Pasted image 20240607164255.png|400|400]]

## Word embedding hyperparameters
- **Dimensionality**: defines the number of dimensions in the vector space into which words will be embedded. This varies based on the complexity of the vocabulary 
	- A higher dimensional embedding can capture fine-grained relationships between words and offer better word separation, but takes more data to learn.
- **Window size**: defines the context in which a word is considered. eg in a window size of 2, the model looks at two words before and after the current word to predict its embedding
	- A larger window size captures more context but needs to remain small enough to not capture noise. Smaller windows are beneficial for focusing on immediate context 
- **Min count**: defines the number of times a word must appear in the text corpus to be part of the vocabulary. Helps tackle overfitting by eliminating potential [[Term_frequency-inverse_document_frequency|stop words]] 
	- A higher min count helps focus on words that are statistically significant but risks losing information from less frequent yet significant words
## Continuous bag of words
- A word embedding model, involves making word predictions using the surrounding context words  (a few words that appear before and after in a sentence, defined by window size)
- The goal of CBOW is to predict a target word based on it's surrounding words, making it particularly efficient at handling frequent words. Words are input as [[Categorical_data_handeling|one-hot vectors]]

![[Pasted image 20240609161945.png|300|300]]


- Projection involves getting a weighted average of the input vectors. 
- 
- This is then put through [[Softmax]] to represent the likelihood of each word occurring
## Skip-gram
- A word embedding model, works in the opposite way to CBOW by using the target word to predict the surrounding context words. The architecture is also a mirror image of that of CBOW
- The goal of Skip-gram is to predict the context words based on a given target word, making it particularly efficient at handling infrequent words but is more computationally expensive

![[Pasted image 20240609163013.png|300|300]]

- Projection involves multiplying the input by a weight matrix of size $V\times N$ where $V$ is vocab size and $N$ is dimensionality. This creates a dense word embedding vector 
- This is then multiplied by a matrix of size $N \times V$, creating a new vector of vocab size, this can then be put through any variant of softmax to get the likelihood of a context word occurring 
