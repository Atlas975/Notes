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

## Weak 
```rust
struct Node {
    value: i32,
    children: Vec<Weak<Node>>, // vector of weak references
}

let leaf = Rc::new(Node {
    value: 3,
    children: vec![],
});
let leaf2 = Rc::clone(&leaf); // create another reference to the same object

let branch = Rc::new(Node { // contains 2 weak references to leaf
    value: 5,
    children: vec![Rc::downgrade(&leaf), Rc::downgrade(&leaf2)],
});


let valid_children = |node: &Node| {
    node.children.iter().filter(|c| c.upgrade().is_some()).count()
}; // weakrefs must be upgraded to strongrefs to be used

assert_eq!(valid_children(&branch), 2);
drop(leaf);
drop(leaf2);
assert_eq!(valid_children(&branch), 0);

```