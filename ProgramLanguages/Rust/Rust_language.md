# Rust_language
created: 2022-06-23 07:49
#Programming 

---
## Constant declaration
> ![[Pasted image 20220524162757.png]]
## Mutable declaration
> ![[Pasted image 20220524162818.png]]
## Variable unpacking
> ![[Pasted image 20220524162837.png]]

## Return
- Statements that dont end with a semicolon are treated as return in rust
## Shadowing
- Variables are considered to be shadowing when a variable in a certain scope mirrors that of one in the outer scope, also known as masking.

> ![[Pasted image 20220527021641.png]]

```rust
fn main() {

let outer_variable = 112;

{ // start of code block

	let inner_variable = 213;

	println!("block variable: {}", inner_variable);
	
	let outer_variable = 117;
	
	println!("block variable outer: {}", outer_variable);

} // end of code block

println!("outer variable: {}", outer_variable);

}
```

```
block variable: 213 
block variable outer: 117
outer variable: 112
```
# Rust macros
## Print macro
> ![[Pasted image 20220524160710.png]]
# Rust types
## Integer types
> ![[Pasted image 20220524150808.png]]
## Floating point types
> ![[Pasted image 20220524150933.png]]
## Boolean type
- Can be defined as

```
let is_bool:bool = true;
```

- Can also result from a logical expression

```
let c = 10 > 2;
```
## Char type
- Can be defined as

```
let letter:char = 'e'
```
## String type
- Can be defined as

```
let str_1:&str = "Rust Programming";
```
# Rust arrays
> ![[Pasted image 20220524154627.png]]
## Array slicing
```rust
fn main() {

//define an array of size 4

let arr:[i32;4] = [1, 2, 3, 4];

//define the slice

let slice_array1:&[i32] = &arr;

let slice_array2:&[i32] = &arr[0..2];

// print the slice of an array

println!("Slice of an array: {:?}", slice_array1);

println!("Slice of an array: {:?}", slice_array2);

}
```

```
Slice of an array: [1, 2, 3, 4] Slice of an array: [1, 2]
```
# Rust loop constant
```rust
break; //exit a loop
continue; // skips to next iteration
```
# Rust for loops
> ![[Pasted image 20220527164537.png]]

- Example:

```rust
for (count, variable) in (7..10).enumerate() {

	println!("count = {}, variable = {}", count, variable);

}
```

```
count = 0, variable = 7 
count = 1, variable = 8 
count = 2, variable = 9
```
# Rust while loops
- While loops are more typical of other languages

```rust
while !found {
	print!("run");
}
```
# Rust loop labels
- Assigns an identifier to a loop to allow it to be modified individually

> ![[Pasted image 20220527170021.png]]

- Example:

```rust
'outer:for i in 1..5 { //outer loop

	println!("Muliplication Table : {}", i);
	
	'inner:for j in 1..5 { // inner loop
	
		if i == 3 { continue 'outer; } //Continues loop over `i`.
		
		if j == 2 { continue 'inner; } //Continues loop over `j`.
		
		println!("{} * {} = {}", i, j, i * j);
	
	}

}
```
# Rust functions pass by reference
> ![[Pasted image 20220527204834.png]]

- Example of changing values through pass by reference

```rust
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

> ![[Pasted image 20220527205746.png]]
> ![[Pasted image 20220527205913.png]]

- Unlike other languages, the return value in rust can be handled in two ways

```
return value;  // clear and like other langauges

value // alternative, not placing a semicolon returns the value
```
# Rust return multiple values
- Like python, rust can also return tuples which can be handled through unpacking

> ![[Pasted image 20220527210543.png]]

- Example usage:

```rust
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
# Rust operators
> ![[Pasted image 20220527021927.png]]
# Rust casting
> ![[Pasted image 20220527022740.png]]

