---
aliases: hashing
---

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
# Hash tables
- A hash table is a data structure that stores key-value pairs, where keys (any data item of arbitrary size) are transformed via a hash [[Functions|function]] to an index in an array of buckets that map to the original value. 
- The number of unique keys for a hash function is fixed but the number of values for each key is dynamic in order to keep the hash function uniform 
## Hash table API
- The  [[Time_complexity|time complexity]] of all function operations is O(1) in best case and O(n) in worst case

> void put(key, value)  
> value get(key)  
> bool contains(key)

## Hash function goals
- **Uniformity**:  produce a uniform distribution of hash values, minimal bucket collisions
- **Determinism**: produce the same hash value for a given input, essential for comparison operations
- **Efficiency**: should be fast to compute, important when used on a large number of keys
- **Sensitivity**: small changes should propagate into large changes in hash output 
- **Security** (in some cases): should be resistant to attacks designed to determine pre-images (inputs that hash to a given output) and reproducing collisions. This prevents malicious messages from masking themselves as valid ones 
## Hash table size
- A dataset with a large number of objects requires a long array to minimise collisions, a good hash function needs a wide range of values and an even distribution
- The size of a hash table can be manipulated by the following:

![[Pasted image 20220512141645.png|450|450]]
- Collisions can be dealt with through [[Linked_list_algorithms|linked list]] chains and are typically few in number bringing the function close to its ideal complexity of O(1)

## Hashing speed
- Real world functions avoid slow operations such as multiplication / division
- Any logical shift / OR function is a well optimised operation for computers 
- Eg ($x\cdot2^{N}==x\ll N$) but the latter operation is faster, example encoding:

![[Pasted image 20220512142313.png|450|450]]

## Internal hashing
- Used when items are stored in [[Computer_memory#Primary memory|primary memory]] with a hash table  used as an internal search structure within a program, access is done exclusively through the use of a hash field 
- Implemented via a hash table that maps to a fixed size array of records/buckets 

![[Pasted image 20230429183154.png|500|500]]



## External hashing
- Used when items are stored in [[Computer_memory#Secondary memory|secondary memory]] with hashing done for disk files 

![[Pasted image 20230429183745.png|550|550]]



# Collision handling
- A hash collision occurs when a hash function maps two keys to the same bucket 
- Likely to occur when the co-domain (number of slots M) is small compared to the number of unique hash field values 

## Open addressing
- Proceed from the bucket the hash function maps to, involves sequentially traversing buckets until an empty one is  found and than occupying it.
- Logically simple but degrades performance as search time complexity approaches O(n)
## Multiple hashing
- Apply a second hash function if the first results in a collision, then use [[#Open addressing]] on subsequent collisions that occur
- Performing multiple hash functions may be slow 

## Chaining
- Extends array with a number of overflow positions, a pointer field is added to each collided record location to handle this.
- Collisions are then resolved by placing new records in unused overflow positions and mapping the overflow pointer to find the index of the collided item, example double collision:

![[Pasted image 20230429191111.png|350|350]]