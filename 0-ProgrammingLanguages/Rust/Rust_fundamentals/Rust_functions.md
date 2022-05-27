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

- Example usage:
```
// driver function

fn main() {
	let length = 4;
	
	let width = 3;
	
	println!("Rectangle lenth:{}", length);
	
	println!("Rectangle width:{}", width);
	
	let (area, perimeter) = calculate_area_perimeter(length, width);
	
	println!("Area: {}, Perimeter: {}", area, perimeter);
}

// calculate area and perimeter

fn calculate_area_perimeter(x: i32, y: i32) -> (i32, i32) {
	// calculate the area and perimeter of rectangle
	
	let area = x * y;
	
	let perimeter = 2 * (x + y);
	
	// return the area and perimeter of rectangle
	
	(area, perimeter)
}
```