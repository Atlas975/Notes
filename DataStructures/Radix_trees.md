> [!important]- Metadata
> **Tags:** #ADTs 
> **Located:** DataStructures
> **Created:** 27/02/2023 - 11:20
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Radix trees
- Radix / Prefix / Trie [[Trees]] are used to efficiently retrieve keys in a dataset of strings. 
- Frequently used in systems such as autocomplete and spellcheckers

![[Pasted image 20220902174310.png|550|550]]

![[Trie_algorithms#Trie data structure]]