```rust
fn main() {

	let a = 15;
	
	let b = (a as f64) / 2.0;
	
	println!("a: {}", a);
	
	println!("b: {}", b);

}
```
# Match statement (case statements)
> ![[Pasted image 20220527144424.png]]
# Operation precedence
> ![[Pasted image 20220527123353.png]]
# Rust borrowing
- The equivalent of pointers in C
- The two main kinds of borrowing include

1. Shared borrowing, shared by single or multiple variables, but **no altering**
2. Mutable borrowing, shared by single variable but data cannot be accessed by other variables

> ![[Pasted image 20220527074834.png]]
> ![[Pasted image 20220527074911.png]]

- Example code of both borrowing methods

```rust
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

> ![[Pasted image 20220527081553.png]]
> ![[Pasted image 20220527082056.png]]
> ![[Pasted image 20220527082116.png]]

```rust
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
# Rust memory management
## Memory stack
- When the size of data is known during compile time, this data is stored in a stack
- All primitive data types of fixed size fall under this category
## Memory heap
- When the size of data is unknown during compile time, a heap is used
- The heap acts as a data storage allocated by the operating system, its marked as in use and a pointer is returned to access starting address locations
- Dynamic data such as vectors and strings fall under this category
- For a string, three details are stored, a memory pointer, length and capacity

> ![[Pasted image 20220529150648.png]]
# Rust ownership
- Ownership only exists in scope and each variable has a binding known as its owner, only one owner of a variable can exist at a time
## Copy type
- Primitive types are handled as copy types, meaning ownership does not change instead a copy is created which both variables hold separately

> ![[Pasted image 20220529151633.png]]
## Moved type
- Vectors and strings are of moved type, when assigned to another variable, ownership changes and the previous variable becomes invalid
- Note this also applies when data is passed to a function

> ![[Pasted image 20220529152530.png]]

- To create a copy instead of transferring ownership, the copy() function can be used
## Rules of rust borrowing
1. There can be either one mutable borrow or any number of immutable borrows within the same scope
2. References must always be valid
# Rust lifetimes
- Lifetimes describe the scope that a reference is valid for, referencing a resource after its deallocation (also known as a dangling pointer) results in an error preventing compilation
- Lifetime annotations exist to help prevent this by explicitly marking the lifetimes of a variable

> ![[Pasted image 20220529194658.png]]

- Example usage, establishes a relationship between x, y and the return value. This being that the lifetime of the returned reference will be the same as the smallest lifetime of its arguments

```rust
fn longest<'a>(x: & `a str, y: &'a str)-> &'a str{
	if x.len()>y.len(){
		x
	} else{
		y
	}
}
```

- Example with no lifetime dependency on y

```rust
fn longest<'a>(x: &a' str, y: &str)-> &'a str{
	x
}
```

- Example with multiple lifetimes

```rust
fn fun_name<'a , 'b>(x: & 'a i32 , y: & 'b i32) 
```
## Lifetime elison
- Describes the rules that code needs to follow in order to ommit the lifetime marker , some of these incldue

> ![[Pasted image 20220530154301.png]]
# Rust strings
- Strings in rust are not null terminated like other languages and can contain null characters as part of the string itself.
## String literals
- String literals (also known as string slices) have the following properties
  - Primitive type
  - Immutable
  - Fixed-length string stored somewhere in memory
  - Value of string is known at compile time

> ![[Pasted image 20220528133531.png]]
## String objects
- Creating an actual mutable string object can be done in multiple ways

1. Converting a string literal into an object

> ![[Pasted image 20220528135446.png]]

2. Instantiate a string object

> ![[Pasted image 20220528135425.png]]

3. Create string object from empty string

> ![[Pasted image 20220528135041.png]]
# Rust string method
```rust
myWord.trim();  // remove whitespace 
myWord.capacity(); // prints number of bytes in a string
myWord.contains(subtr); // returns true if substring is in word
myWord.replace(substrOld,substrrNew);
```
# Rust pushing new characters
```rust
// define a String object

