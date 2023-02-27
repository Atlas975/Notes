#DiscreteMath  [[Bitwise_arithmatic]][[Predicate_logic]]
# Fundamental logic operators
- AND, OR, NOT, XOR
- Boolean logic is critical even at the lowest level of [[Computer_architecture|compter hardware]]
## Notation
![[Pasted image 20211031133719.png|400|400]]
## Logic gate symbols
![[Pasted image 20211115230156.png|450|450]]
- Circles at the end indicate inversion

# NAND  / NOR gate building
- Note any binary logic circuit can be built entirely from just NAND and NOR gates
![[Pasted image 20211031134656.png|550|450]]
# Boolean laws
![[Pasted image 20211031135124.png|450|450]]

## Proof of absorption by perfect induction
![[Pasted image 20211031135427.png|450|450]]

# Karnaugh map
- A grid where each square represents a input combination.
- Note the sequence of negation is important, follow this for ALL Karnaugh maps:
![[Pasted image 20211103114544.png|450|450]]
## Using a Karnaugh map
1. Pick template of required number of inputs
2. Look for rectangular groups of 1's , few groups that are large in size are best.
- Groups must contain 2^n cells (2,4,8,16..)
![[Pasted image 20211103134236.png|450|450]]
- Each group corresponds to the number of terms there will be.
- List the unchanged terms:
![[Pasted image 20211103134331.png|450|450]]
# Decoder function
- Example: detects 0,1,2,4,5 in binary
![[Pasted image 20211103135038.png|500|500]]
- Becomes:
![[Pasted image 20211103135234.png|500|500]]
![[Pasted image 20211103135401.png|500|500]]
- Can be simplified as:
$$ B' + A'C'$$
## Map wrap around
- (Also: note that Karnaugh maps “wrap” left-to-right and top-to-bottom)

![[Pasted image 20211103140702.png|500|500]]
