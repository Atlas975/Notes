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
- GPTs are initially trained on a large corpus of text data from the internet, learning to predict the next word in a sentence, effectively learning grammar, facts, and some reasoning abilities.