let mut course = String::from("Rus");

// push a character

course.push('t');

println!("This is a beginner course in {}.", course);

course.push_str(" Programming");

println!("This is a beginner course in {}.", course);
```

```
This is a beginner course in Rust.
This is a beginner course in Rust Programming.
```
# Rust iterating over strings
- Prints each word in the string

```rust
// define a String object

let str = String::from("Rust Programming");

// split on whitespace

for token in str.split_whitespace(){

println!("{}", token);

}
```

- Splits can also be done on a character other than whitespace

```rust
for token in str.split(","){

	println!("{}", token);

}
```

- Print each character in a string

```rust
for found in str.chars(){
	println!("{}", found);
}
```
# Rust concatenating
- Concatenating two string variables can be done through the use of string literals

```rust
// define a String object

let course = "Rust".to_string();

// define a String object

let course_type = " beginner course".to_string();

// concatenate using the + operator

let result = course + &course_type;

println!("{}", result);
```

```
Rust beginner course
```

- This can also be done with the format! macro

```rust
let course = "Rust".to_string();

let _course_type = "beginner course".to_string();

// default format macro

let result = format!("{} {}", course, _course_type);

// passing value in the placeholder in the format macro

let result = format!("{1} {0}", course,_course_type);

println!("{}", result);
```

```
beginner course Rust
```
# String slicing
- General string slicing is done by

```rust
let slice = &string[start_index..end_index]
```
# Placeholders
## Standard placeholder
```rust
fn main() {

println!("{} is a {} company", "Educative", "Software");

}
```
## Positional placeholder
```rust
fn main() {

println!("Enhance your coding skills from {0} courses. {0} courses are very {1}", "Educative", "interactive");

}
```
## Named placeholder
```rust
fn main() {

println!("{company} provides {kind} courses", company = "Educative", kind = "interactive");

}
```
## binary / hex / octal placeholder
```rust
fn main() {

println!("Number : 10 \nBinary:{:b} Hexadecimal:{:x} Octal:{:o}", 10, 10, 10);

}
```
## Array printing
```rust
println!("Array: {:?}", arr);
```
# Rust tuples
- Tuples are heterogeneous but of fixed length like arrays
- These can also be declared with or without a type

> ![[Pasted image 20220524163110.png]]
> ![[Pasted image 20220524163124.png]]
## Pattern matching
- Can be used to retrieve individual elements from a tuples

```rust
let person_data = ("Alex", 48, "35kg", "6ft");
let (w, x, y, z) = person_data;
```
## Mutable tuple
```rust
let mut person_data = ("Alex", 48, "35kg", "6ft");

//print the value of tuple

println!("The value of the tuple at index 0 and index 1 are {} {}", person_data.0, person_data.1);

//modify the value at index 0

person_data.0 = "John";

//print the modified value

println!("The value of the tuple at index 0 and index 1 are {} {}", person_data.0, person_data.1);
```
# Rust structs
- Similar to tuples, allow for elements of different types be grouped up together, structs are created using the following blueprint

> ![[Pasted image 20220528193059.png]]

note pascal case for struct name

- To initialize a new struct based variable:

> ![[Pasted image 20220528193257.png]]

- Accessing individual elements in a struct

> ![[Pasted image 20220528193609.png]]
# Structs with functions
> ![[Pasted image 20220528193937.png]]
## Return a struct
> ![[Pasted image 20220528194055.png]]
# Rust vectors
- Equivalent to dynamic arrays

> ![[Pasted image 20220528160011.png]]

- Syntax:

> ![[Pasted image 20220528160232.png]]
> ![[Pasted image 20220528160220.png]]

- Out of bounds can be directly handled through methods through match statements

```rust
let my_vec = vec![1, 2, 3,4,5];

