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
- A risk is the potential for loss, damage, or any other negative occurrence that is caused by a vulnerability. Risk management aims to avoid this through preemptive action
- Focused on maintaining confidentiality, integrity, availability and non-repudiation

![[Pasted image 20240427213318.png|350|350]]
## Risk management components
- **Risk treatment**: methods used to manage risks (reduction, transfer, avoidance, or acceptance)
- **Risk Assessment**: Process of identification, analysis, and evaluation of risks.
	- **Risk Analysis**: Understanding the nature and impact of risks.
- **Residual Risk**: The risk that remains after all efforts to identify and eliminate risk.
- **Security Controls**: Measures implemented to mitigate risks.
- **Incident Management**: Processes for responding to security incidents.

![[Pasted image 20240427213531.png|450|450]]
### Sources of risk uncertainty
- Who the attacker is 
- What's the attacker's goal 
- What's the likelihood their attack succeeds
- What's the impact if they succeed

### CISP risk analysis 

![[Pasted image 20240427213632.png|350|350]]

## Risk assessment types
- **Qualitative Assessment**: the ranking of threat seriousness based on judgement / experience
- **Quantitative Assessment**: assigns numerical values or percentages to components like safeguard costs, asset value, and threat frequency
