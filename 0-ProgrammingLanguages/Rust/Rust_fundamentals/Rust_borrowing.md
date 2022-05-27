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
- Dereferencing can be performed by using the star operator much like C

>![[Pasted image 20220527081553.png]]
>![[Pasted image 20220527082056.png]]
>![[Pasted image 20220527082116.png]]

``` rust
fn main() {
	let mut x = 10;  //mutable reference to a variable
	
	println!("Value of x:{}", x);
	
	let a = & mut x;
	
	println!("Value of a:{}", a); 	
	
	*a = 11;   //dereference a variable
	
	println!("Value of a:{}", a);
	
	println!("Value of x:{}", x); // value of x is updated
}
```

```
Value of x:10 
Value of a:10 
Value of a:11 
Value of x:11
```