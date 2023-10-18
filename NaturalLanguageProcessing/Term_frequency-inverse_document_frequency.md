---
aliases:
  - TF-IDF
---

> [!important]- Metadata
> **Tags:** #StatisticalLearning #NLP
> **Located:** NaturalLanguageProcessing
> **Created:** 18/10/2023 - 15:03
> ```dataviewjs
> let cur = dv.current().file;
> let paths = new Set(
>     [...cur.inlinks.filter(p => !p.path.endsWith(".png")), ...cur.outlinks].map(p => p.path));
> paths.delete(cur.path);
> dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p =>
>     [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Term frequency-inverse document frequency
- A statistical measure that evaluates how relevant a word is to a document in a collection of documents