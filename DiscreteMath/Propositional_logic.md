> [!important]- Metadata
> **Tags:** #DiscreteMath 
> **Located:** DiscreteMath
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
# Propositional logic


- All Replacement rules

> ![[Pasted image 20211108193931.png]]
-   Statements that can be either true or false but never both.

> ![[Pasted image 20211101133540.png|500]]

-   Notation

> ![[Pasted image 20211101133802.png|500|500]]

-   Propositions are usually represented by an upper case letter.

# Types of propositions

-  Atomic propositions: does not depend on the results of another proposition
-  Compound propositions: connected propositions made by combining atomic propositions using connectives.

# Fundamental connectives

> ![[Pasted image 20211104103047.png|350|350]]

## Order of operations

> ![[Pasted image 20211104113813.png|450]]
## Conditional (->)

-   A compound proposition, **IF A THEN B**, example:

> If there is smoke there must be a fire Smoke: antecedent Fire: consequent

-   This also gives a third proposition called the implication. It is false if the antecedent is true and the consequent is false.

> ![[Pasted image 20211104103742.png|200|200]] True, False results in false as it is an incorrect/false proposition. In cases where there's no smoke but there is a fire, it can simply be said that the smoke was not seen. But in the case where there is smoke but no fire, this means the propositions claim is false

## Biconditional (<->)

-   P <-> Q = (P->Q) AND (Q → P)
-   Also known as **ONLY IF** eg:

> You get coffee only if you press a button, with no other alternative source of coffee.

-   Biconditional's are only true if P and Q have the same truth value.

> ![[Pasted image 20211104113450.png|200|200]]

# Proposition categories
## Tautologies
- Always true regardless of truth values of atomic propositions
- For instance **A OR (NOT A)**
>![[Pasted image 20211108190812.png|250|250]]

## Contradictions
- Always false regardless of truth value of atomic propositions.
- For instance **A AND (NOT A)**
>![[Pasted image 20211108191013.png|250|250]]

## Contingencies
- Neither of the two, result depends on atomic propositions truth value.
- Must have both true and false in truth table:
>![[Pasted image 20211108191251.png|50|50]]

## Equivalent
- If 2 propositions have same truth value in all circumstances.
- This allows one proposition to be replaced by the other also denoted by **P ≡ Q**
- Also known as logically equivalent. 
> ![[Pasted image 20211108191602.png|250|250]] 

[[De_Morgans_law#De Morgan's quantifier law]]

# Replacement laws
## Absorption
- **P OR (P AND Q) = P**
## Identity
- **P AND tautology = P**
- **P OR contradiction = P**

>![[Pasted image 20211108192614.png|450]] 
## Idempotence
- P OR P = P
- **P AND P = P**
## Negation 
- **P OR (NOT P)**  is a tautology
- **P AND (NOT P)** is a contradiction

## Double negation
- Double negation cancels itself out
- **~~ P = P**

## Equivalence 
- **P <-> Q = (P -> Q) AND (Q -> P)**

## Implication
- An implication is the same as an negation and disjunction
- **P -> Q = (NOT P) OR Q**
> ![[Pasted image 20211108193443.png|500|500]]

## Contraposition
- **P -> Q = (NOT Q) -> (NOT P)**
> ![[Pasted image 20211108193642.png|500|500]]
