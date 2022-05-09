# Multiplexer
- A device that allows in several inputs and gives one output.
>![[Pasted image 20211103110900.png]]
- The amount of inputs it can take depends on the number of control inputs (**2n**), in this case 2*2 = 4 inputs.
## Truth table representation:
> ![[Pasted image 20211103111909.png]]
> ![[Pasted image 20211103111513.png|500|500]]
- Note inputs like A are only considered when a combination of 0,0 is present. Other inputs are not considered as denoted by the X. An on state is only achieved if A is also equal 1.
## Applying de Morgans law:
> ![[Pasted image 20211103113707.png]]
- This allows a logic circuit to be built only of inverted AND's / OR's
> ![[Pasted image 20211103113818.png|500|500]]
- This is an example of a 3 input logic circuit.

# Karnaugh map
- A grid where each square represents a input combination.
#### Note the sequence of negation is important, follow this for ALL Karnaugh maps:
![[Pasted image 20211103114544.png]]
## Using a Karnaugh map
1. Pick template of required number of inputs
2. Look for rectangular groups of 1's , few groups that are large in size are best.
#### Groups must contain 2^n cells (2,4,8,16..)
>![[Pasted image 20211103134236.png]]
- Each group corresponds to the number of terms there will be.
- List the unchanged terms:
>![[Pasted image 20211103134331.png]]
# Decoder function
- Example: detects 0,1,2,4,5 in binary
![[Pasted image 20211103135038.png|500|500]]
- Becomes:
![[Pasted image 20211103135234.png|500|500]]
![[Pasted image 20211103135401.png|500|500]]
- Can be simplified as:
> B' + A'C'
## Wrap around
- Wrapping around corners is also possible
![[Pasted image 20211103140702.png|500|500]]