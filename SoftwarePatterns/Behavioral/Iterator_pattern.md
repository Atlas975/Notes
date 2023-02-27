> [!important]- Metadata
> **Tags:** #DesignPatterns #ADTs 
> **Located:** SoftwarePatterns/Behavioral
> **Created:** 30/01/2023 - 11:56
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections",  "Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Iterator pattern
- Abstracts the traversal behaviour of a collection  ( #ADTs ) into a separate component known as an iterator
- This [[Design_patterns|design pattern]] allows traversal of elements whilst encapsulating the collections underlying architecture. Multiple iterators can be created from the same collection

![[Pasted image 20230130121336.png|550|550]]

- Multiple types of iterators may also exist for data structures such as [[Graphs]], eg **DFS** and **BFS**
- Traversal methods are known as **concrete iterators** and also implement the Iterable interface

![[Pasted image 20230130121437.png|600|600]]

- Using this pattern also follows the [[SOLID_principles#Single responsibility (SRP)|Single responsibility]] and [[SOLID_principles#Open-Closed (OCP)|Open-Closed]] principle as new iterators can be extracted to separate components and new iterators can be created without modifying ones that already exist. 
- All iterators can also be used the same way via the Iterator interface 