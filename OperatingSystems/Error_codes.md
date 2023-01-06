---
aliases: [error]
---

> [!important]- Metadata
> **Tags:** #OperatingSystems #Programming 
> **Located:** OperatingSystems
> **Created:** 06/01/2023 - 14:36
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
# Error codes
- An alphanumeric code typically used by a program to communicate that it has encountered an unexpected condition it cannot recover from



## Unix error codes 
- **1: Operation [[Linux_permissions|not permitted]]**
- **2: No such [[File_systems|file / directory]]**
- **3: No such process**
- **4: Interrupted [[Operating_system_design#System calls|system call]]**
- **5: [[Input&Output_systems|Input / output]] error**

## HTTP error codes
- **200 OK**: The request was successful
- **400 Bad Request**: The request could not be understood by the server due to invalid syntax
- **401 Unauthorised:** The request requires user authentication
- **404 Not Found**: The requested resource could not be found on the server
- **500 Internal Server Error**: An error occurred on the server while processing the request

## SQL error codes 
- **1062: Duplicate entry**
- **1146: Table does not exist**
- **1451: Cannot delete or update a parent row**: a [[SQL_language#Foreign keys|foreign key]] constraint fails
- **1054: Unknown column**