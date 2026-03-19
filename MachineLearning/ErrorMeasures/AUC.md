> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/ErrorMeasures
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# AUC
Imagine you take every malignant patient in your test set and every benign patient, and pair them up in every possible combination. For each pair, you ask the model: _which one do you think is more likely to be malignant?_

AUC is simply the **fraction of pairs where the model gets it right** — i.e. assigns a higher malignant probability to the actual malignant case.

So with AUC = 0.888:

- ~88.8% of random malignant/benign pairs are correctly ranked
- ~11.2% of the time the model is confused — it gives a benign case a higher malignant probability than an actual malignant case


# AUC usage
It completely decouples AUC from the threshold. You're not asking "did the model predict the right class?" — you're asking "did the model's _confidence_ at least point in the right direction?" This is why AUC is called a **discrimination metric** — it measures how well the model separates the two classes in probability space.

|Patient|Actual|P(malignant)|
|---|---|---|
|A|Malignant|0.85|
|B|Benign|0.60|
|C|Malignant|0.40|

The possible malignant/benign pairs are:

- A vs B → model gives A 0.85 > B 0.60 ✅
- C vs B → model gives B 0.60 > C 0.40 ❌

AUC = 1 correct out of 2 pairs = **0.5** — terrible, despite one confident correct prediction. Patient C being ranked below a benign patient is a serious failure the model can't hide.

**The subtle implication for your project**

Your model's 0.888 AUC sounds strong, and in isolation it is. But notice that patient C scenario — a malignant case with low predicted probability would still be a missed cancer in practice, regardless of how well other pairs are ranked. AUC rewards the model for the pairs it gets right but says nothing about _which specific malignant cases_ it's uncertain about. That's the gap between AUC and what your PR curve is actually capturing.