# Rust additional

## Shorthand if
>![[Pasted image 20220527143636.png]]
- Example 
```
let y: bool = if x == "Rust" { true } else { false };
```

fundamentals 

## if let 
>![[Pasted image 20220527144004.png]]
- Example 
```
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