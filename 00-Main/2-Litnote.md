```
# removes blockquotes from images
find -name '*.md' -exec sed -i 's/>\s*!\[\[\(.*\)\]\]/!\[\[\1\]\]/g' {} +


# adds dimensions to all images that dont have them 
find -name '*.md' -exec sed -i 's/!\[\[\([^]|]*\.png\)\(\|[^]]\{1,\}\)\?\]\]/\0/g; s/!\[\[\([^]]*\.png\)\]\]/![[\1|450|450]]/g' {} +
```




```dataviewjs
const degree = 2; // specify the degree of links

let inLin = new Set(dv.current().file.inlinks);
for (let i = 0; i < degree; i++) {
    inLin = new Set([...inLin].flatMap(x => [...dv.page(x).file.inlinks]));
}

inLin = [...new Set([...inLin].map(x => x.path))].map(x => dv.fileLink(x))
dv.table([`${degree}-degree links`], inLin.map(x => [x]));
```