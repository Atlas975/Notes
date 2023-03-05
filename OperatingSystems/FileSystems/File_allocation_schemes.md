> [!important]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems/FileSystems
> **Created:** 05/03/2023 - 21:06
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
# File allocation schemes
## Continuous allocation
- Each [[File_systems|file]] fills set of **adjacent** disk blocks in file system, fast access
- Requires knowing file size before finding gap for allocation, suffers from external fragmentation with unused blocks between files. Files cannot be split in this scheme into multiple blocks

![[Pasted image 20230305205625.png|250|250]]
## Linked-List allocation
- Avoids external fragmentation, blocks no longer need to be continuous at the cost of additional overhead. All blocks can be used but pointers take up space
- Internal fragmentation (on last block) and only offers slow sequential access, ideal for small file systems such as [[FAT_file_system|FAT]]

![[Pasted image 20230305205753.png|250|250]]
## Indexed allocation
- Quick access to any position, simple mapping to specific blocks by simply knowing the block offset to jump past.
- Supports **holes**, does not allocate space for empty blocks. Anything that just contains 0's can be represented by a null pointer
- [[Computer_memory#Consecutive memory mapping|Multiple way to handle indexed allocation]]

> linked![[Pasted image 20221208230355.png|300]]
> index block holds set of block addresses

- While simple and fast, this method has limited file size with only room for n block pointers in index block
- Multi-level indexing supports large file sizes and the number of indexes can be tuned to max desired file size. Increase to access time and overhead with added levels

> multi-level ![[Pasted image 20221208230819.png|400]]

- Unix uses a combined approach with indexing for small files and multi-level for large files, retaining speed where possible

> linked + multi-level![[Pasted image 20221208231007.png|400]]