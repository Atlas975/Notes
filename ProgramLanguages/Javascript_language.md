# Javascript_language
created: 2022-06-27 07:14
#Programming 

---


## JS lists

![[Pasted image 20221215015230.png|450|450]]

## JS lambdas 
```javascript
let sum = (a, b) => a + b;

// equivelent to 

let sum = function(a, b) { return a + b; };

// useful for inline functionality

[1,2,3,4,5].filter( function (a) { return a >3; });
[1,5,3,6,-4].sort( (a,b) => a - b );
```


![[Pasted image 20221215020134.png|450|450]]
- Functions can also be created with the new keyword 
```javascript
let f = new Function ([arg1, arg2, ...argN], functionBody);
```

## JS currying
```javascript
let f = x = y => x * y;
let res1 = f(2);
console.log(res1); // [Function (anonymous)]
let res2 = res1(3);
console.log(res2); // 6>)
```


## JS classes 
```javascript
class Student {
    constructor(id) {
        this.id = id;
    }
    get studentId() {
        return this.id;
    }

    set studentId(id) {
        this.id = id;
    }
}
s1 = new Student(123);
console.log(s1.studentId);
s1.studentId = 456;
console.log(s1.studentId);
```


## JS closure 
- when a function is defined in a specific scope so that it explicitly has access to that scope.

```javascript
function test() { 
    let name = 'Alice'; 
    return function(){ console.log(name); } 
} 
console.log(name); //invalid 
let f = test(); 
f(); //Alice
```


## JS lexical environment 

![[Pasted image 20230509000449.png|500|500]]
# JS concurrency 
- Multiple ways to handle [[Concurrency|asynchronous code]]