match my_vec.get(9) {
	
	Some(x) => println!("Value at given index:{}", x),
	
	None => println!("Sorry, you are accessing a value out of bound")

}
```
## Search and remove
- To remove a specific element, its index is first needed before calling the remove() function

```rust
// defines a mutable vector

let mut my_vec = vec![1, 2, 3, 4, 5];

// define the value to be removed

let value = 2;

// get the index of the value in the vector

let index = my_vec.iter().position(|&r| r == value).unwrap();

// call the built-in remove method

my_vec.remove(index);

// print the updated vector

println!("Updated Vector: {:?}", my_vec);

let index = my_vec.iter().position(|&r| r == 3).unwrap();

print!("{:?}",index);
```

```
Updated Vector: [1, 3, 4, 5] 
1
```
# Rust vector methods
> ![[Pasted image 20220528160639.png]]
# Iterating over vectors
```rust
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
## Mutable iteration over vectors
- A separate function exists to modify elements in a vector over iteration

```rust
let mut my_vec = vec![1, 2, 3, 4, 5];

println!("Initial Vector : {:?}", my_vec);

for x in my_vec.iter_mut(){

	*x *= 3;

}

// print the updated vector

println!("Updated Vector : {:?}", my_vec);
```

```
Initial Vector : [1, 2, 3, 4, 5] 
Updated Vector : [3, 6, 9, 12, 15]
```
# Borrowing vector slices
> ![[Pasted image 20220528184339.png]]


```rust
// define a vector of size 5

let my_vec = vec![1, 2, 3, 4, 5];

let slice:&[i32] = &my_vec[2..4];

// print the vector

println!("Slice of the vector : {:?}",slice);
```

```
Slice of the vector : [3, 4]
```
# Tuple structs
- Hybrids between tuples and structs

> ![[Pasted image 20220528201802.png]]

- Tuple structs core blueprint:

> ![[Pasted image 20220528201927.png]]

- Example code:

```rust
//define a tuple struct

struct FruitQuantity(String, i32);


fn main() {

	// create an instance
	
	let r1 = FruitQuantity("oranges".to_string(), 12);
	
	// access values of a tuple struct
	
	println!("r1--name:{} quantity:{}", r1.0, r1.1);
	
	// create an instance
	
	let r2 = FruitQuantity("mangoes".to_string(), 13);
	
	// access values of a tuple struct
	
	println!("r2--name:{} quantity:{}", r2.0, r2.1);

}
```

```
r1--name:oranges quantity:12 r2--name:mangoes quantity:13
```
# Rust methods
- Methods encapsulate functions specifically made for a given struct
- Created using the following blueprint:

> ![[Pasted image 20220528194541.png]]

- Invoking a method

> ![[Pasted image 20220528194854.png]]

- Example method use:

```rust
//declare a struct

struct Course {

	name: String,
	
	level: String,
	
	code:i32

}

//impl construct to define struct methods

impl Course {

	fn name_code(&self) -> String {
	
		format!("{} {}", self.name, self.code)
	
	}

}

  

fn main() {

	let course_1 = Course {

	name: "Rust".to_string(),
	
	level:"beginner".to_string(),
	
	code:132

	};

	//call the non-static method

	println!("This is a {} course: {}", course_1.level, 
    course_1.name_code());
}
```

```
This is a beginner course: Rust 132
```
# Static methods
- Static methods in rust can be invoked without instantiating a struct
- Template:

> ![[Pasted image 20220528195514.png]]

a non-static method must still be decalared

- Invoking a static method:

> ![[Pasted image 20220528201425.png]]

- Static method examples:

```rust
// declare a struct

struct Course {

	name: String,
	
	level:String,
	
	code: i32,

}

impl Course {

// static method

	fn my_static_method(n: String, l: String, c:i32) -> Course {
		Course {
			name: n,
			
			level:l,
			
			code:c
		}
	}

//display

	fn display(&self){

	println!("name :{} code:{} of type: {}", self.name, self.code, self.level );

	}

}

fn main(){

	// call the static method
	
	let c1 = Course::my_static_method("Rust".to_string(), "beginner".to_string(), 132);
	
	c1.display();

}
```
# Rust modules
- A collection of items that can contain structs, functions, enums, vectors, arrays etc
- Syntax:

