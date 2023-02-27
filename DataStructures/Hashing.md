#ADTs [[Time_complexity]]
# Hash tables
- Same concept as dictionaries in python and SQL relational tables
- Main purpose is to provide direct lookup of items without their value, since the location is generated based off the hashes value, the location itself acts as an array in the case multiple items are tied to the same hash.
- Hash tables usage:
![[Pasted image 20220224120649.png|450|450]]
- Hash keys can be anything as long as its deterministic (unique). The type of hash function greatly influences runtime
- Example hash function:
![[Pasted image 20220224121154.png|450|450]]
- Number of keys is fixed, number of values for each key is dynamic in order to avoid collision
- Retrieval from hastables is O(1) using key retrieval
## Hash table API
>void put(key, value)  
value get(key)  
bool contains(key)


# Hash functions
- Converts typically a string based key into an integer that can be used for indexing [[DataStorage&Retrieval]]
- An advantage of using this over a method such as just taking the first letter for instance is that the bucket range isn't limited to 0-25
- Collisions can be dealt with through chains and are typically few in number bringing the function close to its ideal complexity of O(1)
- Example function, summing ascii values of first 4 letters of each input 
- Results in 106 (4 x 26)  buckets, again a lot of these are still rarely used, it might sometimes be more efficient to take the last 4 letters if sum ranges are more diverse
![[Pasted image 20220512140926.png|450|450]]

## Designing hashing functions 
- A dataset with a large number of objects requires a long array to minimize collisions, a good hash function needs a wide range of values and an even distribution
- The size of a key can be set by the following can be set using the following

![[Pasted image 20220512141645.png|450|450]]

## Hashing pitfalls
- Hashing has two distinct phases
1. Using the hash function to compute index
2. Search in array element for a match
- Real world functions avoid slow operations such as multiplication / division
- Use fast logical shifts such as OR

![[Pasted image 20220512142139.png|450|450]]

- Computer can perform bit shifts faster than a lot of mathematical operations 
- Example hash 

![[Pasted image 20220512142313.png|450|450]]