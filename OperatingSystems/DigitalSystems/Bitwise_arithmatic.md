#OperatingSystems 
# Bitwise operators

![[Pasted image 20220618160514.png|450|450]]


``` 
Set union A | B
Set intersection A & B
Set subtraction A & ~B
Set negation ALL_BITS ^ A or ~A
Set bit A |= 1 << bit
Clear bit A &= ~(1 << bit)
Test bit (A & 1 << bit) != 0
Extract last bit A&-A or A&~(A-1) or x^(x&(x-1))
Remove last bit A&(A-1)
Get all 1-bits ~0
```

# Bit masks
- Frequently used to translate bytecode or extract specific bytes in combination with a shift
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

# Ones complement representation

```python
x = 0b0011 # 3
print(~x + 1) # -3
```
