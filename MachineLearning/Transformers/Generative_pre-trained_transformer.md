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
- GPT's focus on the generative aspect of text processing, which involves generating contextually appropriate tex based on a given input using only the decoder part of a Transformer  
- Transformer blocks are chained together, each refining the model's understanding and predictions. Each block making use of an [[Multi-headed_attention|MHSA layer]] and a feed forward layer