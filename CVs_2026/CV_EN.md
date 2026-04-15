HAOMING ZHANG
Atlanta, GA | 919-869-6104 | zhm0044@gmail.com | Portfolio
EDUCATION
Georgia Institute of Technology — M.S. in Computer Science, GPA 3.8/4.0      			                   2023 – 2026 
University of North Carolina at Chapel Hill — M.S. in Biostatistics, GPA N/A				     2019 – 2021   	    
Nanjing University — B.S in Biological Science, GPA 4.3/5.0       		     	   		 	     2011 – 2016
HIGHLIGHT
•	AI engineer with a strong foundation in machine learning and statistics, specializing in agentic AI workflows and intelligent data-automation platforms.
•	Designed and implemented multi-agent LLM systems (LangGraph, SGLang) with tiered memory and Agentic RAG, enabling context-aware reasoning and reliable tool integration at production scale.
•	Proficient in Python, SQL, and R; background in statistics enables rigorous model evaluation and experimental design for AI systems.
•	Deployed and benchmarked large language models (Qwen-Max, Deepseek V3), evaluating throughput and tool-call reliability under concurrent, multi-agent workloads.
•	Experienced in post-training alignment (RLHF, GRPO) for specialized policy models, with hands-on production deployment of agentic pipelines.
TECHNICAL SKILLS & KNOWLEDGE
Agentic AI & LLM Systems: Multi-Agent Orchestration, LangGraph, LLM Tool-Calling, Agentic RAG, MCP (Model Context Protocol), Agent Memory Systems, Structured Reasoning & SQL Generation, Prompt Engineering
Reinforcement Learning & Post-Training: RLHF, GRPO, PPO, Preference Learning, Reward Modeling
Machine Learning: Deep Learning (PyTorch, TensorFlow), NLP & NER, Computer Vision
Systems & Engineering: Python, SQL, R, Java, SAS, Docker, Nginx, MySQL, Redis, AWS, ETL Pipelines, JSON Schema, Playwright
WORK EXPERIENCE
AI Engineer | R2.AI, Shanghai							              	    	  June 2025 — Present
•	Multi-Agent Architecture for Conversational Pipeline Generation: Designed a two-agent system — a conversational orchestrator (multi-turn intent classification, session state management, production-state bootstrapping) and a pipeline execution specialist — enabling stateful, iterative data workflow construction through natural language.
•	Tool-Call-Based Agentic Planning with Self-Correction: Designed an iterative planning loop with intent-classified tool scoping, structured execution feedback, and automatic full-replan fallback on convergence failure — applying standard reliability patterns for production agentic systems.
•	Agent Memory & Tiered Retrieval: Designed a context system with full short-term history, LLM-as-judge long-term memory and domain knowledge (stored as structured skill files); MCP-wrapped Traditional RAG serves as the fast retrieval path, with Agentic RAG fallback for progressive multi-hop skill document search on insufficient context.
•	RLHF for SQL Generation: Fine-tuned Qwen Coder 1.5B via GRPO (AgentLightning) to learn a self-correcting SQL generation loop, achieving reliable Spark-executable output and decoupling this high-frequency task from general-purpose LLM inference.
•	LLM Inference Optimization: Enforced output determinism via JSON-Schema guardrails for structured tool calls; benchmarked Qwen-Max on SGLang to maximize throughput under high-concurrency agentic workloads.
Biostatistician | Parexel, Durham, NC							    	    July 2021 — Feb 2025
•	Conducted statistical modeling for oncology clinical trials, building and maintaining survival models (Cox regression, Kaplan–Meier) and causal inference models (propensity score matching) for over 2,000 patients; handled missing data to support efficacy evaluation and risk prediction.
•	Designed and implemented hypothesis testing (A/B testing), linear and generalized linear mixed-effects models, as well as ANCOVA, for neurological clinical trials to analyze changes in cognitive scores and guide dose adjustment.
•	Integrated large-scale data from electronic medical records, lab tests, and follow-up logs using SQL and R to assess treatment efficacy and safety across multiple data sources.
•	Developed SQL, R, and SAS programs for data analysis and visualization, producing high-quality deliverables.
•	Authored and reviewed Statistical Analysis Plans (SAPs), maintained SDTM and ADaM data standards.
Graduate Research Assistant, UNC – Chapel Hill 						   Jan 2021 — May 2021
•	Analyzed risk factors for SARS-CoV-2 household transmission in North Carolina (~500 participants).
•	Processed data in R, created visualizations (ggplot2), and performed statistical analysis (mixed models, ICC).
PROJECTS 
Fresh Produce Delivery Management System (Java, Spring Boot)
•	Built a delivery management backend from scratch using Java, Spring Boot, and REST APIs, implementing core business workflows including order placement, delivery tracking, and returns processing.
•	Applied UML class diagrams and sequence diagrams for system design, enforcing clear module boundaries to improve maintainability and extensibility.
•	Containerized services with Docker for multi-instance deployment; configured Nginx as load balancer and reverse proxy to handle high-concurrency traffic.
Human retina cell clustering using machine learning methods (R, ML)		
•	Conducted unsupervised learning analysis on scRNA-seq data to classify human retinal cells. 
•	Applied multiple clustering algorithms, including tSNE + Kmeans, CCA + Seurat, and SAME-clustering methods to identify the pattern in high dimensional data and classify human retinal cell types.
•	Validated the reliability of clustering results using Random Forest, ensuring accuracy. 
•	Benchmarked the clustering results against Menon et al. (2019), achieving accuracy with Adjusted Rand Index of 0.967.
Compare three degrees of freedom approximations used in the joint mixed effect logistic regression model (SAS)
•	Developed a SAS macro to evaluate mixed effect logistic regression models in a meta-analysis context.
•	Used grid search to identify the optimal degrees of freedom approximations (Kenward-Roger and Between-Within) for the mixed-effect model, improving predictive accuracy. 
•	Evaluated model performance under varying cluster sizes, optimizing data-driven decision-making.
•	Interpreted complex statistical formulas to explain the differences in model performance across different cluster sizes, providing deeper insights into their applicability. 
PUBLICATION 
•	Household Transmission of Sars-cov-2 in the United States: Living Density, Viral Load, and Disproportionate Impact On Communities of Color. 2021. https://doi.org/10.17615/x61s-er87
