> [!important]- Metadata
> **Tags:** #Programming 
> **Located:** ProgramLanguages/Rust
> **Created:** 26/12/2022 - 03:55
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# Rust smart pointers
- [[Rust_language|Rust]] smart pointers act as a way for memory to be stored on the heap while still offering automatic memory deallocation
- Memory does not have to manually be allocated and deallocated with smart pointers, different smart pointers exist to solve distinct [[Computer_memory|memory management problems]]

## Box
```rust
let b = Box::new(5); // Box that stores an integer

#[derive(Debug)] 
struct Person {
    name: String,
    age: u32,
}

let person = Box::new(Person { // Box that stores a ADT on the heap
    name: String::from("John"),
    age: 30,
});

println!("Person {:?} is stored on the heap.", person);
```



## RC
```rust
use std::rc::Rc;

let a = Rc::new(String::from("hello"));
let b = a.clone();

println!("a and b both point to '{}'", a);
```
