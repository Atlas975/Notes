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
- Accuracy as a measure only accounts for what percentage of results are wrong, it doesn't explain where the incorrect results came from. Confusion matrix measures solve this 

$$Accuracy=\frac{TP+TN}{TP+TN+FP+FN}$$

![[Pasted image 20231023144755.png|250|250]]


- Multiple measures can be derived from confusion matrices, these each tell different things and are emphasised differently depending on model purpose eg high sensitivity  in cancer diagnosis

## Sensitivity / recall
- Proportion of positive outcomes if truly positive (too many missed diagnosis if low)

$$\frac{TP}{TP + FN}$$

## Specificity
- Proportion of negative outcomes if truly negative (too many false scares if low)

$$\frac{TN}{TN+FP}$$

## Precision
- Proportion of true positive outcomes to positive outcomes (too many false scares if low)

$$\frac{TP}{TP+FP}$$

## Negative predicted value
- Proportion of truly negative outcomes to predicted negative (too many missed cases if low)

$$\frac{TN}{TN+FN}$$

## F-score
- A single metric that balances both **precision** and **recall**, this is useful as trying to increase either of the metrics often has a tradeoff with the other.  This uses a [[Mean#Harmonic mean|harmonic mean]] of the two 

$$  2 \cdot\frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$
- This may be more informative than accuracy in cases such as dataset imbalance eg. making only one prediction may result in high accuracy, but a F-score will give a more realistic measurement of a models effectiveness
