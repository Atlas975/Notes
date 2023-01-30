> [!important]- Metadata
> **Tags:** #DesignPatterns #Algorithms 
> **Located:** SoftwarePatterns/Behavioral
> **Created:** 30/01/2023 - 12:24
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
# Visitor pattern
- Separates #Algorithms / behaviours from the component they operate on
- This keeps individual components focused on their responsibility and help enforce the  [[SOLID_principles#Single responsibility (SRP)|Single responsibility]] principle within codebases
- [[SOLID_principles#Open-Closed (OCP)|Open-Closed]] principle also enforced by having visitors be easily interchangeable

## Double dispatch 
- Technique used by the visitor pattern which involves delegating choosing the proper method to the object itself rather than the client 