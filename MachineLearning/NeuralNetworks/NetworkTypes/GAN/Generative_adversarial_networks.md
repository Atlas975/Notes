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
- GAN's make use of two models, a generator that creates new data and the discriminator that competes with it until it can be tricked by synthetic data. This is repeated iteratively

![[Pasted image 20240526193814.png|550|550]]
## Generator
- Tries to produce data that will be classified as real by the discriminator. The generator’s weights are adjusted based on how well it tricks the discriminator
- At the end of the training process the generator must be able to reliably fool the discriminator by taking a vector of randomly initialised variables and mapping it to convincing synthetic data

![[Pasted image 20240421202212.png|400|400]]
## Discriminator
- Trained on a mixture of real data from the dataset and fake data from the generator. It must learn to correctly classify  in a way that maximises both the true positive and true negative rate
- Success in the generator component must also drive the discriminator to improve, which estimates the probability that data is real / synthetic using the [[Sigmoid_function|sigmoid]] function

![[Pasted image 20240422145528.png|400|400]]

## GAN loss function 
- The discriminator and generator have competing goals, making this setup adversarial
- Discriminator loss involves calculating the probability that the discriminator correctly classifies both real and fake data, typically calculated via binary [[Cross-entropy]]

$$D(x)=\text{disciminator prediction for}\color{#8DB600}\text{ real}\color{white}\text{ data }x$$
$$G(z)=\text{generator output from noise input }z$$
$$D(G(z))=\text{discriminator prediction for }\color{#FF033E}\text{fake data}\color{white}\text{ produced by generator}$$
- Generator loss is typically based on how often the discriminator incorrectly classifies the fake data as real, so ideally this increases as discriminator loss increases 
### Discriminator loss 

$$L_{D}=-\ln(D(x))-\ln(1-D(G(z)))$$
- This can be broken down into 2 components, the true positive rate and true negative rate: 

$$\color{#8DB600}\text{Real input error (want 1)}=-\ln(\hat{y})\color{white}$$
$$\color{#FF033E}\text{Synthetic input error (want 0)}=-\ln(1-\hat{y})\color{white}$$

### Generator loss 

$$L_{G}=-\ln(D(G(z)) )$$

- The generator's goal is to maximise the probability that $D$ predicts its output as real, which is equivalent to minimising the negative log probability
$$L_{G}\downarrow \implies L_{D}\uparrow $$
- When the generator is failing, $D(G(z))$ is close to 0 (can tell data is fake), resulting in a large positive  $L_{G}$ (loss is increasing). The inverse happens when $D(G(z))$ is close to 1