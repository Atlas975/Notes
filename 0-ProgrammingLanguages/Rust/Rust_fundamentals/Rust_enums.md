# Rust enums
- A custom data type composed of multiple variants (classes that are definite), can be thought of as a traffic light that can have only one possible output
- Syntax:

>![[Pasted image 20220529135450.png]] 
- Initializing an enum:

>![[Pasted image 20220529135558.png]]
- Example code:
```rust
// make this `enum` printable with `fmt::Debug`.

#[derive(Debug)]

enum KnightMove{
	Horizontal, Vertical
}

fn main() {

	// use enum
	
	let horizontal_move = KnightMove::Horizontal;
	
	let vertical_move = KnightMove::Vertical;
	
	// print the enum values
	
	println!("Move 1: {:?}", horizontal_move);
	
	println!("Move 2: {:?}", vertical_move);

}
```
```
Move 1: Horizontal Move 2: Vertical
```

## Enums with data type 
- Example enum of type string
```rust
// make this `enum` printable with `fmt::Debug`.

#[derive(Debug)]

enum KnightMove{

	Horizontal(String), Vertical(String)

}

fn main() {

	// invoke an enum
	
	let horizontal_move = KnightMove::Horizontal("Left".to_string());
	
	let vertical_move = KnightMove::Vertical("Down".to_string());
	
	// print enum
	
	println!("Move 1: {:?}", horizontal_move);
	
	println!("Movw 2: {:?}", vertical_move);

}
```

```
Move 1: Horizontal("Left") Movw 2: Vertical("Down")
```

# Enum specific methods
>![[Pasted image 20220529140415.png]]
- Example enum method:
```rust 
#![allow(dead_code)]

#[derive(Debug)]

// declare an enum

enum TrafficSignal{

Red, Green, Yellow

}

//implement a Traffic Signal methods

impl TrafficSignal{

	// if the signal is red then return
	
	fn is_stop(&self)->bool{
		
		match self{
		
			TrafficSignal::Red=>return true,
			
			_=>return false
		
		}
	
	}

}

fn main(){
	
	// define an enum instance
	
	let action = TrafficSignal::Red;
	
	//print the value of action
	
	println!("What is the signal value? - {:?}", action);
	
	//invoke the enum method 'is_stop' and print the value
	
	println!("Do we have to stop at signal? - {}", action.is_stop());

}
```

## Enum control flow
- Match statements can be used in enum methods to provide control flow

>![[Pasted image 20220529140839.png]]

```rust
enum KnightMove{

	Horizontal,Vertical

}

// print function

fn print_direction(direction:KnightMove) {

	// match statement
	
	match direction {
		
		//execute if knight move is horizontal
		
		KnightMove::Horizontal => {
		
			println!("Move in horizontal direction");
	
		},
	
		//execute if knight move is vertical
	
		KnightMove::Vertical => {
	
			println!("Move in vertical direction");
		}

	}

}

fn main() {

	// invoke function `print_direction`
	
	let knight1 = KnightMove::Horizontal;
	
	let knight2 = KnightMove::Vertical;
	
	print_direction(knight1);
	
	print_direction(knight2);

}
```
```
Move in horizontal direction 
Move in vertical direction
```

# Enums with structs 
```rust
// make this `enum` printable with `fmt::Debug`.

#[derive(Debug)]

//define an enum

enum KnightMove{

	Horizontal, Vertical

}

#[derive(Debug)]

// make this `struct` print values of type `enum` with `fmt::Debug`.

struct Player {
	
	color:String,
	
	knight:KnightMove

}

fn main() {

	// instance 1
		
	let p1 = Player{
		
		color:String::from("black"),
		
		knight:KnightMove::Horizontal

	};

	// instance 2
	
	let p2 = Player{
	
		color:String::from("white"),
		
		knight:KnightMove::Vertical
	
	};

	println!("{:?}", p1);
	
	println!("{:?}", p2);

}
```
```
Player { color: "black", knight: Horizontal } Player { color: "white", knight: Vertical }
```

# Enum options 
- A built in enum type, consists of variants some and none, these are useful when a return value is none , a variable value is optional or an out of bounds exception needs to be displayed.
- Some(T) returns a value T, None returns no value

>![[Pasted image 20220529142438.png]]
- Example return value is none 
```rust
fn main() {

	println!("{:?}", learn_lang("Rust"));
	
	println!("{:?}", learn_lang("Python"));

}

fn learn_lang(my_lang:&str)-> Option<bool> {
	
	if my_lang == "Rust" {
		
		Some(true)
		
		} else {
		
		None
	
	}

}
```
```
Some(true) 
None
```

- Being use of sep
```rust
//declare a struct

struct Course {

	code:i32,
	
	name:String,
	
	level: Option<String>,

}

fn main() {

	//initialize
	
	let course1 = Course {
	
	name:String::from("Rust"),
	
	level:Some(String::from("beginner")),
	
	code:130

};

let course2 = Course {

	name:String::from("Javascript"),
	
	level:None,
	
	code:122

};

//access

println!("Name:{}, Level:{} ,code: {}", course1.name, course1.level.unwrap_or("Level".to_string()), course1.code);

println!("Name:{}, Level:{} ,code: {}", course2.name, course2.level.unwrap_or("No level defined!".to_string()), course2.code);

}
```
```
Name:Rust, Level:beginner ,code: 130 
Name:Javascript, Level:No level defined! ,code: 122
```