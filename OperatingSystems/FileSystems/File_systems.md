---
alias: file, file system
---

> [!important]- Metadata
> **Tags:** #OperatingSystems 
> **Located:** OperatingSystems/FileSystems
> **Created:** 27/02/2023 - 16:44
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# File systems
- The part of an [[Operating_system_design|operating system]] responsible for taking storage devices and providing structure to place and retrieve files
- Shared files created through directed acyclic [[Graphs|graphs]]

![[Pasted image 20221208222431.png|400|400]]

- Common file attributes include
  - Name, unique ID, file type, location, sizeaccess control lists / flags ([[Linux_permissions|Linux permissions]]), time and date (accessed / modified) and ownership (user / group)
## File headers
- Acts as a file descriptor containing information at the start of a file that provides vital information about the file's contents and structure.
-   File headers typically include information such as the file format, encoding, and version, as well as metadata about the file's creation, modification, and authorship.

![[Pasted image 20230306232427.png|550|550]]
-   Depending on the file type, the header may also contain information about the file's size, dimensions, color space, compression, and other technical details.
-   The purpose of a file header is to help software programs and operating systems identify and interpret the file correctly, and to provide users with useful information about the file's properties and contents.

## File operations
- **Open**: prepares file for reading/writing, allocates buffers to hold file blocks from disk. This operation also retrieves the [[#File headers|file header]] and sets a pointer to the beginning of a file
	- Two buffers usually exist so that reading and writing can be done [[Concurrency|concurrently]]
- **Reset**: set file pointer back to beginning of a file
- **Find:** search for records satisfying search condition 
- **Links / Unlink**: create / remove a file alias respectively
- **FindNext**: [[Iterator_pattern|iterates]] to the next matching record in file 
- **Get**: copies current record from buffer to program variable, might also advance file pointer
- **Delete**: deletes current record, updates file to reflect this 
- **Modify**: modifies fields for current record, updates file to reflect this
- **Insert**: locates block where record is to be inserted, transfers block to main memory buffer, writes record to buffer and writes the buffer to disk
- **Close**: releases buffers and performs any cleanup operations required
### File operation types
- With the exception of open and close, all previous operations are **record-at-a-time** meaning they read and act on a single record 
- ==FindAll, FindOrdered and Reorganise== are examples of **set-at-a-time** operations which act upon multiple files 

## File organisation
- **Unordered records** are slow to search but have low overhead as records are appended, deletion is slow but can be sped up through deletion markers which are an extra bit that marks a record as deleted. Periodic file reorganisation is required to reclaim space
- **Ordered records** make use of an ordering field for comparison operations, this is known as an ordering key if this is also unique to each file. These are fast due to the use of [[Binary_search|binary search]]

## Virtual file systems
- When more than one device exists in a file system, a VFS is used to provide a system level view of multiple file-systems types at once
- File systems reflect the characteristics of their device,  the VFS has an API that reflects the operations that can be carried out on these distinct file system structures.
- In Unix, external file systems that are added are controlled through the **mount** command

![[Pasted image 20221208224055.png|400|400]]


