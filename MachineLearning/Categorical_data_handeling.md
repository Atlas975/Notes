
> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/0-GeneralConcepts/DataProcessing
> **Created:** 27/02/2023 - 11:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Categorical data handling
-  Categorical data refers to variables that contain label values rather than numerical values. 
- These labels can represent names, categories, or qualities and are often divided into two types: 
    -  **Nominal Data**: categories with no inherent order (e.g., gender, colour, city etc)
    - **Ordinal Data**: categories with a meaningful order but no fixed interval between them (e.g., ranking, education level etc.)
## Ordinal encoding
- Assumes ordering of categories
- Useful for giving different values distinct weights

![[Pasted image 20231022154704.png|300|300]]

## One-hot encoding
- No assumed ordering of categories (nominal values)
- Does not perform well when a large amount of possible categories are present.

![[Pasted image 20231022154301.png|550|550]]

- The boolean nature of this encoding scheme also gives it a high memory requirement, when analysing multiple sentences for example, vector dimensions will likely be too high
## Bag of words 
- Each element / document is a unordered collection of words, in this scenario a counter object is used to get the frequency of each words occurrence. 
- This typically used hashing possibly making the encoding process lengthy, however this does not suffer from the dimensionality growth rate that one-hot encoding does

![[Pasted image 20231022155818.png|350|350]]

- This has the advantage of having better similarity representation than one-hot but can also have the most common words dominate the count eg the,a,is
- [[Term_frequency-inverse_document_frequency|TF-IDF]] is a common solution to this