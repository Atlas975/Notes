---
aliases:
  - AI
  - ML
tags:
---

> [!important]- Metadata
> **Tags:** #StatisticalLearning 
> **Located:** MachineLearning/ArtificialIntelligence
> **Created:** 15/10/2023 - 12:13
> ```dataviewjs
> let f = dv.current().file;
> let paths = new Set([...f.inlinks, ...f.outlinks].map(p => p.path).filter(p => !p.endsWith(".png")));
> paths.delete(f.path);
> dv.table(["Connections", "Tags"], [...paths].map(p => [dv.fileLink(p), dv.page(p).file.tags.join("")]));

___
# Artificial intelligence
- The field that studies the synthesis and analysis of computational agents that act intelligently
- Numerous alternate definitions exist for AI to encompass all of it's capabilities and subfields, most of which involve it's relation to agents 

![[Pasted image 20231015121627.png|550|550]]

## Agents
- An agent acts (does something) in its environment 
- An agent is **Intelligent** if it's able to adapt to it's environment. An Intelligent agent should:
	1. Makes actions appropriate for circumstances and goals 
	2. Be flexible to changes in environment 
	3. Learn from experience 
	4. Make appropriate choices given it's limitations (perceptual / computational )
- An agent is **rational** achieves the best outcome when uncertainty is involved. AI focuses on building the general principles for rational agent and how to construct them.
- A **Computational** agent makes decisions that can be explained and implemented through computation eg [[Markov_chains|markov chains]]. These decisions should be able to be broken down

## AI goals
- **Scientific goal**: understand the principles of intelligent behaviour often by analysis of other intelligent agents and experimentation. Focused on building only empirical systems  
- **Engineering goal**: concerned with constructing intelligent agents that can be used in real-world applications.

## Business benefits of AI
- Workflow automation (eliminate repetitive tasks)
- Enhance creative tasks (allow more creative exploration)
- Increase accuracy (minimise human error)
- Improve predictions (accurately evaluate choices and risks)

## Ethical concerns with AI 
- Explainability (AI output needs to be explainable if it's responsible for decision making)
- Human biases and prejudices (may result from the type of data fed)
- Job loss (technological social responsibility exists for AI to be useful for society)
## Machine learning
- Original AI systems were primarily rule based, machine learning allows for a logical mapping from data to output to be created by a system itself
- Machine learning can be defined as:

>A computer is said to learn from experience **E** with respect to task **T** and some performance measure **P**, if its performance on **T**, as measured by **P**, improved with experience **E**

![[Pasted image 20231015130758.png|450|450]]

- Machine learning relies on **imperative knowledge** (generalisations) which is the process of deducing new facts from old facts but is limited by the accuracy of the deduction process
- This can often work better than **declarative knowledge** (memorisation) as this is limited by both the time to observe and memory to store information 
## Supervised learning
- Algorithms that learn to map input to a correct output 
- Data is presented with correctly labeled output in order to train a model 
- Two main categories include **regression** (continuous) and **classification** (discrete)

![[Pasted image 20231015131521.png|500|500]]
## Unsupervised learning 
- Only input data is fed with no corresponding label to the correct output. 
- Data is presented with the algorithm itself modelling the underlying structure with the data
- Two main categories include **clustering** (group data by similarities) and **association** (find rules that describe large portions of data ) 

## Semi-supervised learning 
- Mix of labeled and unlabelled data, relies on a flexible algorithm that can incorporate both 
- Frequently used as total labelling can often be expensive 