> ![[Pasted image 20220531095625.png]]

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

```rust
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

> ![[Pasted image 20220531102705.png]]

- The general format for accessing nested modules is:

> ![[Pasted image 20220531121030.png]]

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
# Rust traits
- Used to define a standard set of behaviors that exist in multiple structs

> ![[Pasted image 20220530174306.png]]
## Types of traits
- Concrete method: a method with only a body meaning its implementation is done within the method
- Abstract method: a method with no body meaning the method is done by its structs in the impl construct

> ![[Pasted image 20220530174658.png]]

- Traits can be implemented for any structure

> ![[Pasted image 20220530174758.png]]

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

> ![[Pasted image 20220530175715.png]]

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
# Rust enums
- A custom data type composed of multiple variants (classes that are definite), can be thought of as a traffic light that can have only one possible output
- Syntax:

> ![[Pasted image 20220529135450.png]]

- Initializing an enum:

> ![[Pasted image 20220529135558.png]]

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
> ![[Pasted image 20220529140415.png]]

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

> ![[Pasted image 20220529140839.png]]

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

> ![[Pasted image 20220529142438.png]]

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

> is_some()
> is_none()

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

> ![[Pasted image 20220530165056.png]]
> ![[Pasted image 20220530165157.png]]

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

- Usage with is_error()

```rust
fn main() {

	let check1 = divisible_by_3(6);
	
	if check1.is_ok(){ // check if the function returns ok
		println!("The number is divisible by 3");
	}
	
	else{
		println!("The number is not divisible by 3");
	}
	
	let check2 = divisible_by_3(2);
	
	if check2.is_err(){ // check if the function returns error
		println!("The number is not divisible by 3");
	}
	
	else{
		println!("The number is divisible by 3");
	}

}

fn divisible_by_3(i:i32)->Result<String,String> {

	if i % 3 == 0 { // check i modulus 3
	
		Ok("Given number is divisible by 3".to_string())
	
	} else {
	
		Err("Given number is not divisible by 3".to_string())
	
	}

}
```
# Rust constants
- Constants in rust are immutable, require a data type and can be used in global scope rather than just local, like C all letters in a const are conventionally uppercase

> ![[Pasted image 20220527015904.png]]

```rust
const ID_1: i32 = 4; // define a global constant variable

fn main() {

const ID_2: u32 = 3; // define a local constant variable

println!("ID:{}", ID_1); // print the global constant variable

println!("ID:{}", ID_2); // print the local constant variable

}
```
# Assertions
- Assertions are run regardless of if there's an error but if active they terminate the program immediatlly

```
assert!(n != 0 && m != 0);
```

- To skip assertions when the program is compiled for the sake of speed use:

```
debug_assert!();
```
# Rust additional
## Shorthand if
> ![[Pasted image 20220527143636.png]]

- Example

```
let y: bool = if x == "Rust" { true } else { false };
```

fundamentals
## if let
> ![[Pasted image 20220527144004.png]]

- Example

```rust
// define a scrutinee expression

let course = ("Rust", "beginner","course");

// pattern matches with the scrutinee expression

if let ("Rust", "beginner","course") = course {

println!("Wrote all values in pattern to be matched with the scrutinee expression");

} else {

// do not execute this block

println!("Value unmatched");

}
```


# Rust functional programming 
[[Functional_programming]]

## Partial 
```ad-example
```rust
fn add(a: u32, b: u32) -> u32 {
    a + b
}

let add5 = move |x| add(5, x);
```

## Reduce 
```ad-example
```rust
vec![1, 2, 3].into_iter().fold(0, |acc, x| acc + x); // return 6
```
