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
# Continuous bag of words
- A word [[Word_embedding|embedding]] model, involves making word predictions using the surrounding context words  (a few words that appear before and after in a sentence, defined by window size)
- The goal of CBOW is to predict a target word based on it's surrounding words, making it particularly efficient at handling frequent words. 

![[Pasted image 20240609161945.png|300|300]]

$$\text{Prediction}=\text{Softmax}(z)$$
$$z=h\cdot W_{2}$$
$$h=\text{average}(X)\cdot W_{1}$$

- $X$ is a matrix of [[Categorical_data_handeling#One-hot encoding|one-hot encoded]] representations of context words of size $1\times V$
- $h$ is the hidden layer output (embedding vector representation) of size $N$
- $W_{1}$ is a $V \times N$ matrix used as the input weights 
-  $W_{2}$ is a $N \times V$ matrix used as the output weights