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
let mut b = Box::new(5); // Creating a Box that stores an integer
*b += 1; // Dereferencing the Box, changing the value it stores
let a = b; // Moving the Box, so that it's now owned by `a`
assert_eq!(*a, 6);
```



## RC
```rust
let a = Rc::new(String::from("hello")); // New string on the heap
let b = a.clone(); // New pointer to the same string on the heap
assert_eq!(a, b); // a and b both point to the same string on the heap
```
