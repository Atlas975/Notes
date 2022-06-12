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

