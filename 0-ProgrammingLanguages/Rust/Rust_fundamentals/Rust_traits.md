# Rust traits 
- Used to define a standard set of behaviors that exist in multiple structs 

>![[Pasted image 20220530174306.png]]

## Types of traits 
- Concrete method: a method with only a body meaning its implementation is done within the method
- Abstract method: a method with no body meaning the method is done by its structs in the impl construct 

>![[Pasted image 20220530174658.png]]

- Traits can be implemented for any structure 

>![[Pasted image 20220530174758.png]]
- Example trait use 

```rust 
fn main(){
	
	//create an instance of the structure
	
	let c = Circle {
	
	radius : 2.0,
	
	};
	
	let r = Rectangle {
	
		width : 2.0,
		
		height : 2.0,
	
	};
	
	println!("Area of Circle: {}", c.shape_area());
	
	println!("Area of Rectangle:{}", r.shape_area());

}

//declare a structure

struct Circle {

	radius : f32,

}

struct Rectangle{

	width : f32,
	
	height : f32,

}

//declare a trait

trait Area {

	fn shape_area(&self)->f32;

}

//implement the trait

impl Area for Circle {

	fn shape_area(&self)->f32{
	
		3.13 * self.radius * self.radius
	
	}

}

impl Area for Rectangle {
	
	fn shape_area(&self)->f32{
	
		self.width * self.height
	
	}
}
```

# Trait generics 
- Generics allow for a data type to be inferred at run time by the compiler, this 

>![[Pasted image 20220530175715.png]]
- Example generic function
```rust
fn main(){

	println!("- Passing a string literal");
	
	concatenate(" Rust ", " Programming ");
	
	println!("- Passing an integer");
	
	concatenate(10 as i32, 1 as i32);

}

use std::fmt::Display;

fn concatenate<T:Display>(t:T, s:T){

	let result = format!("{}{}", t , s);
	
	println!("{}", result);

}
```
```
- Passing a string literal 
Rust Programming 
- Passing an integer 
101
```
- The same can be done for data types such as vectors, structs and enums, arrays however need a datatype specified