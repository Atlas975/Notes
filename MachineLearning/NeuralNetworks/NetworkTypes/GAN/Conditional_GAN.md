> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/NeuralNetworks/NetworkTypes/GAN
> **Created:** 22/04/2024 - 16:32
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Conditional GAN
- A variation of [[Generative_adversarial_networks|GAN]] that allows control over generator output

![[Pasted image 20240422163329.png|500|500]]