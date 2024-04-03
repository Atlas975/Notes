> [!important]- Metadata
> **Tags:** #
> **Located:** MachineLearning
> **Created:** 03/04/2024 - 17:18
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Decision trees
- A non-parametric  [[Artificial_intelligence#Supervised learning|supervised learning]] algorithm that can be used for classification and regression, forming a tree-like model of decisions.  This model is fast but prone to overfitting
- Splits are chosen based on how much they maximise the separation of classes or minimise the variance for regression trees. Finding the optimal tree is computationally infeasible 


![[Pasted image 20240403184944.png|400|400]]

- Trees need to give both accurate predictions and be kept as shallow as possible (avoid overfitting), a good decision tree needs to balance both of these 
- The simplest way of handling this is to divide by the most important features in order until only a single datapoint is left / a max tree depth is reached 






## Information gain 
- The expected reduction in [[Entropy]], decision trees seek to maximise this
- This metric can be used for either numerical and categorical data 

$$\text{Gain}(S,\text{condition})=E(\text{parent})-[]$$

![[Pasted image 20240403185819.png|450|450]]
