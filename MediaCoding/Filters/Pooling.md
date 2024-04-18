> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters
> **Created:** 18/04/2024 - 16:03
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Pooling
- A type of filter often used in a [[Convolutional_networks|CNN]], helps capture the essence of features in an image whilst reducing the spatial dimensions (downsampling)
- This helps reduces the number of parameters making computation cheaper (allowing for a deep [[Neural_networks|NN]]) and avoiding overfitting. This is also needed to collapse the network


![[Pasted image 20220621153651.png|300|300]]

