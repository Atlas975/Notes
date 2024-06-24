---
aliases:
  - GPT
---

> [!important]- Metadata
> **Located:** MachineLearning/Transformers
> **Created:** `$= dv.current().file.ctime`
> ```dataviewjs
> let cur = dv.current().file;
> let paths = new Set(
>     [...cur.inlinks.filter(p => !p.path.endsWith(".png")), ...cur.outlinks].map(p => p.path));
> paths.delete(cur.path);
> dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p =>
>     [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Generative pre-trained Transformer
- A [[Neural_networks|deep learning]] model specialised in [[Natural_language_processing|NLP]], makes use of the [[Transformer]] to process input data and generate output, allowing it to handle long-range text dependencies 
- GPTs are initially trained on a large corpus of text data, learning to predict the next word in a sentence. Effectively learning grammar, facts, and some reasoning abilities.

![[Pasted image 20240624200139.png|300|300]]
## GPT Transformer block
- GPT's focus on the generative aspect of text processing, which involves generating contextually appropriate text based on a given input using only the decoder part of a Transformer  
- Transformer blocks are chained together, each refining the model's understanding and predictions. Blocks make use of [[Multi-headed_attention|MHSA]] + feed forward layers using [[Residual_connections|skip connections]]

```python
class TransformerBlock(nn.Module):
    def __init__(self, model_dim: int, num_heads: int):
        super().__init__()  # use same size for embedding and attention
        self.mhsa = MultiHeadedSelfAttention(model_dim, model_dim, num_heads)
        self.norm1 = nn.LayerNorm(model_dim)
        self.ff = FeedForwardNetwork(model_dim)
        self.norm2 = nn.LayerNorm(model_dim)

    def forward(self, embedded: torch.Tensor) -> torch.Tensor:
        embedded += self.mhsa(self.norm1(embedded)) # temp = x + MHSA_NORM(x)
        embedded += self.ff(self.norm2(embedded)) # y = temp + FFN_NORM(temp)
        return embedded

class FeedForwardNetwork(nn.Module):
    def __init__(self, in_dim: int, scale_up: int = 4, drop_rate: float = 0.2):
        super().__init__()
        hidden_dim = scale_up * in_dim
        self.up_project = nn.Linear(in_dim, hidden_dim)
        self.relu = nn.ReLU()
        self.down_project = nn.Linear(hidden_dim, in_dim)
        self.dropout = nn.Dropout(drop_rate)

    def forward(self, embedded: torch.Tensor) -> torch.Tensor:
        x = self.relu(self.up_project(embedded))
        return self.dropout(self.down_project(x))
```


## GPT algorithm
- Parameters:
	- `vocab_size` - the number of different tokens the model recognises
	- `context_length` - how many previous tokens the model can read
	- `model_dim` - feature dimensionality for embeddings and attention
	- `num_blocks` - number of repetitions of TransformerBlock
	- `num_heads` - number of self attention instances
	- `context` - previous tokens used to make the prediction
- The GPT outputs a matrix of size `context_legnth X vocab_size`  where `output[i][j]` is the [[Likelihood|likelihood]] of the `jth` token occurring given the context of the first `(i+1)` tokens

```python
class GPT(nn.Module):
    def __init__(self, vocab_size: int, context_length: int, model_dim: int, num_blocks: int, num_heads: int):
```