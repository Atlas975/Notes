# Rust tuples
- Tuples are heterogeneous but of fixed length like arrays
- These can also be declared with or without a type

>![[Pasted image 20220524163110.png]]
>![[Pasted image 20220524163124.png]]

## Pattern matching
- Can be used to retrieve individual elements from a tuples 
```
let person_data = ("Alex", 48, "35kg", "6ft");let (w, x, y, z) = person_data;
```