> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/Regularisation
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Dropout regularisation
- A [[Regularisation|regularisation]] technique that involves dropping a fraction of the neurons during each training iteration in a [[Neural_networks|neural net]]. This leads to better generalisations
- This is typically done by selecting a probability of a weight being set to 0. This makes the network less reliant on specific neurons, leading to a more robust model 

![[Pasted image 20240629182641.png|450|450]]

- Dropout can be taught of as an implicit [[Ensemble_learning|ensemble]] model, training a large number of subnetworks designed for different combinations of neurons
- During inference, using the full network is like averaging the predictions of these subnetworks. When a layer that used dropout is making a prediction, neuron output is scaled:

$$\hat{y}_{\text{final}}=\hat{y}\cdot(1-\text{dropout\_rate})$$
