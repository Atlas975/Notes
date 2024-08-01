> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/FeatureEngineering
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Batch normalisation
- A technique used in [[Neural_networks|deep neural nets]] to [[Normalisation|normalise / standardise]] the inputs at each layer to handle covariate shift (the distribution of inputs changing during training)
- This is especially useful in [[Gradient_descent#Stochastic gradient descent|SGD]] where batch distribution can vary significantly. Batch norm can stabilise the descent by making the distribution of inputs consistent

![[Pasted image 20240629190156.png|450|450]]

- To ensure the network can still learn complex patterns, 2 additional trainable parameters are used. This involves a scaling factor ($\gamma$) and a shifting factor ($\beta$)
- This way, after normalisation, the network can scale and shift the normalised values as needed

$$y=\gamma\cdot \text{norm}(x)+\beta$$
Sudo dnf inst