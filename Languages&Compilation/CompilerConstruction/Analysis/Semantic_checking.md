> [!important]- Metadata
> **Tags:** #Languages 
> **Located:** Languages&Compilation
> **Created:** 02/05/2024 - 12:26
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Semantic checking

## Spectrum of type checking
- **No type checking**: no enforced type safety (eg [[x86_assembly|asm]]), flexible but high risk of runtime errors.
- **Weak type checking**: type system can be easily circumvented (eg treating chars as ints in [[C_language|C]])
- **Strong type checking**: strict type rules (eg type conversions being explicit in [[Rust_language|Rust]]), this  reduces the potential for runtime errors but can offer limited flexibility

![[Pasted image 20240502123201.png|450|450]]
## Type checking 
- **Static type checking**: done at compile time, checks for rule adherence before runtime
- **Dynamic type checking**: done at runtime, checks for rule adherence in runtime. Allows for more flexibility but can introduce overhead and potential runtime errors.

## Type equivalence
- **Name equivalence**: variables are of same type if their declared as such by name.
- **Structure equivalence**: variables are of same type if their underlying structure is the same 

```
type custom: array[100] 
```
