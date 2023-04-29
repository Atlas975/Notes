> [!important]- Metadata
> **Tags:** #ComplexityTheory #Algorithms #ADTs 
> **Located:** DataStructures
> **Created:** 27/02/2023 - 11:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Hashing
- A hash [[Functions|function]] maps a data item (of arbitrary size) to a fixed value 
- A hash table is a data structure that implements an associate array/dictionary. 
- Hash keys can be anything as long as its deterministic (unique). The type of hash function greatly influences runtime, an ideal hash function is fast and [[Functions#Injective|Injective]]
- Number of keys is fixed, number of values for each key is dynamic in order to avoid collision
## Hash table API

> void put(key, value)  
> value get(key)  
> bool contains(key)

# Hash functions
- Converts typically a string based key into an integer that can be used for indexing [[DataStorage&Retrieval]]
- An advantage of using this over a method such as just taking the first letter for instance is that the bucket range isn't limited to 0-25
- Collisions can be dealt with through chains and are typically few in number bringing the function close to its ideal complexity of O(1)
- Example function, summing ascii values of first 4 letters of each input 
- Results in 106 (4 x 26)  buckets, again a lot of these are still rarely used, it might sometimes be more efficient to take the last 4 letters if sum ranges are more diverse
![[Pasted image 20220512140926.png|450|450]]

## Designing hashing functions
- A dataset with a large number of objects requires a long array to minimize collisions, a good hash function needs a wide range of values and an even distribution
- The size of a key can be set by the following:

![[Pasted image 20220512141645.png|450|450]]

## Hashing speed
- Real world functions avoid slow operations such as multiplication / division
- Any logical shift / OR function is a well optimised operation for computers 
- Eg ($x\cdot2^{N}==x\ll N$) but the latter operation is faster, example encoding:

![[Pasted image 20220512142313.png|450|450]]
