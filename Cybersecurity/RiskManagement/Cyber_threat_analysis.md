> [!important]- Metadata
> **Tags:** #RiskManagement 
> **Located:** Cybersecurity/RiskManagement
> **Created:** 30/04/2024 - 20:19
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Cyber threat analysis
- The process of threat assessment, this is needed to inform the [[Risk_management|risk management]] process to understand what to look out for 
- A threat actor can be either malicious or accidental and has the opportunity to exploit potential [[Vulnerability_analysis|vulnerabilities]] in a system
