> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** MediaCoding/Filters
> **Created:** 20/04/2024 - 20:41
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Unpooling
- The inverse of a [[Pooling]] operation, commonly used in a [[Generative_adversarial_networks|GAN]]
- This is done to reconstruct spatial dimensions from a reduced representation 




## Nearest neighbour unpooling
- Each input value is duplicated in a specified pattern to increase the data's spatial dimensions. Ie. a pooling factor of 2 would be followed by unpooling replicating a pixel 4 times
- This is simple but can makes the output structure blocky when applied repeatedly

![[Pasted image 20240420204539.png|250|250]]

## Bed of nails unpooling
- Each value is placed in specific locations leaving all other positions zero-filled. This assumes the chosen values are always in the same location 
- This assumption can result in a highly distorted representation of the original data



![[Pasted image 20240420204307.png|250|250]]


## Position unpooling
- Involves keeping the spatial locations that the original pooling operation took it's data from, this can then be used to map the post-processed data back to those original locations
- All other locations that the pooling operation did not take a value from are left as 0

![[Pasted image 20240420204414.png|450|450]]
