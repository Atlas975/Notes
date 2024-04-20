---
aliases: [CNN]
---

> [!important]- Metadata
> **Tags:** #MediaEncoding #StatisticalLearning
> **Located:** MachineLearning
> **Created:** 26/12/2022 - 09:26
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Convolutional networks
- A  specialised [[Neural_networks|neural network]] can be used to process images, in the context of a neural network this is done by breaking an image down to into its edges, shape patterns, colour etc
- Specialised for data with grid-like topology 
- The motivation behind this is creating a network that can automatically learn [[Image_features|features]] without having to be familiar with the original data and it's content
- Example network

![[Pasted image 20220621152515.png|450|450]]
![[Pasted image 20220621152421.png|450|450]]

- The dimensions of a filter correspond to the number of parameters eg with 10 filters of 3x3x3 in a layer, the resulting output will 270 parameters, with a bias this would be 280.
- Note how the original image size doesn't influence the number of parameters
## Differences from standard networks
- **Parameter sharing**: instead of each neuron being linked to every neuron in the next layer
- operates on lower and higher level features, saving computation power. A feature detector for instance that's useful in part of an image will likely be usefil in other parts of an image
- **Connection sparsity**: each output in a layer depends on a small number of inputs


![[Pasted image 20240419182533.png|350|350]]
- Generally while going deeper in a CNN, height and width tend to decline while number of channels increases ($H,W \downarrow  \implies C\uparrow$)
