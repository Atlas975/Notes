> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/FeatureSelectionMetrics
> **Created:** 23/10/2023 - 14:47
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Confusion matrices
- Accuracy as a measure in a classification problem only accounts for what percentage of results are wrong, it doesn't explain where the incorrect results came from. 
- Multiple measures can be derived from the matrix, each giving unique insights on a model

$$Accuracy=\frac{TP+TN}{TP+TN+FP+FN}$$

![[Pasted image 20231023144755.png|250|250]]

- These can be generalised to multi-class classification using a larger matrix:

![[Pasted image 20240403000814.png|250|250]]
## Recall
- Proportion of positive outcomes if truly positive (too many missed diagnosis if low)

$$\frac{TP}{TP + FN}=\frac{TP}{|\text{Positives}|}$$

## Precision
- Proportion of true positive outcomes to positive outcomes (too many false scares if low)

$$\frac{TP}{TP+FP}=\frac{TP}{|\text{Predicted positives|}}$$

## Specificity
- Proportion of negative outcomes if truly negative (too many false scares if low)

$$\frac{TN}{TN+FP}=\frac{TN}{|\text{Negatives}|}$$

## Negative predicted value
- Proportion of truly negative outcomes to predicted negative (too many missed cases if low)

$$\frac{TN}{TN+FN}=\frac{TN}{|\text{Positives}|}$$

## F-score
- A single metric that balances both **precision** and **recall**, this is useful as trying to increase either of the metrics often has a tradeoff with the other.  This uses a [[Mean#Harmonic mean|harmonic mean]] of the two 

$$  2 \cdot\frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$
- This may be more informative than accuracy in cases such as dataset imbalance eg. making only one prediction may result in high accuracy, but a F-score will give a more realistic measurement of a models effectiveness
