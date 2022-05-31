# Rust modules
- A collection of items that can contain structs, functions, enums, vectors, arrays etc
- Syntax:

>![[Pasted image 20220531095625.png]]
- Module keywords
	1. mod - declares a new Module 
	2. pub - makes a module public, these are private by default
	3. use - imports module in local scope

# Rust public scope  
- The public / private scope in rust follows a set of rules, these being
1. If an item is public it can be accessed from anywhere 
2. If an item is private it can only be accessed within the module
3. If an item is private  it can be called within the child module 
```rust 
// declare a module

mod r{

	fn my_private_function(){
	
		println!("Hi, I'm a private function within the module");
	
	}

	pub fn my_public_function(){
	
		//! also works without writing self i.e.
		
		//! my_private_function();
		
		println!("Hi,I'm a public function within the module");
		
		println!("I'll invoke private function within the module");
		
		self::my_private_function();
	
	}

}

// main function

fn main() {

	println!("Let's go inside the module");
	
	// invoke a module 'r'
	
	r::my_public_function();

}
```

- Functions that are one layer out of scope can be accessed using the super keyword:
``` rust
// main function

fn main() {

	println!("Let's go inside the module");
	
	outer_module::inner_module::my_public_function();

}

// declare a module

mod outer_module {

// function within outer module

	fn my_private_function() {
	
		println!("Hi, I got into the private function of outer module");
	
	}
	
	// declare a nested module
	
	pub mod inner_module {
	
	// function within nested module
	
		pub fn my_public_function() {
		
			println!("Hi, I got into the public function of inner module");
			
			println!("I'll invoke private function of outer module");
			
			super::my_private_function();
		
		}
	
	}

}
```

- Using mod for implicit declaration

>![[Pasted image 20220531102705.png]]

- The general format for accessing nested modules is:

>![[Pasted image 20220531121030.png]]

- This concept can also be used to shorten enum input 

```rust 
enum KnightMove{

	Horizontal,Vertical

}

  

use KnightMove::*; // use of globe operator

fn main() {

	// use enum
	
	let horizontal_move = Horizontal; // Horizontal is shortcut for KnightMove::Horizontal
	
	let vertical_move = Vertical; // Vertical is shortcut for KnightMove::Vertical
	
	// print the enum values
	
	println!("{:?}", horizontal_move);
	
	println!("{:?}", vertical_move);

}
```