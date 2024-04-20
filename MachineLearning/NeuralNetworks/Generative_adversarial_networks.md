---
aliases:
  - GAN
---
> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/NeuralNetworks
> **Created:** 20/04/2024 - 20:28
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Generative adversarial networks
- A specialised [[Neural_networks|neural net]] designed for generating data that resembles it's training data



![[Pasted image 20240420203909.png|450|450]]