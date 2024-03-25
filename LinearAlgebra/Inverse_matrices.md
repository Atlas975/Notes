> [!important]- Metadata
> **Tags:** #LinearAlgebra
> **Located:** LinearAlgebra
> **Created:** 25/03/2024 - 22:02
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Inverse matrices
- For a matrix in the form:

$$A=\begin{pmatrix}
a  & b \\
c  & d
\end{pmatrix}$$
- The inverse can be calculated as:

$$A^{-1} = \frac{1}{\det(A)} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$