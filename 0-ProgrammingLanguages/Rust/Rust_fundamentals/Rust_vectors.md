# Rust vectors 
- Equivalent to dynamic arrays

>![[Pasted image 20220528160011.png]]

- Syntax:

>![[Pasted image 20220528160232.png]]
>![[Pasted image 20220528160220.png]]

- Out of bounds can be directly handled through methods through match statements
``` rust
let my_vec = vec![1, 2, 3,4,5];

match my_vec.get(9) {
	
	Some(x) => println!("Value at given index:{}", x),
	
	None => println!("Sorry, you are accessing a value out of bound")

}
```

## Search and remove 
- To remove a specific element, its index is first needed before calling the remove() function
```rust
// defines a mutable vector

let mut my_vec = vec![1, 2, 3, 4, 5];

// define the value to be removed

let value = 2;

// get the index of the value in the vector

let index = my_vec.iter().position(|&r| r == value).unwrap();

// call the built-in remove method

my_vec.remove(index);

// print the updated vector

println!("Updated Vector: {:?}", my_vec);

let index = my_vec.iter().position(|&r| r == 3).unwrap();

print!("{:?}",index);
```
```
Updated Vector: [1, 3, 4, 5] 
1
```

# Rust vector methods 
>![[Pasted image 20220528160639.png]]


# Iterating over vectors 
```rust
// define a vector of size 5

let my_vec = vec![1, 2, 3];

// using loop

let mut index = 0;

for i in my_vec.iter(){ // it works even if .iter() is not written

	println!("Element at index {}:{} ", index, i);
	index = index + 1;
	
}
```
```
Element at index 0:1 
Element at index 1:2 
Element at index 2:3
```

## Mutable iteration over vectors 
- A separate function exists to modify elements in a vector over iteration 
```rust 
let mut my_vec = vec![1, 2, 3, 4, 5];

println!("Initial Vector : {:?}", my_vec);

for x in my_vec.iter_mut(){

	*x *= 3;

}

// print the updated vector

println!("Updated Vector : {:?}", my_vec);
```
```
Initial Vector : [1, 2, 3, 4, 5] 
Updated Vector : [3, 6, 9, 12, 15]
```

# Borrowing vector slices
>![[Pasted image 20220528184339.png]]
``` rust
// define a vector of size 5

let my_vec = vec![1, 2, 3, 4, 5];

let slice:&[i32] = &my_vec[2..4];

// print the vector

println!("Slice of the vector : {:?}",slice);
```
```
Slice of the vector : [3, 4]
```