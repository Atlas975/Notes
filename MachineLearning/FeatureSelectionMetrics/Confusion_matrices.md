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
- Proportion of positive outcomes to positive outcomes (too many false scares)

$$\frac{TP}{TP+FP}$$

## Negative predicted value
- Proportion of truly negative outcomes to predicted negative (too many missed cases)

$$\frac{TN}{TN+FN}$$

## F1 score
