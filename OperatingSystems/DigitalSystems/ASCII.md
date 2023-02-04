> [!important]- Metadata
> **Tags:** #MediaEncoding 
> **Located:** OperatingSystems/DigitalSystems
> **Created:** 04/02/2023 - 13:21
> ```dataviewjs
>let cur = dv.current().file;
>let loc = cur.path;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]));
> ```

___
# ASCII

> ![[Pasted image 20230204131428.png|450|450]]
- Character encoding standard, assigns a unique number (code point) to various characters
- Standard ASCII defines 128 characters using 7 bits with similar characters grouped together and ordered in a way that's easy to manipulate in software
## ASCII control characters
- The first 32 ASCII symbols are known as control characters, these are non-printable:
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
