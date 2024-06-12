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
# Skip-gram
- A word embedding model, works in the opposite way to CBOW by using the target word to predict the surrounding context words. The architecture is also a mirror image of that of CBOW
- The goal of Skip-gram is to predict the context words based on a given target word, making it particularly efficient at handling infrequent words but is more computationally expensive

![[Pasted image 20240609163013.png|300|300]]

$$\text{Prediction}=\text{Softmax}(Z )$$
$$Z=h\cdot W_{2}$$
$$h= x\cdot W_{1}$$

- $x$ is a one-hot encoded representation of the target word of size $1\times V$
- $h$ is the hidden layer output (embedding vector representation) of size $N$
- $W_{1}$ is a $V \times N$ matrix used as the input weights 
-  $W_{2}$ is a $N \times V$ matrix used as the output weights