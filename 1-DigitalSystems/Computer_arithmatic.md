# Binary
- The binary system is needed as it's simple to design circuitry with only two states (on and off)
- Binary to decimal conversion, remainder method (go reverse):
![[Pasted image 20211104174259.png|500|500]]
- Worked binary example, fixed point binary:
>![[Pasted image 20211031113429.png]]
- If an arithmetic overflow error occurs in binary operations, ignore the most significant bit.

## IEEE 754 floating point
- Standard floating point representation used in most computers.
- Normalizes mantissa as 1.xxx, only storing the fractional part and uses excess 127 for exponent.
- 1st bit gives sign, next 8 bits gives exponent (subtract 127), next 23 bits gives the mantissa after 1
>![[Pasted image 20211031132536.png|600|600]]
> Converting from binary just requires shifting decimal places 101.0 becomes 1.010 * 2^-2 (most significant bit must be left)
> Decimal number to IEEE754 trick:
![[Pasted image 20211104233519.png]]
- Converting fraction of binary numbers to binary eg:
> 13/32
32 is 6 bits , 13 is 4
001101, place a decimal point at first 0
0.01101, normalized 1.101 * 2^-2
# Octal
- Octal is base 8 format, it can be converted to binary by grouping every 3 bits together:
>![[Pasted image 20211031113823.png|500|500]]
# Hexadecimal 
- Hex is base 16 format, it can be converted to binary by grouping every 4 bits together
>![[Pasted image 20211031114047.png|500|500]]
- Remember, 10,11,12,13,14,15 are represented by A,B,C,D,E,F respectively.
# Why Octal/Hex
- These exist as they are a human friendly way to interpret binary bit patterns
#### Remember to include format when doing calculations
>Subscript 10 for decimal
Subscript 2 for binary
Subscript 8 for octal
Subscript 16 for hex 
# Floating point equality testing
- Due to a lack of precision, equalities must not be written as:
>![[Pasted image 20211031132956.png]] 
- Rounding errors from lack of precision can result in errors.
- Alternative fix:
>![[Pasted image 20211031133135.png]]