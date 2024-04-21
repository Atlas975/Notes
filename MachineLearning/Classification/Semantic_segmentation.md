> [!important]- Metadata
> **Tags:** #StatisticalLearning #MediaEncoding 
> **Located:** MachineLearning/Classification
> **Created:** 21/04/2024 - 19:11
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Semantic segmentation
- Involves partitioning an image into multiple segments, where each segment corresponds to a specific class label. This requires the use of an encoder and decoder step
- This is done using a [[Convolutional_networks|CNN]] until a small feature map is constructed and then reconstructing the semantic map using operations like [[Transposed_convolution|Deconv]] and [[Unpooling]]


![[Pasted image 20240421191732.png|400|400]]
