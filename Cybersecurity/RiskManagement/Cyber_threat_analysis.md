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
- The process of threat assessment, this is needed to inform the [[Risk_management|risk management]] process to identify likely threat culprits 
- A threat actor can be either malicious or accidental and has the opportunity to exploit potential [[Vulnerability_analysis|vulnerabilities]] in a system
## Time analysis
- Cyber threats can be challenging to prepare for due to having an unobservable build up and a lower threshold to initiate than physical attacks
- The flexibility of being able to attack from any location without having to move physical resources can also make planning against these attacks difficult
- Overall, the short timescale to deploy attacks means that preparation must be done beforehand 
## Intelligence creation
- The process by which raw data is turned into actionable insights for decision-makers
- This generally follows several key stages 
	1. **Planning and direction**: Identify the intelligence needs of decision-makers / set priorities
	2. **Collection**: collect raw data from various sources
	3. **Processing**:  transform raw data into a usable format eg translation, decryption
	4. **Analysis**: evaluate and interpret processed data to identify patterns, trends, and anomalies
	5. **Dissemination**: share the analysed intelligence with relevant decision-makers 

![[Pasted image 20240430205356.png|300|300]]
- This cycle is continuous and iterative, allowing for constant refinement and adaptation based on new information and changing needs
- The goal is to provide decision-makers with accurate, timely, and relevant intelligence to inform policy and operational decision

### Intelligence funnel 
- The intelligence cycle model fails to consider real-time policy decision-making.  The funnel model addresses these issues by incorporating the external environment and continuous feedback 
- This better reflects the dynamic nature of intelligence processing and policy-making and is also able to handle potential counter-intelligence efforts.

![[Pasted image 20240430205553.png|300|300]]
## Data sources
- Data sources are required for intelligence that's fed into threat analysis
- These vary in both structure (ease of processing) and trustworthiness 
- Untrustworthy data can still be of use by assigning a lower weight to it's priority

![[Pasted image 20240430205811.png|300|300]]

## Threat maturity
- Measures how mature an organisation is in intercepting threats 
- This can be represented by levels of increasing robustness

![[Pasted image 20240430210154.png|350|350]]
