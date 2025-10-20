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

![[Pasted image 20240427213318.png|350|350]]

- Focused on maintaining confidentiality, integrity, availability and non-repudiation
- This helps organisations make informed security decisions and aligns cybersecurity efforts with business objectives. Identifying vulnerabilities early also prevents costly incidents 

![[Pasted image 20251020235406.png|350|350]]
## Risk management components
- **Risk Assessment**: Process of identification, analysis, and evaluation of risks.
    - **Risk Identification**: Finding risk sources, events and potential consequences
	- **Risk Analysis**: Understanding the nature and impact of risks.
- **Risk treatment**: Methods used to manage risks (reduction, transfer, avoidance, or acceptance)
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


## Risk handling strategies
- Approaches that organisations and individuals use to manage and mitigate risks
- Each strategy has its own approach / application depending on the nature / impact of the risk.
### Risk avoidance 
- Involves eliminating the risk by not engaging in the activity that introduces the risk.
- This strategy is used when the risk has a high probability of occurrence and a high impact, making the cost of the risk too great to accept or mitigate.
### Risk transfer
- Involves shifting the risk to a third party. This often involves using insurance, outsourcing, or contracts to transfer the risk.
- This strategy is appropriate when the risk can be better managed or borne by another party who has the expertise or capacity to handle it.
### Risk mitigation
- Involves taking steps to reduce the likelihood and/or impact of the risk. This is done through proactive measures and controls.
- Involves taking steps to reduce the likelihood and/or impact of the risk. This is done through proactive measures and controls.
### Risk acceptance
- Involves choosing to accept the risk without taking any immediate action to mitigate it.
- This strategy is appropriate for low-probability or low-impact risks where the cost of mitigation would exceed the potential loss.



