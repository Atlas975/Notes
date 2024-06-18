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
- A mechanism in [[Neural_networks|neural networks]] primarily used for [[Transformer|transformer]] models. This is crucial for tasks like translation, where word meaning can depend on a large context window of words around it
- This mechanism enables the model to weigh the importance of tokens in a sequence relative to each other. This is also done in [[Concurrency|parallel]] rather than sequentially

![[Pasted image 20240614210001.png|200|200]]
- The result of this mechanism is a matrix of attention scores between a word and all other words in a sentence, quantifying how relevant these words are to each other
- This aids the model in focusing on relevant  input when making predictions / generating

![[Pasted image 20240614214033.png|480|480]]
## Input embedding
- Each word in the input sequence is converted into a dense vector representation, this vector captures the words meaning in a numerical format
- This creates an $n \times d_{\text{model}}$ vector $n$ represents sentence length and $d_{\text{model}}$ is the dimensionality of the [[Word_embedding|embedding]]. Initially, this does not account for positional encoding 
$$X=[x_{\text{The}},x_{\text{cat}},x_{\text{sat}},x_{\text{on}},x_{\text{the}},x_{\text{mat}}]$$

## Positional encoding
- Before proceeding to the self-attention mechanism, a unique [[Positional_encoding|positional encoding]] vector needs to be added to the input embedding to incorporate word order information
- The periodic nature of this encoding scheme allows a model to infer relative positions as the difference between $PE$'s will be similar for words that are a fixed distance apart.
$$X=[x_{\text{The}}+PE_{0}, \ x_{\text{cat}}+PE_{1},\ x_{\text{sat}}+PE_{2},\dots]$$

## Query, Key and Value mechanism
- Three different linear transformations are applied to the input embeddings to produce the queries ($Q$), keys ($K$), and values ($V$) vectors
- These transformations are parameterised by learned weight matrices $(W_{Q}, W_{K},W_{V})$. Typically $(d_{Q}=d_{K} =d_{v}=d_{\text{model}}$) but this is not always the case


$$Q=X\cdot W_{Q}$$
$$K=X\cdot W_{K}$$
$$V=X\cdot W_{V}$$

- **Query ($Q$)**: represents what a token is searching for (eg a noun looking for an adjective)
- **Key ($K$)**: represents what information a token has (eg an adjective having descriptive qualities)
- **Value ($V$)**: contain the information that's multiplied by the attention weights to produce outputs
## Attention score
- The attention score is calculated by taking the product of the query and key matrices
- This produces the score for each pair of positions in the input sequence 
$$\text{Score}=Q\cdot K^T$$
- When computing scores using the above operation, the score magnitudes can vary significantly
- This [[Gaussian_distribution|variance]] grows with $d$, scaling is done to normalise this and improve gradient flow
$$\text{ScaledScore}=\frac{\text{Score}}{\sqrt{ d_{k} }}$$
- [[Softmax]] is used to convert these scores into probabilities and add numerical stability
- The scaling done prior also acts as a natural increase to the temperature of softmax output
$$\text{AttentionWeights}=\text{Softmax}(\text{ScaledScore})\cdot V$$

![[Pasted image 20240612224629.png|400|400]]

## Look-ahead masking
- An optional step in the self-attention mechanism used to prevent future information leakage, preventing information from future tokens from being used to make predictions 
- This ensures that each token in a sequence will only attend to the current and previous positions. This is done by setting future positions to $-\infty$ prior to softmax


![[Pasted image 20240614215227.png|500|500]]
