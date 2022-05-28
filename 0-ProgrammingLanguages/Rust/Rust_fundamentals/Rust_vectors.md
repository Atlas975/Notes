# Rust vectors 
- Equivalent to dynamic arrays

>![[Pasted image 20220528160011.png]]

- Syntax:

>![[Pasted image 20220528160232.png]]
>![[Pasted image 20220528160220.png]]

- Out of bounds can be directly handled through methods such as 
```
let my_vec = vec![1, 2, 3,4,5];

match my_vec.get(9) {
	
	Some(x) => println!("Value at given index:{}", x),
	
	None => println!("Sorry, you are accessing a value out of bound")

}
```

# Rust vector methods 
>![[Pasted image 20220528160639.png]]


# Iterating over vectors 
```
// define a vector of size 5

let my_vec = vec![1, 2, 3];

// using loop

let mut index = 0;

for i in my_vec.iter(){ // it works even if .iter() is not written

	println!("Element at index {}:{} ", index, i);
	index = index + 1;
	
}
```
```
Element at index 0:1 
Element at index 1:2 
Element at index 2:3
```