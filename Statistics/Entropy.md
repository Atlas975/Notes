> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 03/04/2024 - 19:07
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Entropy
- A method of quantifying the amount of impurity or surprise in a dataset
- Higher entropy indicates a more mixed set of classes and lower predictability for a given set of data. In [[Decision_trees|decision trees]] for instance this is used as a metric for information gain from a split

![[Pasted image 20240403192328.png|350|350]]

- Note how entropy is maximised when the classes are evenly split, this is because the point represents when the set is the most impure
## Entropy forumla 
- Where $S$ is the set being investigated and $p$ is the proportion of elements in class $i$ within the set, the negative is taken due to the summation output being negative (log(0 <= x <= 1) is negative)
$$\text{Entropy}(S)=-\sum p_{i}\cdot \log_{2}(p_{i})$$
$$S=\text{the set being investigated}$$
$$p_{i}=\text{the proporition of elements in class }i \text{ within the set}$$
