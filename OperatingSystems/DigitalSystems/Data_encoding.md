
# Data_encoding
created: 2022-11-27 14:25
#OperatingSystems [[Computer_memory]]

---
- Computers need to be as simple as possible for scalability and cost
- Hardware is focused on working with small positive whole numbers
- A **Data type** is just another word for a code that maps to these small numbers that computers understand.
## ASCII
[[ASCII]]
> ![[Pasted image 20230204131428.png|450|450]]
- The first 32 ASCII symbols are known as control characters, these are not printable:
```
Decimal	Hexadecimal	Character
0		0x00		NULL (null character)
1		0x01		SOH (start of heading)
2		0x02		STX (start of text)
3		0x03		ETX (end of text)
4		0x04		EOT (end of transmission)
5		0x05		ENQ (enquiry)
6		0x06		ACK (acknowledge)
7		0x07		BEL (bell)
8		0x08		BS (backspace)
9		0x09		HT (horizontal tab)
10		0x0A		LF (line feed)
11		0x0B		VT (vertical tab)
12		0x0C		FF (form feed)
13		0x0D		CR (carriage return)
14		0x0E		SO (shift out)
15		0x0F		SI (shift in)
16		0x10		DLE (data link escape)
17		0x11		DC1 (device control 1)
18		0x12		DC2 (device control 2)
19		0x13		DC3 (device control 3)
20		0x14		DC4 (device control 4)
21		0x15		NAK (negative acknowledge)
22		0x16		SYN (synchronous idle)
23		0x17		ETB (end of transmission block)
24		0x18		CAN (cancel)
25		0x19		EM (end of medium)
26		0x1A		SUB (substitute)
27		0x1B		ESC (escape)
28		0x1C		FS (file separator)
29		0x1D		GS (group separator)
30		0x1E		RS (record separator)
31		0x1F		US (unit separator)
```

## Latin-1
- Alternate character code standard (8-bit, 256 characters) that can also represent additional symbols
>![[Pasted image 20211031094035.png]]
## Unicode
- Further extension to Latin-1 to 16-bit binary, able to represent more languages.

# Decimal
- For handling arithmetic, early computers used decimal like us.	
>![[Pasted image 20211031094523.png]]


# Function pointers
[[C_language]]
>![[Pasted image 20220315141910.png]]

- Assigning function pointers
>![[Pasted image 20220315142345.png]]
- Invoking function pointers
>![[Pasted image 20220315142411.png]]
- Usage
>![[Pasted image 20220315142814.png]]

# Limitations
- Computers are restricted to a finite number of digits.
- For instance, 5-bit numbers in decimal cant be stored in 4-bits
>![[Pasted image 20211031095049.png]]
- If results are too big, an **Arithmatic Overflow Error**  occurs.
# Negative number representation
## Approach 1: sign and magnitude
- Dedicates column just to sign, has to represent two versions of 0.
>![[Pasted image 20211031095519.png]] 
## Approach 2: excess n
- Instead of sign column, a column is dedicated to representing excess. 
- Example: excess 5, this works by adding 5 and subtracting 5 when decoding to get actual value so this:
>![[Pasted image 20211031100627.png]]
- Gets decoded like this:
>![[Pasted image 20211031100730.png]]
- This approach can represent numbers from -5000 to 4999.
- This allows a regained column and no longer has two versions of 0.
- However excess n isn't ideal for arithmetic
>![[Pasted image 20211031120056.png|500|500]]
- Additional proof: excess 4 subtraction
>![[Pasted image 20211031121346.png|500|500]]
## Approach 3:  2's compliment 
- Another method of representing negative numbers, positive represented as normal, flip the bits and add 1 to represent negative.
>![[Pasted image 20211031122317.png|300|300]]
- Ignoring the carry, this also works with arithmetic by adding, meaning separate hardware for subtraction isn't needed.
>![[Pasted image 20211031122700.png|400|400]]  
## Fraction representation
- Can be done by reserving columns for fractions
>![[Pasted image 20211031102625.png]]
- Rapidly depletes columns
# Range and Precision
- One solution to extend range (length of number being represented) is to trade in precision (how close decoded number is to actual value)
- This comes in the form of rounding, in many cases an rough value is sufficient.
>![[Pasted image 20211031103629.png|500|500]]
 An overflow tag is a special piece of hardware used  to indicate potential overflow error


## IEEE 754 
> ![[Pasted image 20221105110857.png]]