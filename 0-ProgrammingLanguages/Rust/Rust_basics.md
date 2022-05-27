# Rust basics
## Constant declaration 
>![[Pasted image 20220524162757.png]]

## Mutable declaration 
>![[Pasted image 20220524162818.png]]

## Variable unpacking
>![[Pasted image 20220524162837.png]]
## Return
- Statements that dont end with a semicolon are treated as return in rust
## Shadowing 
- Variables are considered to be shadowing when a variable in a certain scope mirrors that of one in the outer scope, also known as masking.
>![[Pasted image 20220527021641.png]]
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


# Rust operators
>![[Pasted image 20220527021927.png]]
# Rust casting
>![[Pasted image 20220527022740.png]]
``` rust
fn main() {

	let a = 15;
	
	let b = (a as f64) / 2.0;
	
	println!("a: {}", a);
	
	println!("b: {}", b);

}
```

# Match statement 
>![[Pasted image 20220527144424.png]]

# Operation precedence 
>![[Pasted image 20220527123353.png]]