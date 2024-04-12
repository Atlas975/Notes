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
-  A measure that evaluates how relevant a word is to a document in a collection of documents. Naturally gives low weighting to stop words eg the,as, a
- TF is the frequency of any term in an individual document 
- IDF is constant for the entire corpus, accounting for the ratio of documents that include the specific term. 

![[Pasted image 20231022160737.png|550|550]]

## TF-IDF formula 
$$w_{x,y}=tf_{x,y}*\log\left( \frac{N}{df_{x}} \right)$$
$$tf_{x,y}=\text{freq of x in y}$$
$$df_{x}=\text{\# documents containing x}$$
$$N=\text{total documents (corpus length)}$$
