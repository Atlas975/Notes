---
alias: set, sets
---
> [!important]- Metadata
> **Tags:** #DiscreteMath 
> **Located:** DataStructures
> **Created:** 26/12/2022 - 09:26
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Sets
1. No duplicates
2. Unordered
## API
- **void add(item)**  
- **void remove(item)**  
- **bool contains(item)**
# Membership
- Set membership notation: symbol ∈
- Non membership notation: symbol ∉
- Sets are only **well defined** when its clear what it contains.
```ad-example
S is the set of all small numbers    (Not well defined) 
S is the set of all positive integers less than 10    (well defined)
```

# Enumerating
- Involves listing out all members, difficult for large sets
- Properties help with this **Notation: A = { x | P(x) }**
 
 >A = {x | x is a integer and x > 0 }
# Core number sets
>N = { 0, 1, 2, 3, … } is the set of natural numbers 
Z = { …, -2, -1, 0, 1, 2, … } is the set of integers 
R = the set of real numbers
# Set operations
## Difference
>𝑨 − 𝑩 = 𝒙  ∈ 𝑨 𝒂𝒏𝒅 𝒙 ∉ 𝑩 }

## Intersection
>𝑨 ∩ 𝑩 = 𝒙 ∈ 𝑨 𝒂𝒏𝒅 𝒙 ∈ 𝑩 }

## Union
>$$\begin{align*}
A\cap B=(x \in A) \cup (x \in B)
\end{align*}$$

# Types of sets
## Empty
![[Pasted image 20211028194249.png|500]]

## Disjoint 
![[Pasted image 20211028194357.png|500]]

## Equal
![[Pasted image 20211028194444.png|500]]

## Not equal
![[Pasted image 20211028194522.png|500]]

## Sets of sets
![[Pasted image 20211028194703.png|500]]

## Cardinality
![[Pasted image 20211028194846.png|500]]

# Subsets 
## Standard subset
- Set A is a subset of B only if every element in A is found in B
- Written: A ⊆ B
- May also be equal

## Not subset
- A is not a subset of B if there is at least one element in A which is not in B 
- Written: A ⊈ B
## Proper subset 
- A subset of A that is also not equal to A 
- Written as b ∈ A

![[Pasted image 20220525180924.png|450|450]]
## Proper superset
- **Atleast** one element in B that isn't in A
- Written B ⊃ A

![[Pasted image 20211028195817.png|450|450]]

# Universal set
- Represents all relevant data:
- Examples:
• Set of natural numbers N if we are counting objects 
• Set of alphabet letters if we are spelling words 
• U = {red, orange, yellow, green, blue, indigo, violet}
- Represented by a rectangle: 

![[Pasted image 20211028205420.png|500]]

## Complement set
- Difference between universal and a certain set
- Written: comp(A) = U – A     OR    A'
- Example:

![[Pasted image 20211028205940.png|500]]

# Ordered pair properties
- Pair of objects with an order associated with them
- Two ordered pairs and are equal if and only if a = c and b=d Example the ordered pairs
- Can be used to represent relationships between elements of two sets 
- **ORDER MATTERS**
- Only the pair/tuples order itself matters, both of these relations are the same since set order doesen't matter.
>R1 = {<1, 2, 3>, <1, 2, 3>, <2, 2, 2>}
>R1 = {<2, 2, 2>, <1, 2, 3>, <1, 2, 3>}

# Cartesian product	
- Note that the Cartesian  product also creates a set 
- Result of ordered pair:

![[Pasted image 20211028194010.png|450|450]]
- Result of ordered tuples:

![[Pasted image 20211028230131.png|450|450]]
