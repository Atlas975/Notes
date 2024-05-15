---
aliases:
  - ALE
---

> [!important]- Metadata
> **Tags:** #RiskManagement 
> **Located:** Cybersecurity
> **Created:** 09/03/2024 - 17:49
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Annualised loss expectancy
- A [[Risk_management|risk management]] concept, often used in cybersecurity and business continuity planning. 
- It helps in understanding and quantifying the potential losses from risks, aiding in making informed decisions about investing in security measures
## Annualised loss expectancy formula 
$$ALE = ARO \cdot SLE$$
$$SLE=AV \cdot EF$$
- **Annualised Loss Expectancy (ALE):**  estimate of potential cost of a risk taken
- **Annual Rate of Occurrence (ARO):** estimate of how often a specific threat is expected to occur 
- **Single Loss Expectancy (SLE):** expected monetary loss every time a risk event occurs
- **Typical Asset Value (AV):** This is the value of the asset that is at risk
- **Exposure Factor (EF):** percentage of the asset value likely to be lost when a risk event occurs 
