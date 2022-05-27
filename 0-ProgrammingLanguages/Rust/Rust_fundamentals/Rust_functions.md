# Rust functions pass by reference
>![[Pasted image 20220527204834.png]]
- Example of changing values through pass by reference 
``` rust 
fn change(x:&mut i32, y:&mut i32){  
	*x = 0;  *y = 0;  
	println!("x : {}, y : {}", x , y); // x:0 y:0
}		
fn main() {  
	let mut x = 10;  
	let mut y = 9;  
	change( &mut x, &mut y );  
	println!("x : {}, y : {}", x , y); // x:0 y:0
}
```

# Rust return statement 
- Return function layout

>![[Pasted image 20220527205746.png]]
>![[Pasted image 20220527205913.png]]
- Unlike other languages, the return value in rust can be handled in two ways 
```
return value;  // clear and like other langauges

value // alternative, not placing a semicolon returns the value
```

# Rust return multiple values 
- Like python, rust can also return tuples which can be handled through unpacking 

>![[Pasted image 20220527210543.png]]