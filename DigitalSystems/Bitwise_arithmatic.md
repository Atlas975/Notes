# Bitwise operators
>![[Pasted image 20220618160514.png]]

# Bit masks
- Used to access specific bits in a given bytcode, note a shift is still typically needed to extract the appropriate value
## AND bitmask

```c
x:      11111111 

y:      00001111

x & y:  00001111
```


## OR bitmask 

```c
x:      11110000

y:      00001111

x | y:  11111111
```


## XOR bitmask 
```c
x:      0xFF
y:      0x3F
x & y:  11000000
```
