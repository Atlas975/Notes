# Rust loop constant
```
break; //exit a loop
continue; // skips to next iteration
```


# Rust for loops
>![[Pasted image 20220527164537.png]]
- Example:
```
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
```
while !found {
	print!("run");
}
```



# Rust loop labels
- Assigns an identifier to a loop to allow it to be modified individually
>![[Pasted image 20220527170021.png]]
- Example:
```
'outer:for i in 1..5 { //outer loop

	println!("Muliplication Table : {}", i);
	
	'inner:for j in 1..5 { // inner loop
	
		if i == 3 { continue 'outer; } //Continues loop over `i`.
		
		if j == 2 { continue 'inner; } //Continues loop over `j`.
		
		println!("{} * {} = {}", i, j, i * j);
	
	}

}
```