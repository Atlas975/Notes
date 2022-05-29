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
- Referencing a resource after its deallocation (also known as a dangling pointer)