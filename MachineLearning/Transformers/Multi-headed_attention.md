> [!important]- Metadata
> **Tags:** #StatisticalLearning #NLP 
> **Located:** MachineLearning/Transformers
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Multi-headed attention


## Multi-head benefits 

$$\color{#8DB600}\text{Which do}\color{white}\ \text{you like better, coffee or tea} \color{#8DB600}?\color{white} \to \text{sentence type focus}$$
$$\text{Which do }\color{#FF8C00}\text{you}\ \color{white}\text{like better,}\ \color{#FF8C00}\text{coffee}\color{white}\ \text{or} \ \color{#FF8C00}\text{tea} \color{white} \text{?}\to \text{object focus}$$
$$\text{Which do you} \ \color{#8D4E85}\text{like}\color{white} \ \text{better, }\color{#8D4E85}\text{coffee or tea}\color{white} \text{?} \to \text{relation focus}$$
$$\text{Which do you}\ \color{#007FFF}\text{like better}\color{white} \text{, coffee or tea?}\ \to \text{sentiment focus}$$


## Multi-headed self-attention algorithm 
```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class MultiHeadedSelfAttention(nn.Module):
    def __init__(self, embedding_dim: int, attention_dim: int, num_heads: int):
        super().__init__()
        sub_attention_dim = attention_dim // num_heads  # attention dim per head
        self.attention_heads = nn.ModuleList(
            SingleHeadAttention(embedding_dim, sub_attention_dim)
            for _ in range(num_heads)
        )

    def forward(self, embedded: torch.Tensor) -> torch.Tensor:
        ouputs = [head(embedded) for head in self.attention_heads]
        return torch.cat(ouputs, dim=-1)  # concatenate the scores from all heads
```