# Indexed retrieval
- Frequently used to store and retrieve records in a data structure.
- An attribute of each item is used to form the key used for storage and retrieval 
- This helps store in sorted order, allowing for use of in order dependent algorithms such as binary search
- Basic index retrieval method

> index[0] holds the index of the first “A” record 
> index[1] holds the index of the first “B” record 
> index[2] holds the index of the first “C” record 
> Note: if there are no keys with a specific letter then index[n] = -1

>![[Pasted image 20220512132739.png]]

- Index retrieval with linear search :

```
take first letter L from name;
convert L to numeric value V;
obtain array index P from Index[V];
if (P<0) then no records start with letter L ® fail!
while (first letter of key of STORE[P]==L)
{
if (key==name) // record found!
{ return STORE[P]; break; }
P++; // move to next record
}
// if loop exhausts, name was not found.
```

## Indexed retrieval time complexity
- At the worst case, all keys start with the same letter resulting in all records being in the same section causing a linear search of the array O(N)
- At best search is 26x faster (num of letters in the alphabet
- Realistic time complexity is around 10x as certain letters are rarer than others
- Binary search can also be performed on individual buckets resulting in complexity of O(log(N))

## Adding an entry
- Adding an entry in an index based system can be inefficient as all elements need to shifted if an element is inserted in between
>![[Pasted image 20220512135732.png]]

# Collisions
- Data structure collisions occur when two pieces of data generate the same hash resulting in storage within the same location
- Collision check in storage 
```
take first letter L from name;
convert L to numeric value V;
if (STORE[V].key == name)
{
return STORE[V]; // record found
break;
}
else ...... // no matching key
```
- Note this only performs a check with the hash of the given data input resulting in a search complexity of O(N)

# Chain based storage 
- One way to reduce the computation of a insertion is to use chains (an array of buckets using chains to represent addtional entries

>![[Pasted image 20220512140119.png]]

```
take first letter L from name;
convert L to numeric value V;
obtain chain pointer P from STORE[V];
while (P!=null)
{
if (P.key==name) // record found!
{ return P; break; }
P=P.next; // move to next record
}
// if loop exhausts, name was not found.
```

- At a worst case every object is on the same chain resulting in a linear search O(N)
- At best case there are no collisions and each chain contains 1 or no items resulting in O(1) retrieval time 
- The main advantage of this is that chains are dynamic in size, objects can be inserted easily