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
- Used to store data on the heap
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
- Relies on runtime borrow-checking, typically wrapped around an immutable reference such as Arc or Rc. Using refcell allows for interior mutability  
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
let data = Arc::new(0);

(0..10)
    .map(|_| {
        let data = data.clone(); // create new Arc for each thread
        thread::spawn(move || {
            println!("read only copy of data: {}", data);
        })
    })
    .for_each(|handle| { // wait for all threads to finish
        handle.join().unwrap();
    });

assert_eq!(*data, 0);
```
- The choice between using a `Mutex` or a `RefCell` (in combination with an `Arc`) depends on the specific requirements of your use case.

    - `Mutex` is a more suitable choice when you need to coordinate access to shared data between multiple threads, and want to ensure that only one thread can access the data at a time. `Mutex` provides a mechanism for synchronizing access to shared data, which is important to prevent data races and other synchronization issues.
    - `RefCell`, on the other hand, is better suited when you need to have shared, mutable data and want to handle potential concurrency issues in a more fine-grained manner. `RefCell` allows you to have shared ownership of data, but it only provides interior mutability. This means that you cannot share a mutable reference to the data with multiple threads, but you can safely modify the data within a single thread without locks or other synchronization mechanisms.

- In general, you should use a `Mutex` when you need to synchronize access to shared data between multiple threads, and use a `RefCell` in combination with an `Arc` when you need to have shared, mutable data and want to handle concurrency issues in a more fine-grained manner. The specific choice between the two will depend on the requirements of your use case and the trade-offs you are willing to make between concurrency and mutability.
## Mutex
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
        let data = data.clone(); // short for Arc::clone(&data)
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


