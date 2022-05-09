# Vector ADT
- Dynamic data type, size can change unlike array
- Homogeneous like an array
- Elements access by position
- This can be implemented via a linked list

# Vector structure
>![[Pasted image 20211206071417.png]]
- Diagram example:
>![[Pasted image 20211206071449.png]]
- Field names and addresses aren't actually needed:
>![[Pasted image 20211206071657.png]] 
## Vector terminating
- This is done via null pointer after final element
>![[Pasted image 20211206071552.png]]
# Core functions
>![[Pasted image 20211206072229.png]]
>Append
![[Pasted image 20211202124545.png|500|500]]
>Insert
![[Pasted image 20211202124621.png|500|500]]
Retrieve position
>![[Pasted image 20211202124838.png|500|500]]
>Remove element at
![[Pasted image 20211202124948.png|500|500]]
> Size of vector
![[Pasted image 20211206072130.png]]
# pt variable
- A variable of vector type, contains a address of an object of that specific vector
>![[Pasted image 20211206072711.png]]
## pt -> next
- Accesses the next field of a vector object.
>![[Pasted image 20211206072839.png]]
- Example in sizeof function
>![[Pasted image 20211206073023.png]]