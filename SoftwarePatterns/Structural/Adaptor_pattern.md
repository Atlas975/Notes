> [!important]- Metadata
> **Tags:** #DesignPatterns 
> **Located:** SoftwarePatterns/Structural
> **Created:** 31/01/2023 - 14:06
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
# Adaptor pattern
- Allows objects of incompatible interfaces to collaborate with one another
- This is useful for dealing with legacy code or services that only accept a specific data type

> ![[Pasted image 20230131141245.png|600|600]]


- The adaptor acts as an intermediary class that stores an instance of the service and performs its own processing whilst whilst using the services interface
- This follows the [[SOLID_principles#Single responsibility (SRP)|Single responsibility]] and [[SOLID_principles#Open-Closed (OCP)|Open-Closed]] principle as the adaptor behaviour is segregated from the service, ensuring the incompatible code does not need to be modified