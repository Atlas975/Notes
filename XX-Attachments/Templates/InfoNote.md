> [!important]- Metadata
> **Tags:** #<% tp.file.cursor(1) %>
> **Located:** <% tp.file.path(true).split('/' + tp.file.title)[0] %>
> **Created:** <% tp.file.creation_date('DD/MM/YYYY - HH:mm') %>
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
# <% tp.file.title.replace(/_/g,' ') %>
<% tp.file.cursor(2) %>