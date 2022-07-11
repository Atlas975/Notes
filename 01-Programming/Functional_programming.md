# Functional_programming
created: 2022-07-11 13:26
#Programming

---

- Pure functions, rejects [[OOP_principles]] such as shared state and mutable data
- Functional languages perform operations as if they're being performed for the first time (referential transparency )

> ![[Pasted image 20220711134148.png]]
# Function purity 
- Function purity describes the potential side effects to executing a function
## Impure functions 
- Impure functions mutate the external state of the program, for example modifying variables declared outside a function 
```js
const myNames = ["Oluwatobi", "Sofela"];
function updateMyName(newName) {  
	myNames.push(newName);  
	return myNames;
}
```

## Pure functions 
- Pure functions have no side effects on the external state of the program, all variables are declared within the function 
```js
function updateMyName(newName) {   
	const myNames = ["Oluwatobi", "Sofela"];   
	myNames[myNames.length] = newName;   
	return myNames;
}
```

- Advantages include better readability and code independence
- The external state can also be cloned into a pure function, retaining function purity