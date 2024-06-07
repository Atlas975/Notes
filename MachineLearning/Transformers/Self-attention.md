> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/Transformers
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Self-attention
- A mechanism in [[Neural_networks|neural networks]] primarily used for [[Transformers|transformer]] models. This is crucial for tasks like translation, where the meaning of a word can depend on the words around it
- This mechanism enables the model to weigh the importance of tokens in a sequence relative to each other. This is also done in [[Concurrency|parallel]] rather than sequentially

![[Pasted image 20240606213618.png|400|350]]


## Input embedding 
- Each word in the input sequence is converted into a dense vector representation.
- For a sentence “The cat sat on the mat,” the input [[Word_embedding|embedding]] may look like:

$$\text{Input}=[x_{\text{The}},x_{\text{cat}},x_{\text{sat}},x_{\text{on}},x_{\text{the}},x_{\text{mat}}]$$
## Query, Key, Value vectors 
- **Query ($Q$)**: represents what the word is looking for in other words.
- **Key ($K$)**: represents what the word contains that other words might be interested in.
- **Value ($V$)**: The actual content that we are interested in.


## Score calculation 


## Scaling 

## Softmax function

![[Pasted image 20240607171834.png|300|300]]

## Weighted sum