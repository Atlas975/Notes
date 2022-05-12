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

## Indexed retrieval worst case
