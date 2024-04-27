> [!important]- Metadata
> **Tags:** #Cybersecurity 
> **Located:** Cybersecurity/RiskManagement
> **Created:** 27/04/2024 - 20:16
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));
> ```

___
# Risk management
- The process of identifying, analysing, and either accepting or mitigating risks.


## Risk management components
- **Risk treatment**: methods used to manage risks (reduction, transfer, avoidance, or acceptance)
- **Risk Assessment**: Process of identification, analysis, and evaluation of risks.
    - **Risk Analysis**: Understanding the nature and impact of risks.

## Threats
- Possible events or actions that can cause harm by exploiting vulnerabilities
- Consists of two main components:
    - **Threat Agents**: Entities that can pose a security risk by exploiting a vulnerability.
    - **Attacks**: The actual exploitation of vulnerabilities by threats to cause harm

## Risk assessment types 
- **Qualitative assessment**: Involves scenarios of risk possibilities and relies on judgment, best practices, intuition, and experience.
- **Quantitative assessment**: Attempts to assign numerical values to risks to estimate factors such as cost, asset value, business impact, threat frequency, and effectiveness of safeguards.