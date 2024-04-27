> [!important]- Metadata
> **Tags:** #Cybersecurity #OperatingSystems 
> **Located:** Cybersecurity
> **Created:** 27/04/2024 - 15:48
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Operating system security
- An [[Operating_system_design|OS]] and it's applications present numerous opportunities for security risk (both human and non-human) due to the large amount of data contained in it's numerous systems
- These threats fall into 4 major categories:
    - **Data Exposure**: Risks to data confidentiality.
    - **Data Tampering**: Risks to data integrity.
    - **Denial of Service**: Threatens the availability of systems.
    - **Viruses**: Aim to breach the system's defence


![[Pasted image 20240427165716.png|350|350]]