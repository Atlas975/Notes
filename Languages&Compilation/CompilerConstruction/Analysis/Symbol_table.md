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
### Symbol Table Operations
- **Insertion:** new identifiers must be added to the ST
- **Lookup:** Identifiers are searched in the ST to verify declarations and check their types.
- **Scope Transition:** as scopes end, identifiers may be removed  / altered in accessibility 

## Identifier storage 

### Direct storage 
    
    - Identifiers are stored directly within each entry of the symbol table.
    - Fixed space allocation is required for each identifier, based on a pre-defined maximum length.
    - This method offers straightforward and fast access but can lead to inefficient space usage if the maximum length is not well-matched to actual identifier lengths.
2. **Pointer to a String Store**:
    
    - Identifiers are stored in a dedicated memory area for strings, and the symbol table entries contain pointers to these strings.
    - This approach allows for dynamic storage of variable-length identifiers, making it more space-efficient.
    - Accessing identifiers involves an extra step of dereferencing the pointer, adding a slight overhead but optimizing memory usage.
## Scoping blocks
- **Monolithic Blocks:** one block for entire program, approach is less modular and not scalable.
- **Flat Blocks:** declarations are either local to a block or global to the program (eg Fortran)
- **Nested Blocks:** blocks can be nested and scopes are defined by these blocks (eg [[C_language|C]], [[Java_language|Java]])


![[Pasted image 20240502155231.png|350|350]]
## Preloading
- Extra entries are often placed in the ST prior to compiler scanning of the source text 
- These typically come from libraries eg `#include <studio.h>` and are handled via [[Paging#Shared memory paging|linking]]
## Symbol table data structures
- ST's can be implemented using various data structures such as [[Hash_tables|hash tables]], [[Trees|tress]], or [[Linked_list_algorithms|linked lists]] depending on efficiency requirements for lookup / insertion 
- A stack can be used to manage ST's for nested blocks. New blocks (eg functions) are pushed and exited blocks are popped. 
	- Not suitable for multiple pass compilation as metadata is lost
	- Complete symbol table also isn't available for runtime diagnostics

![[Pasted image 20240502155435.png|350|350]]
