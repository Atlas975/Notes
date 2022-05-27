# Rust borrowing 
- The equivalent of pointers in C
- The two main kinds of borrowing include
1. Shared borrowing, shared by single or multiple variables, but **no altering** 
2. Mutable borrowing, shared by single variable but data cannot be accessed by other variables

>![[Pasted image 20220527074834.png]]
>![[Pasted image 20220527074911.png]]

- Example code of both borrowing methods
```
fn main() {

	let x = 10;
	
	let mut y = 13;
	
	//immutable reference to a variable
	
	let a = &x;
	
	println!("Value of a:{}", a);
	
	println!("Value of x:{}", x); // x value remains the same
	
	//mutable reference to a variable
	
	let b = &mut y;
	
	println!("Value of b:{}", b);
	
	*b = 11; // derefencing
	
	println!("Value of b:{}", b); // updated value of b
	
	println!("Value of y:{}", y); // y value can be changed 
}
```

## Dereferencing mutable borrow