# Rust constants 
- Constants in rust are immutable, require a data type and can be used in global scope rather than just local, like C all letters in a const are conventionally uppercase

>![[Pasted image 20220527015904.png]]
```rust 
const ID_1: i32 = 4; // define a global constant variable

fn main() {

const ID_2: u32 = 3; // define a local constant variable

println!("ID:{}", ID_1); // print the global constant variable

println!("ID:{}", ID_2); // print the local constant variable

}
```

