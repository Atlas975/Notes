# Rust memory management
## Memory stack
- When the size of data is known during compile time, this data is stored in a stack
- All primitive data types of fixed size fall under this category 
## Memory heap
- When the size of data is unknown during compile time, a heap is used
- The heap acts as a data storage allocated by the operating system, its marked as in use and a pointer is returned to access starting address locations
- Dynamic data such as vectors and strings fall under this category
- For a string, three details are stored, a memory pointer, length and capacity

>![[Pasted image 20220529150648.png]]

# Rust ownership
- Ownership only exists in scope and each variable has a binding known as its owner, only one owner of a variable can exist at a time
## Copy type 
- Primitive types are handled as copy types, meaning ownership does not change instead a copy is created which both variables hold separately

>![[Pasted image 20220529151633.png]]

## Moved type
- Vectors and strings are of moved type, when assigned to another variable, ownership changes and the previous variable becomes invalid 
- Note this also applies when data is passed to a function

>![[Pasted image 20220529152530.png]]
- To create a copy instead of transferring ownership, the copy() function can be used

## Rules of [[Rust_borrowing]] 
1. There can be either one mutable borrow or any number of immutable borrows within the same scope 
2. References must always be valids


# Rust lifetimes
- Lifetimes describe the scope that a reference is valid for, referencing a resource after its deallocation (also known as a dangling pointer) results in an error 
- Lifetime annotations exist to help with this

>![[Pasted image 20220529194658.png]]
- Example usage 
```rust
struct Course{
	name: String,
	id : i32,
}

fn get_course<'a> (c1: &'a Course, c2: &'a Course) -> &'a Course {
	if c1.name == "Rust" {
		c1
	}
	else {
		c2
	}
}

fn main(){
	let c1: Course = Course {
		name : String::from("Rust"),
		id:101,
	};
	
	let c2: Course = Course {
		name : String::from("C++"),
		id:101,
	};
	
	get_course(&c1, &c2);
}
```