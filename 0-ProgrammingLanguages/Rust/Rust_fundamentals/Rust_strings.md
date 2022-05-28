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
myWord.replace(substrOld,substrrNew);
```

# Rust pushing new characters
```
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