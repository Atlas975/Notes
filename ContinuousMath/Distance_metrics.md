---
aliases:
  - distance
---

> [!important]- Metadata
> **Tags:** #ContinuousMath 
> **Located:** ContinuousMath
> **Created:** 24/10/2023 - 18:33
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Distance metics
- Distance metrics are a mathematical measures used to quantify the similarity or dissimilarity between two data points or objects. Various metrics exist
- These metrics help in comparing and analysing data in various applications, such as clustering, classification, recommendation systems, and data mining.
## Euclidean distance
- Measure straight line distance between two points in multidimensional space, useful when the geometric distance needs to be found 

$$\sqrt{\sum_{i}(a_{i}-b_{i})^2 }$$

## Square Euclidean distance
- Lightweight version of standard euclidean

$$\sum_{i}(a_{i}-b_{i})^2$$

## Manhattan distance
- Useful when a straight line distance isn't possible ie grid based systems where movement is contained to horizontal / vertical movements

$$\sum_{i}|a_{i}-b_{i}|$$

## Cosine distance
- Measures the cosine angle between two vectors in multidimensional space, useful for measuring document similarity when the magnitude of vectors is irrelevant  

$$\frac{\sum_{i}a_{i}b_{i}}{\sqrt{ \sum_{i}a_{i}^2}\sqrt{ \sum_{i}b_{i}^2 }}$$

- To have values range from 0:2 rather than -1:1 the following can be used: 

$$\text{Cosine distance(A,B)}=1-\text{Cosine distance(A,B)}$$

### Cosine similarity applications
- Useful for finding the similarity between two pieces of text, ignoring frequency of repeats
- Note that a and b are sentences while each element represents word frequency 

![[Pasted image 20231024232458.png|350|350]]

![[Pasted image 20231024233038.png|350|350]]
## Hamming distance
- Measures the dissimilarity between two [[Bit_manipulation|binary]] strings of equal length by counting the number of positions at which the corresponding elements differ. Useful for error detection 

$$\begin{align*}
\mathcal{\sum_{i}} =
\begin{cases}
1 & \text{if }a_{i}=b_{i} \\
0 & \text{otherwise}
\end{cases}
\end{align*}$$

## Levenshtein distance
- measures the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into another.
- idely used in applications like spell checking, DNA sequencing, and natural language processing to assess the similarity or distance between two strings of text
![[Dynamic_programming#Edit distance]]



## Bray-curtis distance
- Highlights the common elements between two sets
- $\text{Distance} \propto \text{Overlap}^{-1}$


$$1-\frac{2\cdot \sum_{i}\text{min}(a_{i},b_{i})}{|A|,|B|}$$