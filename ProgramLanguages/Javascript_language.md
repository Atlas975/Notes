# Javascript_language
created: 2022-06-27 07:14
#Programming 

---
## JS lists

![[Pasted image 20221215015230.png|450|450]]

## JS lambdas 
```ad-example
```javascript
let sum = (a, b) => a + b;

// equivelent to 

let sum = function(a, b) { return a + b; };

// useful for inline functionality

[1,2,3,4,5].filter( function (a) { return a >3; });
[1,5,3,6,-4].sort( (a,b) => a - b );
```

![[Pasted image 20221215020134.png|450|450]]

## JS currying
```ad-example
```javascript
let f = x = y => x * y;
let res1 = f(2);
console.log(res1); // [Function (anonymous)]
let res2 = res1(3);
console.log(res2); // 6>)
```


# JS concurrency 
- Multiple ways to handle [[Concurrency|asynchronous code]]


## Functional JS

```dataviewjs
const degree = 2; // specify the degree of links
let inLin = new Set(dv.current().file.inlinks.map((x) => x.path));
for (let i = 0; i < degree; i++) {
    inLin = new Set([...inLin]
        .flatMap((x) => [...dv.page(x).file.inlinks]).map((x) => x.path));
}
dv.table([`${degree}-degree links`], [...inLin].map((x) => [dv.fileLink(x)]));
```