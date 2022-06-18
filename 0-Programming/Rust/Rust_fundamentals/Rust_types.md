# Rust types 
## Integer types 
>![[Pasted image 20220524150808.png]]

## Floating point types
>![[Pasted image 20220524150933.png]]

## Boolean type 
- Can be defined as
```
let is_bool:bool = true;
```
- Can also result from a logical expression
```
let c = 10 > 2;
```

## Char type 
- Can be defined as 
```
let letter:char = 'e'
```

## String type 
- Can be defined as
```
let str_1:&str = "Rust Programming";
```

# Rust arrays 
>![[Pasted image 20220524154627.png]]

## Array slicing 
```
fn main() {

//define an array of size 4

let arr:[i32;4] = [1, 2, 3, 4];

//define the slice

let slice_array1:&[i32] = &arr;

let slice_array2:&[i32] = &arr[0..2];

// print the slice of an array

println!("Slice of an array: {:?}", slice_array1);

println!("Slice of an array: {:?}", slice_array2);

}
```

```
Slice of an array: [1, 2, 3, 4] Slice of an array: [1, 2]
```