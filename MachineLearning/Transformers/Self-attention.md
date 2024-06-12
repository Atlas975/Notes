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
- A mechanism in [[Neural_networks|neural networks]] primarily used for [[Transformers|transformer]] models. This is crucial for tasks like translation, where word meaning can depend on a large context window of words around it
- This mechanism enables the model to weigh the importance of tokens in a sequence relative to each other. This is also done in [[Concurrency|parallel]] rather than sequentially

![[Pasted image 20240606213618.png|400|350]]

## Input embedding 
- Each word in the input sequence is converted into a dense vector representation, this vector captures the words meaning in a numerical format
- This creates an $n \times d$ vector $n$ represents sentence length and $d$ is the dimensionality of the [[Word_embedding|embedding]]. Initially, this does not account for positional encoding 

$$X=[x_{\text{The}},x_{\text{cat}},x_{\text{sat}},x_{\text{on}},x_{\text{the}},x_{\text{mat}}]$$
## Positional encoding 
- Before proce

## Query, Key, Value vectors 
- **Query ($Q$)**: represents what the word is looking for in other words
- **Key ($K$)**: represents what the word contains that other words might be interested in
- **Value ($V$)**: the actual content of interest (meaning )

$$Q_{i}=W_{q}\cdot x_{i}$$
$$K_{i}=W_{k}\cdot x_{i}$$
$$V_{i}=W_{v}\cdot x_{i}$$

## Score calculation 


## Scaling 

## Softmax function

![[Pasted image 20240607171834.png|300|300]]

## Weighted sum