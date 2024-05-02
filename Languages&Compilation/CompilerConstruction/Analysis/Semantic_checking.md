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
- A phase in the [[Compilers|compilation]] process where the compiler validates the [[Semantic_checking|semantic]] consistency of  source code against programming [[Formal_languages|language]] rules (ie type checking)
- This also involves handling implicit type conversion (if allowed by language) by inserting the appropriate conversion code to handle this 
## Type checking
- **Static type checking**: done at compile time, checks for rule adherence before runtime
- **Dynamic type checking**: done at runtime, checks for rule adherence in runtime. Allows for more flexibility (eg [[OOP_principles#Polymorphism|polymorphism]]) but can introduce overhead and potential runtime errors.
## Spectrum of type checking
- **No type checking**: no enforced type safety (eg [[x86_assembly|asm]]), flexible but high risk of runtime errors.
- **Weak type checking**: type system can be easily circumvented (eg treating chars as ints in [[C_language|C]]) allowing for implicit type conversion but can easily lead to unintended runtime behaviour 
- **Strong type checking**: strict type rules (eg type conversions being explicit in [[Rust_language|Rust]]), this  reduces the potential for runtime errors but can offer limited flexibility

![[Pasted image 20240502123201.png|450|450]]

- Compilers require explicit rules to be defined if implicit conversion is allowed, otherwise issues can be run into such as handling arithmetic in the proper order (PEMDAS?, BODMAS?)
## Type equivalence
- Two distinct mechanisms exist for determining type equivalence  
	- **Name equivalence**: variables are of same type if explicitly declared as such by name
	- **Structure equivalence**: variables are of same type if underlying structure is the same 

```rust
type custom = [i32; 100]; // same under structure equiv but not name equiv
let arr1: custom;
let arr2: [i32; 100]; // anonymous type with no name
```

- The use of name equivalence can act as an alias that avoids having to explicitly compare entire structures to determine equivalence
- Structure equivalence checks cannot handle recursive definitions (eg [[Linked_list_algorithms|linked lists]]), in these cases name equivalence is used to avoid infinite recursive checks from node links

## Additional checking
- **Declaration checks** where all variables must be defined before use
- **Flow of control checks**: statements may occur only inside certain constructions (eg break in loop)