> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity
> **Created:** 24/04/2024 - 15:29
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Keys




## Usage 
- **Data Encryption**: Protecting data at rest (e.g., on hard drives) and in transit (e.g., during internet transmission).
- **Digital Signatures**: Ensuring the authenticity and integrity of messages and documents.
- **Secure Communications**: Enabling confidential / authentic communication channels (eg HTTP)