> [!important]- Metadata
> **Tags:** #Statistics 
> **Located:** Statistics
> **Created:** 16/04/2024 - 19:06
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Sampling methods


## Simple random sampling
- Sampling taken randomly from each subset with no bias, this is simple and cheap to implement but can't handle cases where information is needed on specific subgroups
- The randomness may result in a sample that doesn't reflect the makeup of the true population

![[Pasted image 20240416190915.png|250|250]]

## Systematic sampling
- Arrange population by a predefined ordering scheme and sample every $k$th element, this ensures the spread of the sample along the ordered list is as even as possible   
- This can introduce bias if the list has an underlying pattern that relates to the sampling interval 


![[Pasted image 20240416190958.png|350|350]]

## Stratified sampling
- Population is divided into subgroups (strata) based on shared characteristics. A fixed number of samples are taken from each stratum 
- This enhances sample representation of subgroups but requires detailed knowledge of the population and can be complex to implement

![[Pasted image 20240416191031.png|250|250]]


## Cluster sampling
- Population is divided into separate groups (clusters), typically based on geography or other external characteristic, a whole cluster is randomly selected
- This is practical for large populations that are spread out, but requires a large amount of sampling from multiple clusters in order to eliminate bias

![[Pasted image 20240417104859.png|250|250]]
