# Rust methods
[[Rust_structs]]
- Methods encapsulate functions specifically made for a given struct 
- Created using the following blueprint:

>![[Pasted image 20220528194541.png]]
- Invoking a method 

>![[Pasted image 20220528194854.png]]

- Example method use:
```rust 
//declare a struct

struct Course {

	name: String,
	
	level: String,
	
	code:i32

}

//impl construct to define struct methods

impl Course {

	fn name_code(&self) -> String {
	
		format!("{} {}", self.name, self.code)
	
	}

}

  

fn main() {

	let course_1 = Course {

	name: "Rust".to_string(),
	
	level:"beginner".to_string(),
	
	code:132

	};

	//call the non-static method

	println!("This is a {} course: {}", course_1.level, 
    course_1.name_code());
}
```

```
This is a beginner course: Rust 132
```

# Static methods 
- Static methods in rust can be invoked without instantiating a struct
- Template:

 >![[Pasted image 20220528195514.png]]
 a non-static method must still be decalared 

- Static method examples:
```rust
// declare a struct

struct Course {

	name: String,
	
	level:String,
	
	code: i32,

}

impl Course {

// static method

	fn my_static_method(n: String, l: String, c:i32) -> Course {
		Course {
			name: n,
			
			level:l,
			
			code:c
		}
	}

//display

	fn display(&self){

	println!("name :{} code:{} of type: {}", self.name, self.code, self.level );

	}

}

fn main(){

	// call the static method
	
	let c1 = Course::my_static_method("Rust".to_string(), "beginner".to_string(), 132);
	
	c1.display();

}
```
