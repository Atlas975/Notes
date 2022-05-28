# Rust strings
- Strings in rust are not null terminated like other languages and can contain null characters as part of the string itself.
## String literals
- String literals (also known as string slices) have the following properties 
	-   Primitive type
	-   Immutable
	-   Fixed-length string stored somewhere in memory
	-   Value of string is known at compile time

>![[Pasted image 20220528133531.png]]
## String objects 
- Creating an actual mutable string object can be done in multiple ways
1. Converting a string literal into an object 

>![[Pasted image 20220528135446.png]]

2. Instantiate a string object 

>![[Pasted image 20220528135425.png]]

3. Create string object from empty string 

>![[Pasted image 20220528135041.png]]
# Rust string method
```
myWord.trim();  // remove whitespace 
myWord.capacity(); // prints number of bytes in a string
myWord.contains(subtr); // returns true if substring is in word
```