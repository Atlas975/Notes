> [!important|inIL]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems
> **Created:** 26/12/2022 - 09:23
> ```dataviewjs
>let loc = dv.current().file.path;
>let cur = dv.page(loc).file;
>let links = cur.inlinks.concat(cur.outlinks).array().map(p => p.path);
>let paths = new Set(links.filter(p => !p.endsWith(".png")));
>paths.delete(loc);
>dv.table(["Connections","Tags"], dv.array(Array.from(paths)).map(p => [
>   dv.fileLink(p),dv.page(p).file.tags.join("")]).slice(0, 20));
> ```

___
# Linux permissions
- File ownership is assigned to 3 types of owners
## User (u)
- Owner of the file
- By default the creator of a file becomes its user
## Group (g)
- A group can contain multiple users, all sharing the same permissions
- Allows for grouped permission assignment
## Other / World (o)
- Users that don't fall in either category
# Permission assignment
- Permissions for file or directory can be managed by the **chmod** command, this follows the format:

```bash
chmod permissions filename
```

- This can be changed in two modes, symbolic mode using u,g and w to represent groups and r,w,x to represent permissions or absolute mode using numerical flags
## Symbolic mode
- For files, each corresponding permission allows the following actions:\
  • The read (r) permission allows owner to examine contents of the file\
  • The write (w) permission allows owner to modify the file\
  • The execute (x) permission allows owner to run the file as a command
- For directories, each corresponding permission allows following actions:\
  • The read (r) permission allows owner to list contents of the directory\
  • The write (w) permission allows owner to add or remove files\
  • The execute (x) permission allows owner to access files

> ![[Pasted image 20220811203106.png|550|550]]
> ![[Pasted image 20220811203131.png|550|550]]
> ![[Pasted image 20220811185419.png|350|350]]![[Pasted image 20220811215057.png|450|450]]
## Absolute mode
> Numeric permissions:
> ![[Pasted image 20220811202726.png|550|550]]

```ad-example
‘764’ absolute code says the following:

-   Owner can read, write and execute
-   Usergroup can read and write
-   World can only read
```

