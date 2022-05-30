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