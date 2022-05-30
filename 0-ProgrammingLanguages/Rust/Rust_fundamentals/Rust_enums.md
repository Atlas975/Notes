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

- Example use of None return 
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

- Custom options message
```rust
fn main() {
	
	// define a variable
	
	let str = String :: from("Educative");
	
	// define the index value to be found
	
	let index = 12;
	
	lookup(str, index);
	
	lookup("edu".to_string(),2);

}

fn lookup(str: String, index: usize) {

	let matched_index = match str.chars().nth(index){
	
		// execute if match found print the value at specified index
		
		Some(c)=>format!("{} {}","Character is: ",c),
		
		// execute if value not found
		
		None=>"No character at given index".to_string()
	
	};
	
	println!("{}", matched_index);

}
```
```
No character at given index 
Character is: u
```
- Rust also features built in methods to check if return type is set to some or none 

>is_some()
>is_none()
```rust
fn print(my_val: Option<&str>){
	if my_val.is_some(){ // check if the value is equal to some value
	
		println!("my_val is equal to some value");
	
	}

	else{
	
		println!("my_val is equal to none");
	
	}
}
```

# Enum result 
- Instead of some or none , enum results return success or error statements 

>![[Pasted image 20220530165056.png]] 
>![[Pasted image 20220530165157.png]]
- Standard example:
```rust
fn main() {

	println!("{:?}", divisible_by_3(6)); // invoke function by passing a number 6
	
	println!("{:?}", divisible_by_3(2)); // invoke function by passing a number 2

}

fn divisible_by_3(i:i32)->Result<String,String> {

	if i % 3 == 0 { // if number mod 3 equals 0
	
		Ok("Given number is divisible by 3".to_string()) // return this statement
	
	} else { // if if number mod 3 is not equals 0
	
		Err("Given number is not divisible by 3".to_string()) // return this statement
	
	}

}
```
```
Ok("Given number is divisible by 3") 
Err("Given number is not divisible by 3")
```