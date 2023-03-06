---
aliases: [<% tp.file.cursor(1) %>]
---

> [!important]- Metadata
> **Tags:** #<% tp.file.cursor(2) %>
> **Located:** <% tp.file.path(true).split('/' + tp.file.title)[0] %>
> **Created:** <% tp.file.creation_date('DD/MM/YYYY - HH:mm') %>
> ```dataviewjs
> let cur = dv.current().file;
> let paths = new Set(
>     [...cur.inlinks.filter(p => !p.path.endsWith(".png")), ...cur.outlinks].map(p => p.path));
> paths.delete(cur.path);
> dv.table(["Connections",  "Tags"], dv.array(Array.from(paths).slice(0, 20)).map(p =>
>     [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# <% tp.file.title.replace(/_/g,' ') %>
<% tp.file.cursor(3) %>



