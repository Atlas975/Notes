> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/NeuralNetworks/NetworkTypes
> **Created:** 22/04/2024 - 16:05
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# DCGAN
- A deep convolution [[Generative_adversarial_networks|GAN]] that makes use of [[Convolutional_networks|CNN]] layers and [[Transposed_convolution|Deconv]] layers
