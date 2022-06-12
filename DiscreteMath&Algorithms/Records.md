# Records [[C_basics]]
- A method of holding multiple properties, good for representing an entity eg the characteristics of a student. This is needed as C does not have encapsulation.
- It is not homogeneous like an an array, it is heterogeneous
- Components are called fields
[[Relations]]
>![[Pasted image 20211203172314.png]]
## Example of records in C
>![[Pasted image 20211202122712.png]]

[[C_basics#MALLOC]] can be used to allocate space for a new record
## Creating new record instance
>![[Pasted image 20211203235040.png]]

## Allocating variables in record
>![[Pasted image 20211203235114.png]]
- The record. format is also how a variable is accessed

## Array of records
- Records is a user defined type, as such an array of pointers to student records can be made:
>![[Pasted image 20211203235434.png]]

## Adapting to lack on encapsulation
- Since attributes aren't hidden, a case statement can be used to address this:
>![[Pasted image 20211203235641.png]]


## Typedef
- Method of naming structs removes the need to call the name struct node by naming it something like Node