
# MIPS instructions
>![[Pasted image 20220128131048.png]]
>![[Pasted image 20220130170239.png]]
>>![[Pasted image 20220125111955.png]]
# MIPS hello world
>![[Pasted image 20220118100904.png]]
# MIPS print character
>![[Pasted image 20220118100716.png]]
- Note characters use single quotes
# MIPS print integer
>![[Pasted image 20220118101110.png]]
- .word represents 4 bytes
# MIPS print float
>![[Pasted image 20220118101742.png]]
# MIPS print double
>![[Pasted image 20220118103542.png]]
- Double does not have its own zero, so it must be created
- Double must be stored in a pair of registers since its 64 bits
# MIPS add int
>![[Pasted image 20220120113703.png]]

# MIPS subtract int
>![[Pasted image 20220128124328.png]]

# MIPS multiply int (mul)
>![[Pasted image 20220128124402.png]]
# MIPS multiply int (mult)
**Able to store result in two registers**
>![[Pasted image 20220128125846.png]]
# MIPS divide int
>![[Pasted image 20220130173231.png]]
# MIPS modulus
>![[Pasted image 20220130174756.png]]

# MIPS IF statement
>![[Pasted image 20220203234623.png]]
# MIPS write address
>![[Pasted image 20220203162153.png]]
>![[Pasted image 20220120150845.png]]

```
lui $t1,0xFFFF
```
- Stores in upper 4 bits

# MIPS shift logical
- Example shift left: (8 becomes 32)
```
sll $t0,$t0,2
```
- Example shift right: (8 becomes 2)
```
srl $t0,$t0,2
```