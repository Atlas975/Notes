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