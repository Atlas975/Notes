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



## Rc
```rust
let a = Rc::new(String::from("hello")); // New string on the heap
let b = a.clone(); // New pointer to the same string on the heap
assert_eq!(a, b); // a and b both point to the same string on the heap
```


## Refcell
```rust
struct Inner {
    data: Vec<i32>,
}

struct Outer {
    inner: RefCell<Inner>,
}

impl Outer {
    fn new(indata: Inner) -> Self {
        Outer {
            inner: RefCell::new(indata), // Creates RefCell to indata
        }
    }
}

let indata = Inner {
    data: vec![1, 2, 3, 4, 5, 6, 7, 8, 9],
};

assert_eq!(size_of_val(&indata), 24); // Inner is 24 bytes
let outer = Outer::new(indata);
let mut target = outer.inner.borrow_mut();
target.data.push(10);
assert_eq!(size_of_val(&target), 16); // RefCell<Inner> is 16 bytes
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


# Concurrency pointers

## Arc
```rust
let data = Arc::new(Mutex::new(0));

fn increment(i: usize, data: Arc<Mutex<i32>>) {
    for _ in 0..10 {
        let mut data = data.lock().unwrap(); // acquire the lock
        *data += 1; // deref mutex guard and modify the data
        println!("Thread {} Data: {}", i, *data);
    }
}

(0..10)
    .map(|i| {
        let data = Arc::clone(&data); // create a new reference to the data
        thread::spawn(move || {
            increment(i, data);
        })
    })
    .for_each(|handle| { // wait for all threads to finish
        handle.join().unwrap();
    });

let data = data.lock().unwrap();
assert_eq!(*data, 100);
```


