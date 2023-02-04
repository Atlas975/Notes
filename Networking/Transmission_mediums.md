> [!important]- Metadata
> **Tags:** #Networking 
> **Located:** Networking
> **Created:** 23/01/2023 - 14:21
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
# Transmission mediums

## Transmission types
### Digital transmission
- Continuous in time, discrete in level, 1 indicates positive voltage, 0 indicates no voltage
- **Bit rate (bps)** is used to describe frequency

> ![[Pasted image 20211029233411.png|450|450]]

### Analogue transmission
- Continuous in time and level 
- Analogue data needs to digitized before going through sampling
- **Bandwidth** (measured in hertz) refers to the range of frequencies a signal can occupy (eg. the human voice)

> ![[Pasted image 20211029232819.png|350|350]]
