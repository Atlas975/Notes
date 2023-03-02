> [!important|inIL]- Metadata
> **Tags:** #Programming 
> **Located:** SoftwareEngineering
> **Created:** 26/12/2022 - 09:24
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks)
>    .array().map(p => p.path);
>let paths = new Set(links.
>    filter(p => !p.endsWith(".png"))
>);
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(
>    Array.from(paths))
>    .map(p => [
>        dv.fileLink(p),
>        dv.page(p).file.tags.join("")
>    ])
>    .slice(0, 20)
>);
> ```

___
# Functional programming
- A programming paradigm that treats computation as mathematical expressions while avoiding state and mutable data.
- Pure functions, rejects [[OOP_principles]] such as shared state and mutable data
- Functional languages perform operations as if they're being performed for the first time (referential transparency )
- More emphasis on [[Recursion]] over iteration

![[Pasted image 20220711134148.png|550]]


## Lambdas 
-   Lambda expressions are anonymous functions that can be used to define functions inline.
-   Lambda expressions can be passed as arguments to other functions, returned as values from functions, and assigned to variables, allowing for greater flexibility and modularity in code.
```rust
let nums = vec![2, 3, 4];
let sq = |x| x * x;
let sq_nums = nums.iter().map(sq).collect::<Vec<_>>(); // [4, 9, 16]
```

## Closures 
-   Closures can capture variables from their surrounding environment, allowing them to maintain state and depend on context.
-   Closures can be used for techniques such as higher-order functions and currying.
-   Closures can be used for asynchronous programming, enabling efficient use of resources and concurrent or parallel code.
```rust
fn make_counter() -> impl FnMut() -> i32 {
    let mut cnt = 0;
    move || {
        cnt += 1;
        cnt
    }
}
let mut counter = make_counter();
counter(); // returns 1
counter(); // returns 2
counter(); // returns 3
```
## Function purity
- Function purity describes the potential side effects to executing a function, this is especially important in functional programming as functions can be passed as parameters (curried)
### Impure functions
- Impure functions mutate the external state of the program, for example modifying variables declared outside a function

```rust
fn impure_function(data: &mut Vec<i32>) {
    data.push(4);
}
let mut data = vec![1, 2, 3];
impure_function(&mut data);
````
### Pure functions
- Pure functions have no side effects on the external state of the program, all variables are declared within the function
-  This also ensures the function performs the same way each time it's called, irrespective of it's outer global scope

```rust
fn pure_function() -> Vec<i32> {
    let mut data = vec![1, 2, 3];
    data.push(4);
    data
}
````

- Advantages include better readability and code independence
- The external state can also be cloned into a pure function, retaining function purity
