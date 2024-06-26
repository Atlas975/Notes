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
## AI approaches 
- **Thinking humanely**: focused on emulating the way humans think, mimicking mental processes such as learning (eg [[Neural_networks|neural nets]])
- **Think rationally**: focused on using logical reasoning to achieve outcomes, rooted in the use of rational and explainable principles (eg [[Finite_state_machines|FSM's]])
- **Acting humanely**: focused on making performing tasks indistinguishable from those performed by humans, exhibiting human like behaviour (eg [[Turing_thesis|Turing test benchmark]])
- **Act rationally**: focused on taking actions that lead to the best possible outcomes given the information and resources available (eg [[Decision_trees|decision trees]])

![[Pasted image 20231015121627.png|550|550]]
## Agents
- An agent acts (does something) in its environment 
- An agent is **Intelligent** if it's able to adapt to it's environment. An Intelligent agent should:
	1. Makes actions appropriate for circumstances and goals 
	2. Be flexible to changes in environment 
	3. Learn from experience 
	4. Make appropriate choices given it's limitations (perceptual / computational )
- An agent is **rational** achieves the best outcome when uncertainty is involved. AI focuses on building the general principles for rational agent and how to construct them.
- A **Computational** agent can make explainable decisions and is implemented through computation eg [[Markov_chains|Markov chains]]. These decisions should be able to be broken down

## AI goals
- Two primary types of goals exists in AI, scientific and engineering. Each of these goals aims to achieve distinct objectives within the broader field of AI.
- Both of these goals also feed into each other, creating new tasks for the other to solve
### Scientific goals 
- Focused on understanding the principles of intelligent behaviour 
- This involves designing, building and experimenting with computational agents 
### Engineering goals 
- Focuses on the building of practical intelligent agents to perform tasks 
- This involves seeking to improve the productivity with useful applications
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
- Involves learning to map input data to the correct output using labelled training data 
- Evaluates based on the discrepancy between the model’s predictions and the actual labels
- Two main categories include:
    - **Regression**: used for continuous data
    - **Classification**: used for discrete data

![[Pasted image 20231015131521.png|500|500]]
## Unsupervised learning 
- Involves finding hidden patterns / intrinsic structures in unlabelled training data
- This is useful for exploratory data analysis to understand the data distribution
- Two main categories include:
    - **Clustering**: group data by similarities 
    - **Association** find rules that describe large portions of data
## Semi-supervised learning 
- Mix of labeled and unlabelled data, relies on a flexible algorithm that can incorporate both 
- Frequently used as total labelling can often be expensive 
## Flexibility vs interpretability tradeoff
- Flexibility describes how complex a model can be eg a quadratic function is more flexible than a linear one. Useful for pure prediction eg stock prices
- Interpretability describes how easy the model is to understand, making it easier to interpret how an individual predictor effects a response. Useful for inference eg sales factors

![[Pasted image 20220225155757.png|450|450]]