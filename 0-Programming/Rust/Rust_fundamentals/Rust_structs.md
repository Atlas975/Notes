# Rust structs 
- Similar to tuples, allow for elements of different types be grouped up together, structs are created using the following blueprint

>![[Pasted image 20220528193059.png]]
note pascal case for struct name

- To initialize a new struct based variable: 

>![[Pasted image 20220528193257.png]]
- Accessing individual elements in a struct 

>![[Pasted image 20220528193609.png]]

# Structs with functions 
>![[Pasted image 20220528193937.png]]

## Return a struct 
>![[Pasted image 20220528194055.png]]


# Tuple structs 
- Hybrids between tuples and structs

>![[Pasted image 20220528201802.png]]
- Tuple structs core blueprint:

>![[Pasted image 20220528201927.png]]
- Example code:
```rust
//define a tuple struct

struct FruitQuantity(String, i32);


fn main() {

	// create an instance
	
	let r1 = FruitQuantity("oranges".to_string(), 12);
	
	// access values of a tuple struct
	
	println!("r1--name:{} quantity:{}", r1.0, r1.1);
	
	// create an instance
	
	let r2 = FruitQuantity("mangoes".to_string(), 13);
	
	// access values of a tuple struct
	
	println!("r2--name:{} quantity:{}", r2.0, r2.1);

}
```

```
r1--name:oranges quantity:12 r2--name:mangoes quantity:13
```