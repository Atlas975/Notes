# Rust tuples
- Tuples are heterogeneous but of fixed length like arrays
- These can also be declared with or without a type

>![[Pasted image 20220524163110.png]]
>![[Pasted image 20220524163124.png]]

## Pattern matching
- Can be used to retrieve individual elements from a tuples 
```rust
let person_data = ("Alex", 48, "35kg", "6ft");
let (w, x, y, z) = person_data;
```

## Mutable tuple 
```rust
let mut person_data = ("Alex", 48, "35kg", "6ft");

//print the value of tuple

println!("The value of the tuple at index 0 and index 1 are {} {}", person_data.0, person_data.1);

//modify the value at index 0

person_data.0 = "John";

//print the modified value

println!("The value of the tuple at index 0 and index 1 are {} {}", person_data.0, person_data.1);
```