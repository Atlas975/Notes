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

# Rust string method
```
myWord.trim();  // remove whitespace 
```