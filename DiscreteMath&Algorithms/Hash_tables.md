# Hash tables
- Same concept as dictionaries in python and SQL relational tables
- Main purpose is to provide direct lookup of items without their value, since the location is generated based off the hashes value, the location itself acts as an array in the case multiple items are tied to the same hash.
- Hash tables usage:
>![[Pasted image 20220224120649.png]]
- Hash keys can be anything as long as its deterministic (unique). The type of hash function greatly influences runtime
- Example hash function:
>![[Pasted image 20220224121154.png]]
- Number of keys is fixed, number of values for each key is dynamic in order to avoid collision
- Retrieval from hastables is O(1) using key retrieval
## Hash table API
>void put(key, value)  
value get(key)  
bool contains(key)