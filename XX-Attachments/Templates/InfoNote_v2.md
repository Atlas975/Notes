---
aliases: 
tags: 
created: " <% tp.file.creation_date('DD/MM/YYYY - HH:mm') %>"
located: <% tp.file.path(true).split('/' + tp.file.title)[0] %>
links: '```dataviewjs                                                                                                                                                                        let f = dv.current().file;let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png"))); paths.delete(f.path);dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));                                                                                                         ```'
---

___
# <% tp.file.title.replace(/_/g,' ') %>



