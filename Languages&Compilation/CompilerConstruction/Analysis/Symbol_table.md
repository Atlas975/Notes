> [!important]- Metadata
> **Tags:** #Languages #Compilers 
> **Located:** Languages&Compilation/CompilerConstruction/Analysis
> **Created:** 02/05/2024 - 14:02
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Symbol table
- Used by a [[Compilers|compiler]] to store identifiers (variable names, functions, classes, etc.) that appear in source code. Tracks identifier details such as type (int, string etc) and memory address
- This helps the compiler understand what each identifier represents and ensures that they're used in accordance with their declarations


![[Pasted image 20240502143400.png|350|350]]

- The prior [[Lexical_analyser|lexer]] step may also recognise and pass identifiers directly to the syntax analyser. This simplifies the job of the symbol table further as now it only needs to validate context
- The level of separation between the lexical analysis step and symbol table construction can vary based on compiler architecture 
## Symbol table functions
-  **Storage**: holds metadata about the program's entities (and prevent duplicate declarations)
-  **Scope management**: manages identifier scope by determining where it's accessible 
-  **Type checking**: ensures that operations performed on identifiers are type-appropriate
- **Efficiency**: searching / adding new identifiers needs to be fast to keep compilation time low


![[Pasted image 20240503185338.png|350|350]]
### Symbol Table Operations
- **Insertion:** new identifiers must be added to the ST
- **Lookup:** Identifiers are searched in the ST to verify declarations and check their types.
- **Scope Transition:** as scopes end, identifiers may be removed  / altered in accessibility 

## Scoping blocks
- **Monolithic Blocks:** one block for entire program, approach is less modular and not scalable.
- **Flat Blocks:** declarations are either local to a block or global to the program (eg Fortran)
- **Nested Blocks:** blocks can be nested and scopes are defined by these blocks (eg [[C_language|C]], [[Java_language|Java]])


![[Pasted image 20240502155231.png|350|350]]

## Identifier storage 
- There are 2 distinct ways of storing identifiers in the ST used by compilers 
- Both of these offer a tradeoff in access speed / memory efficiency 
- Note that complex identifier types exist as well such as a function needing to hold parameter info and a record needing to hold it's list of fields and their type
### Direct storage 
- Each identifier stored directly within a field of the ST, same space for all identifiers 
- **Fixed size allocation**: the compiler must predetermine a maximum length for an identifier
- **Direct access**: direct storage is quick to access, good lookup speed 
- **Space inefficiency**: can waste space if max length is high as this is allocated for all rows

### Pointer to string 
- Each identifier stored in separate memory area dedicated to storing character strings, the ST entry holds a pointer to the start of the string in this area
- **Dynamic string store**: identifiers stored in continuous memory blocks, allows for variable length
- **Indirect access**: slight overhead due to pointer use,  slower than direct access
- **Space efficiency**: more memory-efficient, especially for variable-length identifiers

## Preloading
- Extra entries are often placed in the ST prior to compiler scanning of the source text 
- These typically come from libraries eg `#include <studio.h>` and are handled via [[Paging#Shared memory paging|linking]]
## Symbol table data structures
- ST's can be implemented using various data structures such as [[Hash_tables|hash tables]], [[Trees|tress]], or [[Linked_list_algorithms|linked lists]] depending on efficiency requirements for lookup / insertion 
- A stack can be used to manage ST's for nested blocks. New blocks (eg functions) are pushed and exited blocks are popped. 
	- Not suitable for multiple pass compilation as metadata is lost
	- Complete symbol table also isn't available for runtime diagnostics
- These data structures also typically need to be able to handle ==variable shadowing==

![[Pasted image 20240502155435.png|350|350]]
