> [!important]- Metadata
> **Tags:** #EmbeddedSystems 
> **Located:** EmbeddedSystems/BinaryArtithmetic
> **Created:** 14/05/2023 - 12:09
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Binary multiplication
-   The process of multiplying two binary numbers to produce a binary result.
-   The process of binary multiplication is similar to decimal multiplication, but it only involves multiplying 0s and 1s and adding the results.
-   The result of binary multiplication can be found by multiplying each digit of one number by each digit of the other number and adding the products together.

![[Pasted image 20230514121103.png|450|450]]
- Standard binary multiplication results in partial products which can be added with simple binary addition to produce the desired result
-   Binary multiplication can be performed manually using a multiplication table or a method known as "binary long multiplication." It can also be performed using computer algorithms, such as Booth's algorithm or Wallace tree multiplication.

## Fractional binary multiplication 
- This is done by adding up the number of significant digits and placing the decimal point that many digits  from the right

![[Pasted image 20230514121608.png|450|450]]