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

> ![[Pasted image 20220711134148.png|550]]

# Function terminology

- **Function:** A function that's named or anonymous  
- **Lambda:** An anonmous (unnamed) function, typically used as an inline function with a shred stack frame with its outer function
- **Closure:** A functional programming technique that allows variables outside of the scope of a function to be accessed, typically used when a function is defined inside another function (chaining)

# Function purity
- Function purity describes the potential side effects to executing a function, this is especially important in functional programming as functions can be passed as parameters (curried)
## Impure functions
- Impure functions mutate the external state of the program, for example modifying variables declared outside a function

````ad-example
```python
data = [1, 2]
def update_data(value):
    data.append(value)
    return data
````
## Pure functions
- Pure functions have no side effects on the external state of the program, all variables are declared within the function, this also ensures the function performs the same way each time it's called with specific arguments

````ad-example
```js
def update_data(value):
    data = [1, 2]
    data.append(value)
    return data
````

- Advantages include better readability and code independence
- The external state can also be cloned into a pure function, retaining function purity
