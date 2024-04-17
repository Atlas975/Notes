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
- Sampling taken randomly from each subset with no bias, this is simple but can't handle cases where information is needed on specific subgroups
- The randomness may result in a sample that doesn't reflect the makeup of the true population

![[Pasted image 20240416190915.png|250|250]]

## Systematic sampling
- Arrange population by a predefined ordering scheme and sample every $k$th element, this ensures the spread of the sample along the ordered list is as even as possible   
- This can introduce bias if the list has an underlying pattern that relates to the sampling interval 


![[Pasted image 20240416190958.png|350|350]]

## Stratified sampling

![[Pasted image 20240416191031.png|250|250]]


## Cluster sampling 

![[Pasted image 20240417104859.png|250|250]]