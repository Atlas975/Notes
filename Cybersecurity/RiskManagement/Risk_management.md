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
- Focused on maintaining confidentiality, integrity, availability and non-repudation

## Risk management components
- **Risk treatment**: methods used to manage risks (reduction, transfer, avoidance, or acceptance)
- **Risk Assessment**: Process of identification, analysis, and evaluation of risks.
	- **Risk Analysis**: Understanding the nature and impact of risks.
- **Residual Risk**: The risk that remains after all efforts to identify and eliminate risk.
- **Security Controls**: Measures implemented to mitigate risks.
- **Incident Management**: Processes for responding to security incidents.

## Threats
- Possible events or actions that can cause harm by exploiting vulnerabilities
- Consists of two main components:
	- **Threats**: The possibility of damaging actions against socio-technical systems.
	- **Attacks**: Actions carried out by threat agents by exploiting vulnerabilities 

## Vulnerabilities 
## Risk assessment types
- **Qualitative Assessment**: Evaluates risks based on scenarios, ranking the seriousness of threats and the validity of countermeasures using judgment and experience.
- **Quantitative Assessment**: Attempts to assign numerical values or percentages to components like safeguard costs, asset value, and threat frequency
