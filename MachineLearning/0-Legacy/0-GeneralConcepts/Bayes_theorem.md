> [!important]- Metadata
> **Tags:** #
> **Located:** MachineLearning/0-Legacy/0-GeneralConcepts
> **Created:** 27/02/2023 - 11:31
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Bayes theorem
- Finding the probability of an event given what we know
![[Pasted image 20220202092517.png|450|450]]
![[Pasted image 20220202092639.png|450|450]]

## Deriving Bayes' theorem
- Involves solving without the numerator
![[Pasted image 20220202134748.png|450|450]]
![[Pasted image 20220202134956.png|450|450]]
![[Pasted image 20220202135541.png|450|450]]
![[Pasted image 20220202135730.png|450|450]]
- Using same method
![[Pasted image 20220202135651.png|450|450]]
![[Pasted image 20220202140659.png|450|450]]
### Bayes Theorem
>![P(A\mid B)=\frac {P(B\mid A) \cdot P(A)}{P(B)}](https://www.gstatic.com/education/formulas2/397133473/en/bayes__theorem.svg)
![[Pasted image 20220202135805.png|450|450]]
![[Pasted image 20220202140932.png|450|450]]
- This tells us P(A|B) can be derived using P(B|A)