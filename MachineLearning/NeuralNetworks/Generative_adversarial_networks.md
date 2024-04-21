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
- A specialised [[Neural_networks|neural net]] designed for generating data that resembles it's training data, this is done in an adversarial setting where synthetic data must compete with real data
- GAN's make use of two models, a generator that creates new data and the discriminator that competes with it until it can be tricked by synthetic data 

![[Pasted image 20240420203909.png|450|450]]

## Generator
- Tries to produce data that will be classified as real by the discriminator. The generator’s weights are adjusted based on how well it tricks the discriminator
- At the end of the training process the generator must be able to reliably fool the discriminator. The generator starts off with random 
## Discriminator
- Trained on a mixture of real data from the dataset and fake data from the generator. It must learn to correctly classify  in a way that maximises both the true positive and true negative rate
- Success in the generator component must also drive the discriminator to improve, this dynamic is what drives both networks to improve


## GAN architecture 