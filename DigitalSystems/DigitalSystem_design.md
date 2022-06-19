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


# Combinatorial
- Output function is purely based on it's inputs. It does not matter what inputs came before that to lead to the output that would become the current input.
# Sequential
- Output is based on its inputs and on the sequence of past inputs.
> Truth table representation:![[Pasted image 20211110132247.png]]
> Logic circuit representation:![[Pasted image 20211110132359.png]]
-  A high pulse on S always gives Q=1 state (set)
-  A high pulse on R always gives Q=0 state (reset)
-  Both cannot occur at the same time.
-  Having both S and R off stays where it is.
-  Current step denoted by Q0, next step denoted by Q
## S-R flip flop
>![[Pasted image 20211115231715.png|500|500]]
# S-R Limitations
- Issues when implementing a bit in a register, has distinct SET AND RESET inputs. Ideally this should be handled by a single input. 
- There is no way of telling it when to store input data with a 'Latch' signal like with clocked D-type flip slop.

