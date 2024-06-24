> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Transformer
- A [[Neural_networks|deep learning]] model specialised in handling sequential data through the use of the [[Self-attention|self-attention mechanism]], this has the benefit of being highly [[Concurrency|parallelisable ]] and scalable
- These involve processing the entire sequence at once via the use of encoders and decoders each with 2 components in their layers, an [[Multi-headed_attention|MHA]] mechanism and a feed-forward neural net

![[Pasted image 20240623203428.png|300|300]]

## Encoder
- Takes an input sequence and converts it into a high-dimensional vector, this representation captures the essential information and context of the input
- Each layer in the encoder refines the representation of the input sequence, making the final output of the encoder a set of vectors that encapsulate the input’s meaning.


![[Pasted image 20240623204008.png|450|450]]
## Decoder
- Takes an input sequence and predicts the next word, the inputs to the decoder is the output of the encoder and the previous outputs of decoder block itself 
- This results in an output size of $B\times T\times V$ where $B$ is batch size, $T$ is sequence length and $V$ is vocab size (a vector of probabilities of each word occurring calculated vis [[Softmax]])

![[Pasted image 20240624021531.png]]


```python
class TransformerBlock(nn.Module):
    def __init__(self, model_dim: int, num_heads: int):
        super().__init__()  # use same size for embedding and attention
        self.mhsa = MultiHeadedSelfAttention(model_dim, model_dim, num_heads)
        self.norm1 = nn.LayerNorm(model_dim)
        self.ff = FeedForwardNetwork(model_dim)
        self.norm2 = nn.LayerNorm(model_dim)

    def forward(self, embedded: torch.Tensor) -> torch.Tensor: 
        embedded += self.mhsa(self.norm1(embedded)) # skip connection 1
        embedded += self.ff(self.norm2(embedded)) # skip connection 2
        return torch.round(embedded, decimals=4)

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