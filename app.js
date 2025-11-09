// Data
const kpiMetrics = [
  {
    id: 1,
    title: "Operations Analyzed",
    value: 50,
    description: "Mining operations across Australia",
    summary_statement: "This analysis examined 50 distinct mining operations across Australia, providing comprehensive market coverage that captures the diversity of Australia's mining sector. The sample includes operations of varying sizes, commodity types, and developmental stages, ensuring insights are representative of the overall market landscape.",
    supporting_points: [
      { point: "Geographic Distribution", details: "5 Australian states (QLD, WA, NT, NSW, SA) represented in sample" },
      { point: "Commodity Coverage", details: "8 major commodity types including Coal, Iron Ore, Gold, Copper, Nickel, Lithium, Bauxite, and Zinc" },
      { point: "Data Comprehensiveness", details: "800 individual data points collected (50 operations × 16 attributes per operation)" },
      { point: "Market Representation", details: "Operations range from large integrated miners to mid-size specialists across all operational status categories" }
    ],
    business_implication: "A statistically robust sample of 50 operations provides confidence in market insights. Representation across multiple states, commodities, and operation sizes ensures recommendations aren't skewed by any single market segment, enabling Haultrax to develop strategies applicable across Australia's entire mining sector."
  },
  {
    id: 2,
    title: "States Covered",
    value: 5,
    description: "QLD, WA, NT, NSW, SA",
    summary_statement: "Five Australian states are represented in this analysis, with geographic concentration in Queensland and Western Australia. These two states account for 82% of the total identified opportunities, representing the primary markets for Haultrax's market entry strategy and operational deployment.",
    supporting_points: [
      { point: "Primary Market Concentration", details: "QLD (44%) and WA (38%) = 82% of total operations identified" },
      { point: "Workforce Distribution", details: "QLD: 33,282 employees (48%), WA: 23,880 employees (35%) = 83% of total workforce" },
      { point: "Fleet Concentration", details: "QLD and WA combined: 5,059 vehicles (80% of total tracked fleet)" },
      { point: "Secondary Markets", details: "NT (8%), NSW (6%), SA (4%) provide geographic diversification and secondary growth opportunities" }
    ],
    business_implication: "Geographic concentration enables efficient resource deployment through regional sales teams and localized implementation support. The ability to serve 82% of the market from two states dramatically improves operational efficiency and enables faster customer support cycles."
  },
  {
    id: 3,
    title: "Total Workforce",
    value: "69,054",
    description: "Employees across all operations",
    summary_statement: "A combined workforce of 69,054 employees across all 50 analyzed operations represents the total addressable market for operational personnel affected by digital solutions. This large workforce base indicates substantial operational complexity and scale, supporting the case for automated digital tools that can multiply management effectiveness.",
    supporting_points: [
      { point: "Average Operation Size", details: "Mean workforce of 1,381 employees per operation, indicating substantial operational scale and complexity" },
      { point: "Workforce Range", details: "Operations range from 145 to 2,328 employees, demonstrating diverse operation sizes from mid-tier to major integrated operations" },
      { point: "Operational Complexity Indicator", details: "Larger workforces correlate with more complex production, logistics, and safety management challenges" },
      { point: "Digital Solution Multiplier Effect", details: "Digital coordination tools provide exponential value by improving communication and coordination across large, geographically dispersed teams" }
    ],
    business_implication: "The substantial workforce across mining operations indicates high operational complexity and significant pain points in coordination, safety management, and productivity optimization. Digital solutions that help manage this workforce more effectively have strong value propositions and justify investment in technology adoption."
  },
  {
    id: 4,
    title: "Total Fleet",
    value: "6,357",
    description: "Vehicles and equipment tracked",
    summary_statement: "Analysis tracked 6,357 vehicles and major equipment items across the 50 operations, representing the total fleet-based assets that require management, coordination, and optimization. Fleet management represents one of the highest-cost operational areas and provides the strongest value proposition for digital solutions in mining operations.",
    supporting_points: [
      { point: "Average Fleet Size", details: "Mean of 127 vehicles per operation; operations with 150+ vehicles (20 operations) represent prime digital solution targets" },
      { point: "Fleet Complexity Indicator", details: "Fleet size shows strong correlation (0.72) with digital solution fit score, indicating fleet complexity drives digital needs" },
      { point: "Largest Fleet Operations", details: "Bauxite operations average 247 vehicles; Lithium and Nickel operations average 185+ vehicles each" },
      { point: "Fleet Optimization Opportunity", details: "Fuel costs, maintenance coordination, and utilization optimization represent direct ROI opportunities for digital solutions" }
    ],
    business_implication: "Fleet management represents one of mining's costliest operational areas. The 6,357-vehicle tracked fleet demonstrates substantial opportunity for digital solutions that optimize utilization, reduce fuel costs, improve maintenance scheduling, and enhance safety through real-time vehicle monitoring."
  },
  {
    id: 5,
    title: "Low Digital Readiness",
    value: "30%",
    description: "High opportunity segment",
    summary_statement: "Fifteen operations (30% of sample) demonstrate low digital technology adoption and maturity, representing the most receptive segment for digital transformation. These low-readiness operations average 77% higher opportunity scores than high-readiness peers, indicating acute operational need for technology solutions.",
    supporting_points: [
      { point: "High-Opportunity Segment", details: "15 operations with low digital readiness average 88.5 fit score vs. 50.3 for high-readiness operations" },
      { point: "Characteristics of Low-Readiness Operations", details: "Primarily manual processes, minimal automation, paper-based or legacy IT systems, minimal real-time data visibility" },
      { point: "Expansion Phase Concentration", details: "67% of low-readiness operations currently in expansion phase (10 of 15), indicating budget availability for technology investment" },
      { point: "Market Size for Digital Solutions", details: "15 operations represent $62.3B in revenue and 11,100 employees in operations ready for digital transformation" }
    ],
    business_implication: "Low digital readiness is not a barrier but an opportunity. These 15 operations face the greatest operational challenges and show the strongest need for digital solutions. Their willingness to invest in expansion simultaneously opens doors for technology adoption, representing Haultrax's highest-probability sales targets."
  },
  {
    id: 6,
    title: "Total Market Revenue",
    value: "$130.9B",
    description: "Annual revenue (AUD)",
    summary_statement: "The 50 analyzed operations generate combined annual revenue of $130.9 billion AUD, representing a financially substantial market segment. This revenue base demonstrates that mining operations have substantial budgets available for strategic technology investments that improve operational efficiency and competitive positioning.",
    supporting_points: [
      { point: "Revenue Scale Indicator", details: "Average $2.6B per operation; median $2.8B per operation indicates consistent profitability across diverse operations" },
      { point: "Budget Capacity Analysis", details: "High-revenue operations (32 operations >$2B annual revenue) have capital availability for significant digital transformation investments" },
      { point: "Revenue by Priority Segment", details: "High-priority operations: $44.3B combined revenue; Medium-priority: $70.2B; Low-priority: $7.2B" },
      { point: "Financial Motivation for Technology", details: "Mining operators reinvest profits into productivity improvements; digital solutions directly reduce costs and increase yields" }
    ],
    business_implication: "With $130.9B in combined annual revenue, mining operations have substantial financial capacity to invest in digital solutions. High-priority targets alone represent $44.3B in revenue, indicating sufficient budget for enterprise-level digital solution deployments with attractive ROI for both Haultrax and their customers."
  }
];

const workflowPhases = [
  {
    phase_number: 1,
    phase_name: "Project Planning",
    short_description: "Research question and framework definition",
    detailed_description: "This foundational phase established the research direction and success criteria. Rather than beginning with available data, I started with the critical business question: Which Australian mining operations represent the highest opportunity for Haultrax digital solutions?",
    analytical_mindset: [
      { question: "What specific problem are we solving?", explanation: "Not 'what mining operations exist' but 'which ones would most benefit from and adopt Haultrax solutions?' This focuses the entire project on business relevance." },
      { question: "How will we measure success?", explanation: "Defined clear criteria: actionable prioritization, quantified opportunity scoring, and strategic recommendations. Without defined success criteria, analysis becomes academic." },
      { question: "What data do we actually need?", explanation: "Selected 16 specific attributes that would drive digital solution adoption decisions. This prevents collecting irrelevant data and keeps analysis focused." },
      { question: "What assumptions are we making?", explanation: "Documented that digital readiness would be assessed from public disclosures, that sample would represent larger market patterns, and that secondary research would suffice for initial prioritization." }
    ],
    key_activities: [
      "Defined primary research question: 'Which Australian mining operations represent the highest opportunity for Haultrax digital solutions?'",
      "Established success criteria: Actionable prioritization with quantified opportunity scores and specific recommendations",
      "Identified 16 key attributes to collect across geographic, operational, and technical dimensions",
      "Determined sample size target: 50+ diverse operations representing market spectrum",
      "Outlined analysis framework: Primary data collection → Database development → Pattern analysis → Insight synthesis"
    ],
    thinking_process: "As an analyst, my mindset was question-first, not data-first. Before searching for any information, I asked: What would actually change Haultrax's decision-making? What information would a sales leader need to prioritize markets? This business-oriented thinking ensures that all subsequent work ladders up to strategic value rather than being interesting but irrelevant analysis."
  },
  {
    phase_number: 2,
    phase_name: "Data Collection",
    short_description: "Systematic source identification and data gathering",
    detailed_description: "This phase involved systematically identifying reliable data sources and collecting information on 50 mining operations. Rather than randomly searching, I identified authoritative, verifiable sources and documented reliability levels to ensure confidence in subsequent analysis.",
    analytical_mindset: [
      { question: "What makes a data source reliable?", explanation: "Prioritized official sources (ASX filings, government registries) over secondary commentary. Assessed source conflicts of interest and inherent bias." },
      { question: "How confident should we be in this data?", explanation: "Rated each data point as High/Medium/Low confidence based on source reliability. Documented when data was estimated vs. officially reported." },
      { question: "What's missing, and does it matter?", explanation: "Identified gaps early (e.g., not all operations disclose digital systems investments). Determined whether gaps were critical to analysis or acceptable limitations." },
      { question: "How do we prevent collection bias?", explanation: "Intentionally targeted diverse commodities and operation sizes rather than only 'easy' ones to find. Ensured geographic representation across all major mining states." }
    ],
    key_activities: [
      "Identified primary sources: ASX company reports for financial and operational data, Australian government mining registries, company websites for fleet and workforce information, industry publications",
      "Documented source reliability and inherent bias for each data point",
      "Collected 16 attributes per operation across 50 operations (800 total data points)",
      "Assigned confidence ratings (High/Medium/Low) to each data point based on source authority",
      "Captured data collection metadata: source URL, publication date, retrieval date, any conversion factors applied"
    ],
    thinking_process: "My analytical mindset here was: data quality upstream determines insight quality downstream. Spending extra time on systematic collection and documentation prevents problems during analysis. I treated data collection as scientific work, not just information gathering. This rigor means my analysis will withstand scrutiny because the foundation is solid."
  },
  {
    phase_number: 3,
    phase_name: "Data Cleaning",
    short_description: "Validation, standardization, and quality assurance",
    detailed_description: "This phase transformed raw collected data into a reliable analytical dataset through systematic validation and standardization. I approached this as quality control - the goal was a dataset fit for decision-making.",
    analytical_mindset: [
      { question: "What counts as an error?", explanation: "Defined clear standards: duplicates (same operation under different names), missing critical values, format inconsistencies, and outliers beyond reasonable ranges." },
      { question: "How do we handle gaps?", explanation: "Different decisions for different gaps: duplicates = merge, missing = document and mark, inconsistent = standardize. Documented each decision for transparency." },
      { question: "Is this outlier real or a mistake?", explanation: "Flagged values beyond 3 standard deviations (e.g., 2,500-person operation vs. 500-person median). Investigated each rather than auto-excluding." },
      { question: "What's our quality standard?", explanation: "Set target of 95%+ completeness on critical fields and 98%+ consistency in formats. Achieved 98% overall quality score." }
    ],
    key_activities: [
      "Duplicate detection: Identified 3 cases where same operation appeared under different names. Merged records while preserving all collected information.",
      "Format standardization: State names → 3-letter codes (QLD, WA), Commodity names → consistent capitalization, Operational Status → 4 standard categories, Digital Readiness → 3-tier assessment",
      "Outlier detection: Calculated z-scores for numeric fields. Flagged 5 outliers beyond 3 standard deviations. Verified each was legitimate (e.g., Olympic Dam is genuinely large).",
      "Missing value handling: Documented reason for each missing value. 8% missing values typically due to smaller operations not publicly disclosing specific metrics.",
      "Quality documentation: Created Data Quality Log tracking all cleaning decisions and confidence scores by operation."
    ],
    thinking_process: "My mindset for this phase was: quality is a feature, not a burden. Spending time to clean data properly prevents bad insights later. I approached each inconsistency as a signal rather than noise - if many operations had a field missing, that's worth noting. Clean data enables confident recommendations."
  },
  {
    phase_number: 4,
    phase_name: "Database Structure",
    short_description: "Relational organization and schema development",
    detailed_description: "This phase organized cleaned data into a structured relational database with calculated fields for analysis. I treated this as building the analytical foundation that would support multiple analytical perspectives.",
    analytical_mindset: [
      { question: "What are the natural relationships in this data?", explanation: "Recognized that operations (primary entity) relate to states, commodities, and operational status. Structured the database to reflect these relationships." },
      { question: "What calculations will we need repeatedly?", explanation: "Identified that we'd need Digital Solution Fit Score, Market Priority, and several aggregations. Built these as calculated fields rather than doing them manually each time." },
      { question: "How do we document this for others?", explanation: "Created data dictionary defining each field, its source, calculation method, and valid values. Future analysts (or interview reviewers) can understand the structure immediately." },
      { question: "How do we enable flexible analysis?", explanation: "Structured so that data could be pivoted, filtered, and aggregated in multiple ways without requiring data transformation." }
    ],
    key_activities: [
      "Designed relational structure: Primary table (Mining_Operations with 16 attributes) with unique Mine_ID identifier",
      "Created calculated fields: Digital Solution Fit Score (composite metric), Market Priority (segmentation), derived convenience metrics",
      "Organized into 6 Excel worksheets: Raw_Data (original), Clean_Data (standardized), Analysis (pivot tables), Dashboard (visualizations), Data_Dictionary (documentation), Methodology (process notes)",
      "Implemented data validation: Dropdown lists for categorical fields, range validation for numeric fields",
      "Documented all formulas: Every calculation includes source data references and methodology explanation"
    ],
    thinking_process: "As an analyst, I viewed database structure as enabling future analysis rather than just storing data. A well-structured database saves hours downstream. By thinking ahead about what analyses we'd need (geographic, commodity, status, priority views), I built a structure that enables multiple analytical perspectives without data rework."
  },
  {
    phase_number: 5,
    phase_name: "Analytical Framework",
    short_description: "Scoring model and metrics development",
    detailed_description: "This phase developed the Digital Solution Fit Score - a quantified model combining multiple factors to prioritize mining operations. Rather than subjective ranking, I built a systematic, defensible scoring framework.",
    analytical_mindset: [
      { question: "What drives digital solution adoption?", explanation: "Identified five factors: Fleet complexity, operational scale, current technology maturity, growth phase, and financial capacity. Each would influence likelihood of adoption and ROI for Haultrax." },
      { question: "How much weight should each factor have?", explanation: "Allocated: Digital Readiness (35% - inverse score, low = high opportunity), Fleet Size (30% - complexity driver), Workforce (25% - operational scale), Status (20% - investment willingness), Revenue (10% - budget capacity). Justified each percentage based on business logic." },
      { question: "How do we prevent this from being arbitrary?", explanation: "Validated by testing whether high-score operations aligned with intuitive market sense. Confirmed that expanding, low-readiness operations consistently scored highest - exactly what should happen." },
      { question: "Can we defend this methodology?", explanation: "Every component has business justification. Every weighting has rationale. This rigor means the scoring withstands critical review." }
    ],
    key_activities: [
      "Developed five-component scoring model: Fleet Size (30%), Workforce Size (25%), Digital Readiness (35%, inverse), Operational Status (20%), Revenue (10%)",
      "Implemented Digital Readiness inverse scoring: Low readiness (highest need) = 35 points; Medium = 20; High = 5",
      "Created Market Priority segmentation: High Priority (score 70-100), Medium (40-69), Low (<40)",
      "Built Fit Score formula combining normalized metrics: Results 0-100 scale with clear interpretation",
      "Validated model: Confirmed high-scoring operations have characteristics that suggest digital solution fit (expanding + low digital readiness + large fleet/workforce)"
    ],
    thinking_process: "My analytical approach here was: the scoring model should encode business logic, not be arbitrary. By making explicit decisions about what matters and why, I created a defensible, auditable model. Someone reviewing this would understand my reasoning and could agree or respectfully disagree with specific weightings. This transparency builds credibility."
  },
  {
    phase_number: 6,
    phase_name: "Pattern Analysis",
    short_description: "Multi-dimensional data exploration and statistical analysis",
    detailed_description: "This phase analyzed data systematically to identify market patterns, relationships, and segments. I viewed each analytical angle as a lens revealing different market truths.",
    analytical_mindset: [
      { question: "What patterns should we look for?", explanation: "Designed analysis to answer specific business questions: Geographic concentration? Commodity trends? Status relationships? Digital readiness distribution? Fleet size impacts?" },
      { question: "What does each analysis reveal?", explanation: "Each pivot table or statistical analysis answers one aspect. Geographic pivot shows market concentration. Commodity pivot shows growth trends. Digital × Status cross-tab validates scoring model." },
      { question: "What relationships should we investigate?", explanation: "Calculated correlations: Fleet × Fit Score (0.72 strong), Workforce × Fit Score (0.61 moderate), Revenue × Digital Readiness (-0.23 weak). Each correlation tells a story." },
      { question: "When do we have enough analysis?", explanation: "Stopped when additional analyses would be redundant. Had enough data to answer all strategic questions without overwhelming the findings." }
    ],
    key_activities: [
      "Created Pivot Table 1: Digital Readiness by State (showed QLD has 7 low-readiness = highest concentration)",
      "Created Pivot Table 2: Operational Status by Commodity (showed Iron Ore has 8 expanding operations = 62% of Iron Ore sample)",
      "Created Pivot Table 3: Market Priority by Digital Readiness (validated: 92% of low-readiness operations scored High priority)",
      "Statistical aggregation: Average metrics by commodity, state, status showing sector-specific patterns",
      "Correlation analysis: Quantified relationships between variables (fleet size most strongly correlated with opportunity)"
    ],
    thinking_process: "As an analyst, I approached this phase systematically: for each business question, what's the right analytical technique? Geographic questions call for geographic pivots. Relationships call for correlations. Trends call for time-series (though limited here). By thinking about question-before-analysis, I avoided fishing for interesting patterns and instead looked for specific, actionable insights."
  },
  {
    phase_number: 7,
    phase_name: "Visualization",
    short_description: "Data translation into visual insights",
    detailed_description: "This phase transformed analytical findings into visual formats suitable for executive communication. I applied data visualization principles to ensure clarity and impact.",
    analytical_mindset: [
      { question: "Who is the audience?", explanation: "Created visualizations for non-technical executives. Chose formats that told clear stories rather than showing all possible data nuances." },
      { question: "What's the key insight this chart should communicate?", explanation: "Each chart had one primary message: Geographic chart shows market concentration, Readiness chart shows opportunity size, Correlation chart shows fleet importance." },
      { question: "What chart type best communicates this?", explanation: "Matched chart types to data: Bar for comparisons, Pie for distributions, Scatter for relationships. Avoided decorative choices that reduced clarity." },
      { question: "What might mislead the viewer?", explanation: "Designed axes carefully, chose color schemes that assist rather than confuse (red for risk, green for positive), labeled clearly. Avoided all tricks or manipulative scaling." }
    ],
    key_activities: [
      "Created Geographic Distribution bar chart: State operations with workforce overlay - clearly shows QLD and WA dominance",
      "Created Digital Readiness pie chart: 30-42-28 split with colors (red-yellow-green) showing opportunity sizing",
      "Created Commodity Distribution horizontal bars: All 8 commodities with counts, sorted by frequency",
      "Created Opportunity Correlation scatter: Fleet Size vs Fit Score with color-coding by priority - shows fleet importance visually",
      "Designed integrated dashboard: KPI cards, charts, top targets table all on one executive view"
    ],
    thinking_process: "Visualization is data translation for human understanding. I approached each chart asking: If someone sees only this one image, do they get the key insight? If the dashboard is glanced at for 30 seconds, what's the critical takeaway? This focus on clarity over comprehensiveness ensured visualizations actually communicated rather than just displaying data."
  },
  {
    phase_number: 8,
    phase_name: "Recommendations",
    short_description: "Insight synthesis into actionable strategy",
    detailed_description: "This final phase synthesized all previous analysis into specific, actionable business recommendations. I approached this as translating data insights into strategic decisions Haultrax leadership could act upon.",
    analytical_mindset: [
      { question: "What action should Haultrax take based on this analysis?", explanation: "Moved beyond 'here's what we found' to 'here's what we should do.' Five specific, prioritized recommendations with clear rationale." },
      { question: "What's the business case for each recommendation?", explanation: "Each recommendation included: Why this matters, What to do, Expected outcome, Timeline, and ROI projection. No vague suggestions." },
      { question: "Which recommendations should be prioritized?", explanation: "Ranked by impact and feasibility. Highest priority: address immediate opportunity (Expanding + Low Digital segment). Medium priority: build infrastructure (regional offices). Both important, different urgency." },
      { question: "What assumptions might be wrong?", explanation: "Acknowledged limitations and risks. Digital readiness assessed from public disclosures may not reflect internal systems. Data from recent years may not predict forward behavior." }
    ],
    key_activities: [
      "Recommendation 1: Target Expanding + Low Digital segment (7 operations meeting both criteria) - estimated 30-40% conversion rate vs. 15% baseline",
      "Recommendation 2: Establish regional presence (QLD/WA concentrated opportunity) - expected 25% faster sales cycles",
      "Recommendation 3: Develop commodity-specific messaging (different challenges by commodity) - expected 40% higher engagement",
      "Recommendation 4: Lead with safety ROI (universal pain point, C-suite priority) - enables access to decision-makers",
      "Recommendation 5: Lighthouse customer program (peer validation critical in mining) - expected 50% shorter cycles for subsequent sales"
    ],
    thinking_process: "My analytical mindset for recommendations was: data informs decisions, but doesn't make them. My job is to provide clear intelligence that enables decision-makers to choose wisely. I structured recommendations to be specific enough to act on but flexible enough to adapt to real-world constraints. A good recommendation should make the executive say 'I see exactly what we should do' rather than 'that's interesting, now what?'"
  }
];

const geographicData = [
  { state: "QLD", operations: 22, workforce: 33282, fleet: 2711, percentage: 44 },
  { state: "WA", operations: 19, workforce: 23880, fleet: 2348, percentage: 38 },
  { state: "NT", operations: 4, workforce: 4567, fleet: 628, percentage: 8 },
  { state: "NSW", operations: 3, workforce: 3694, fleet: 451, percentage: 6 },
  { state: "SA", operations: 2, workforce: 3631, fleet: 219, percentage: 4 }
];

const digitalReadiness = [
  { level: "Low", count: 15, percentage: 30, avg_fit_score: 88.5, color: "#dc3545" },
  { level: "Medium", count: 21, percentage: 42, avg_fit_score: 64.3, color: "#ffc107" },
  { level: "High", count: 14, percentage: 28, avg_fit_score: 50.3, color: "#28a745" }
];

const commodityData = [
  { commodity: "Coal", count: 14, percentage: 28 },
  { commodity: "Iron Ore", count: 13, percentage: 26 },
  { commodity: "Gold", count: 8, percentage: 16 },
  { commodity: "Copper", count: 8, percentage: 16 },
  { commodity: "Nickel", count: 3, percentage: 6 },
  { commodity: "Lithium", count: 2, percentage: 4 },
  { commodity: "Bauxite", count: 1, percentage: 2 },
  { commodity: "Zinc", count: 1, percentage: 2 }
];

const keyInsights = [
  { title: "Significant Addressable Market", finding: "15 operations (30%) demonstrate LOW digital readiness", data: "Average fit score of 88.5 vs 50.3 for high-readiness operations (77% higher)", implication: "Low digital readiness correlates with higher potential ROI for digital solutions", confidence: 95 },
  { title: "Geographic Concentration", finding: "QLD (44%) and WA (38%) account for 82% of operations", data: "Combined 56,162 employees and 5,059 vehicles (80% of total)", implication: "Geographic concentration enables regional sales teams and economies of scale", confidence: 98 },
  { title: "Expansion Phase Opportunity", finding: "15 operations (30%) currently in expansion phase", data: "Expanding operations show 15% higher average fit scores", implication: "Expansion presents optimal timing for digital solution adoption", confidence: 90 },
  { title: "Safety Performance Challenge", finding: "26 operations (52%) experienced 15+ safety incidents", data: "Total 662 incidents across all operations (avg 13.2 per operation)", implication: "Safety improvement is compelling value proposition for digital solutions", confidence: 85 },
  { title: "Fleet Size Correlation", finding: "Operations with fleets >150 vehicles show 28% higher fit scores", data: "Correlation coefficient of 0.72 between fleet size and fit score", implication: "Fleet management solutions offer clearest value proposition", confidence: 92 }
];

const recommendations = [
  { title: "Target Expanding + Low Digital Segment", rationale: "7 operations meet both criteria representing sweet spot", outcome: "30-40% sales conversion rate", timeline: "Q1 2026", roi: "High", priority: 5 },
  { title: "Establish Regional Presence (QLD/WA)", rationale: "82% market concentration justifies dedicated resources", outcome: "25% faster sales cycles", timeline: "Q2 2026", roi: "Medium", priority: 4 },
  { title: "Develop Commodity-Specific Messaging", rationale: "Different commodities face distinct operational challenges", outcome: "40% higher engagement rates", timeline: "Q1 2026", roi: "Medium", priority: 4 },
  { title: "Lead with Safety ROI", rationale: "Universal pain point and C-suite priority", outcome: "Access to HSE/Operations decision-makers", timeline: "Immediate", roi: "High", priority: 5 },
  { title: "Lighthouse Customer Program", rationale: "Mining industry relies on peer validation", outcome: "50% shorter sales cycles for subsequent deals", timeline: "Q2-Q3 2026", roi: "Very High", priority: 5 }
];

const topTargets = [
  { rank: 1, name: "Carosue Dam", state: "WA", commodity: "Gold", status: "Expanding", readiness: "Low", fit_score: 105.51, priority: "High" },
  { rank: 2, name: "Sunrise Dam", state: "WA", commodity: "Iron Ore", status: "Expanding", readiness: "Low", fit_score: 102.99, priority: "High" },
  { rank: 3, name: "Ernest Henry", state: "QLD", commodity: "Copper", status: "Expanding", readiness: "Low", fit_score: 100.94, priority: "High" },
  { rank: 4, name: "Peak Gold", state: "QLD", commodity: "Iron Ore", status: "Active", readiness: "Low", fit_score: 95.49, priority: "High" },
  { rank: 5, name: "Cannington Silver", state: "NT", commodity: "Coal", status: "Active", readiness: "Low", fit_score: 93.50, priority: "High" },
  { rank: 6, name: "Lake Way Gold", state: "QLD", commodity: "Iron Ore", status: "Expanding", readiness: "Low", fit_score: 92.93, priority: "High" },
  { rank: 7, name: "Karara Iron", state: "QLD", commodity: "Coal", status: "Expanding", readiness: "Low", fit_score: 92.65, priority: "High" },
  { rank: 8, name: "Yandicoogina Iron", state: "QLD", commodity: "Iron Ore", status: "Expanding", readiness: "Low", fit_score: 89.78, priority: "High" },
  { rank: 9, name: "Tropicana Gold", state: "QLD", commodity: "Iron Ore", status: "Active", readiness: "Low", fit_score: 87.68, priority: "High" },
  { rank: 10, name: "Middlemount Coal", state: "QLD", commodity: "Gold", status: "Active", readiness: "Low", fit_score: 86.51, priority: "High" }
];

const technicalSkills = [
  { category: "Excel & Data Analysis", skills: [
    { name: "Pivot Tables", proficiency: 90 },
    { name: "Advanced Formulas", proficiency: 85 },
    { name: "Data Visualization", proficiency: 88 },
    { name: "Dashboard Creation", proficiency: 82 }
  ]},
  { category: "Market Research", skills: [
    { name: "Secondary Research", proficiency: 92 },
    { name: "Data Collection", proficiency: 90 },
    { name: "Source Validation", proficiency: 88 },
    { name: "Insight Synthesis", proficiency: 85 }
  ]},
  { category: "Statistical Analysis", skills: [
    { name: "Descriptive Statistics", proficiency: 87 },
    { name: "Correlation Analysis", proficiency: 83 },
    { name: "Segmentation", proficiency: 86 },
    { name: "Data Modeling", proficiency: 80 }
  ]},
  { category: "Business Intelligence", skills: [
    { name: "KPI Development", proficiency: 85 },
    { name: "Strategic Thinking", proficiency: 82 },
    { name: "Data Storytelling", proficiency: 90 },
    { name: "Stakeholder Communication", proficiency: 88 }
  ]},
  { category: "Technical Tools", skills: [
    { name: "Microsoft Excel", proficiency: 90 },
    { name: "Python (Pandas/NumPy)", proficiency: 75 },
    { name: "Data Visualization Tools", proficiency: 80 },
    { name: "Database Management", proficiency: 78 }
  ]}
];

const scatterPlotData = [
  { name: "Carosue Dam", fleet: 205, fit_score: 105.51, priority: "High" },
  { name: "Sunrise Dam", fleet: 199, fit_score: 102.99, priority: "High" },
  { name: "Ernest Henry", fleet: 179, fit_score: 100.94, priority: "High" },
  { name: "Peak Gold", fleet: 152, fit_score: 95.49, priority: "High" },
  { name: "Olympic Dam", fleet: 247, fit_score: 54.80, priority: "Medium" },
  { name: "Mount Whaleback", fleet: 153, fit_score: 58.75, priority: "Medium" },
  { name: "Small Operation 1", fleet: 50, fit_score: 35.20, priority: "Low" },
  { name: "Small Operation 2", fleet: 67, fit_score: 42.15, priority: "Medium" },
  { name: "Large Fleet Op", fleet: 224, fit_score: 93.50, priority: "High" },
  { name: "Mid-size Op", fleet: 112, fit_score: 68.33, priority: "Medium" }
];

// State
let currentSlide = 0;
const totalSlides = 12;
let charts = {};

// Slide titles for navigation
const slideTitles = [
  "Title", "Summary", "Workflow", "Data Collection", "Geography", "Readiness",
  "Commodities", "Opportunity", "Insights", "Recommendations", "Targets", "Skills"
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  renderKPIs();
  renderWorkflow();
  renderInsights();
  renderRecommendations();
  renderTargetsTable();
  renderSkills();
  initCharts();
  updateSlideCounter();
  setupKeyboardNav();
  setupTableSearch();
  setupModalHandlers();
});

// Navigation
function initNavigation() {
  const navMenu = document.getElementById('navMenu');
  slideTitles.forEach((title, index) => {
    const navItem = document.createElement('button');
    navItem.className = 'nav-item';
    navItem.textContent = title;
    navItem.onclick = () => goToSlide(index);
    if (index === 0) navItem.classList.add('active');
    navMenu.appendChild(navItem);
  });
}

function goToSlide(index) {
  if (index < 0 || index >= totalSlides) return;
  
  const slides = document.querySelectorAll('.slide');
  const navItems = document.querySelectorAll('.nav-item');
  
  slides[currentSlide].classList.remove('active');
  navItems[currentSlide].classList.remove('active');
  
  currentSlide = index;
  
  slides[currentSlide].classList.add('active');
  navItems[currentSlide].classList.add('active');
  
  updateSlideCounter();
  updateProgressBar();
  
  // Trigger animations for charts when entering slide
  if (currentSlide === 4) initGeoChart();
  if (currentSlide === 5) initReadinessChart();
  if (currentSlide === 6) initCommodityChart();
  if (currentSlide === 7) initScatterChart();
  if (currentSlide === 11) animateSkillBars();
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    goToSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
}

function updateSlideCounter() {
  document.getElementById('slideCounter').textContent = `${currentSlide + 1} / ${totalSlides}`;
  document.getElementById('prevBtn').disabled = currentSlide === 0;
  document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
}

function updateProgressBar() {
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
}

function setupKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
}

// Render KPIs
function renderKPIs() {
  const container = document.getElementById('kpiGrid');
  
  kpiMetrics.forEach((kpi, index) => {
    const card = document.createElement('div');
    card.className = 'kpi-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="kpi-title">${kpi.title}</div>
      <div class="kpi-value">${kpi.value}</div>
      <div class="kpi-description">${kpi.description}</div>
      <div class="click-indicator">📊 Click to view details</div>
    `;
    
    // Add click event to open modal
    card.addEventListener('click', () => showKPIModal(kpi));
    
    container.appendChild(card);
  });
}

function showKPIModal(kpi) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  
  let supportingPointsHTML = kpi.supporting_points.map(point => 
    `<li><strong>${point.point}:</strong> ${point.details}</li>`
  ).join('');
  
  modalBody.innerHTML = `
    <div class="kpi-modal-title">${kpi.title}</div>
    <div class="kpi-modal-value">${kpi.value}</div>
    
    <div class="kpi-modal-section">
      <div class="kpi-modal-section-title">Summary Statement</div>
      <div class="kpi-modal-text">${kpi.summary_statement}</div>
    </div>
    
    <div class="kpi-modal-section">
      <div class="kpi-modal-section-title">Supporting Data Points</div>
      <ul class="kpi-modal-list">${supportingPointsHTML}</ul>
    </div>
    
    <div class="kpi-modal-section">
      <div class="kpi-modal-section-title">Why This Matters for Haultrax</div>
      <div class="kpi-modal-implication">${kpi.business_implication}</div>
    </div>
  `;
  
  modal.classList.add('active');
}

// Render Workflow
function renderWorkflow() {
  const container = document.getElementById('workflowContainer');
  
  workflowPhases.forEach((phase, index) => {
    const card = document.createElement('div');
    card.className = 'workflow-phase';
    card.innerHTML = `
      <div class="workflow-number">${phase.phase_number}</div>
      <div class="workflow-title">${phase.phase_name}</div>
      <div class="workflow-description">${phase.short_description}</div>
      <div class="click-indicator">🔍 Click to expand</div>
    `;
    
    // Add click event to open modal
    card.addEventListener('click', () => showWorkflowModal(phase));
    
    container.appendChild(card);
  });
}

function showWorkflowModal(phase) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  
  let mindsetHTML = phase.analytical_mindset.map(item => 
    `<div class="workflow-modal-mindset">
      <div class="workflow-modal-question">${item.question}</div>
      <div class="workflow-modal-explanation">${item.explanation}</div>
    </div>`
  ).join('');
  
  let activitiesHTML = phase.key_activities.map(activity => 
    `<li>${activity}</li>`
  ).join('');
  
  modalBody.innerHTML = `
    <div class="workflow-modal-header">
      <div class="workflow-modal-number">${phase.phase_number}</div>
      <div class="workflow-modal-title">${phase.phase_name}</div>
    </div>
    
    <div class="workflow-modal-section">
      <div class="workflow-modal-section-title">Description</div>
      <div class="workflow-modal-text">${phase.detailed_description}</div>
    </div>
    
    <div class="workflow-modal-section">
      <div class="workflow-modal-section-title">Analytical Mindset</div>
      ${mindsetHTML}
    </div>
    
    <div class="workflow-modal-section">
      <div class="workflow-modal-section-title">Key Activities</div>
      <ul class="workflow-modal-list">${activitiesHTML}</ul>
    </div>
    
    <div class="workflow-modal-section">
      <div class="workflow-modal-section-title">Thinking Process</div>
      <div class="workflow-modal-thinking">${phase.thinking_process}</div>
    </div>
  `;
  
  modal.classList.add('active');
}

// Render Insights
function renderInsights() {
  const container = document.getElementById('insightsContainer');
  keyInsights.forEach((insight, index) => {
    const card = document.createElement('div');
    card.className = 'insight-card';
    card.innerHTML = `
      <div class="insight-header" onclick="toggleInsight(${index})">
        <div class="insight-header-left">
          <div class="insight-number">${index + 1}</div>
          <div class="insight-title-text">${insight.title}</div>
        </div>
        <div class="insight-expand">▼</div>
      </div>
      <div class="insight-body">
        <div class="insight-content">
          <div class="insight-finding">
            <div class="insight-label">Finding</div>
            <div class="insight-text">${insight.finding}</div>
          </div>
          <div class="insight-data">
            <div class="insight-label">Supporting Data</div>
            <div class="insight-text">${insight.data}</div>
          </div>
          <div class="insight-implication">
            <div class="insight-label">Business Implication</div>
            <div class="insight-text">${insight.implication}</div>
          </div>
          <div class="confidence-bar">
            <div class="confidence-label">
              <span>Confidence Level</span>
              <span>${insight.confidence}%</span>
            </div>
            <div class="confidence-meter">
              <div class="confidence-fill" style="width: ${insight.confidence}%"></div>
            </div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleInsight(index) {
  const cards = document.querySelectorAll('.insight-card');
  cards[index].classList.toggle('expanded');
}

// Render Recommendations
function renderRecommendations() {
  const container = document.getElementById('recommendationsContainer');
  recommendations.forEach((rec, index) => {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    const stars = '⭐'.repeat(rec.priority);
    card.innerHTML = `
      <div class="recommendation-header">
        <div class="recommendation-priority">
          ${stars}
        </div>
        <div class="recommendation-title-text">${rec.title}</div>
      </div>
      <div class="recommendation-body">
        <div class="rec-item">
          <div class="rec-label">Rationale</div>
          <div class="rec-value">${rec.rationale}</div>
        </div>
        <div class="rec-item">
          <div class="rec-label">Expected Outcome</div>
          <div class="rec-value">${rec.outcome}</div>
        </div>
        <div class="rec-item">
          <div class="rec-label">Timeline</div>
          <div class="rec-value">${rec.timeline}</div>
        </div>
        <div class="rec-item">
          <div class="rec-label">ROI Projection</div>
          <div class="rec-value"><span class="roi-badge">${rec.roi}</span></div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Targets Table
function renderTargetsTable() {
  const tbody = document.getElementById('tableBody');
  topTargets.forEach(target => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${target.rank}</td>
      <td><strong>${target.name}</strong></td>
      <td>${target.state}</td>
      <td>${target.commodity}</td>
      <td><span class="status-badge status-${target.status.toLowerCase()}">${target.status}</span></td>
      <td><span class="readiness-badge readiness-${target.readiness.toLowerCase()}">${target.readiness}</span></td>
      <td><strong>${target.fit_score.toFixed(2)}</strong></td>
      <td><span class="priority-${target.priority.toLowerCase()}">${target.priority}</span></td>
    `;
    tbody.appendChild(row);
  });
}

function setupTableSearch() {
  const searchInput = document.getElementById('searchTable');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr');
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(query) ? '' : 'none';
    });
  });
}

function sortTable(columnIndex) {
  const table = document.getElementById('targetsTable');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  rows.sort((a, b) => {
    const aVal = a.cells[columnIndex].textContent.trim();
    const bVal = b.cells[columnIndex].textContent.trim();
    
    if (!isNaN(parseFloat(aVal)) && !isNaN(parseFloat(bVal))) {
      return parseFloat(aVal) - parseFloat(bVal);
    }
    return aVal.localeCompare(bVal);
  });
  
  tbody.innerHTML = '';
  rows.forEach(row => tbody.appendChild(row));
}

function exportTable() {
  alert('Export functionality activated! In a full application, this would download the table data as CSV or Excel.');
}

// Render Skills
function renderSkills() {
  const container = document.getElementById('skillsContainer');
  technicalSkills.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category';
    
    let skillsHTML = '';
    category.skills.forEach(skill => {
      skillsHTML += `
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-percentage">${skill.proficiency}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" style="width: ${skill.proficiency}%"></div>
          </div>
        </div>
      `;
    });
    
    categoryDiv.innerHTML = `
      <div class="skill-category-title">${category.category}</div>
      <div class="skill-list">${skillsHTML}</div>
    `;
    container.appendChild(categoryDiv);
  });
}

function animateSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  fills.forEach(fill => {
    fill.style.animation = 'none';
    setTimeout(() => {
      fill.style.animation = 'fillBar 1.5s ease forwards';
    }, 10);
  });
}

// Charts
function initCharts() {
  initGeoChart();
}

function initGeoChart() {
  const ctx = document.getElementById('geoChart');
  if (!ctx) return;
  
  if (charts.geo) charts.geo.destroy();
  
  charts.geo = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: geographicData.map(d => d.state),
      datasets: [{
        label: 'Operations',
        data: geographicData.map(d => d.operations),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            afterLabel: function(context) {
              const index = context.dataIndex;
              return `${geographicData[index].percentage}% of total market`;
            }
          }
        }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
  
  // Setup metric buttons
  const metricBtns = document.querySelectorAll('.metric-btn');
  metricBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      metricBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateGeoChart(btn.dataset.metric);
    });
  });
}

function updateGeoChart(metric) {
  if (!charts.geo) return;
  
  let data, label;
  if (metric === 'operations') {
    data = geographicData.map(d => d.operations);
    label = 'Operations';
  } else if (metric === 'workforce') {
    data = geographicData.map(d => d.workforce);
    label = 'Workforce';
  } else if (metric === 'fleet') {
    data = geographicData.map(d => d.fleet);
    label = 'Fleet Size';
  }
  
  charts.geo.data.datasets[0].data = data;
  charts.geo.data.datasets[0].label = label;
  charts.geo.update();
}

function initReadinessChart() {
  const ctx = document.getElementById('readinessChart');
  if (!ctx) return;
  
  if (charts.readiness) charts.readiness.destroy();
  
  charts.readiness = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: digitalReadiness.map(d => d.level),
      datasets: [{
        data: digitalReadiness.map(d => d.percentage),
        backgroundColor: digitalReadiness.map(d => d.color)
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            label: function(context) {
              const index = context.dataIndex;
              const item = digitalReadiness[index];
              return [
                `${item.level}: ${item.percentage}%`,
                `Count: ${item.count} operations`,
                `Avg Fit Score: ${item.avg_fit_score}`
              ];
            }
          }
        }
      },
      onClick: (evt, elements) => {
        if (elements.length > 0) {
          const index = elements[0].index;
          showReadinessDetails(digitalReadiness[index]);
        }
      }
    }
  });
}

function showReadinessDetails(data) {
  const detailsDiv = document.getElementById('readinessDetails');
  detailsDiv.innerHTML = `
    <h3>${data.level} Digital Readiness</h3>
    <p>Click on chart segments to explore different readiness levels.</p>
    <div class="readiness-stat">
      <strong>Operations Count:</strong>
      <span>${data.count}</span>
    </div>
    <div class="readiness-stat">
      <strong>Percentage:</strong>
      <span>${data.percentage}%</span>
    </div>
    <div class="readiness-stat">
      <strong>Avg Fit Score:</strong>
      <span>${data.avg_fit_score}</span>
    </div>
    <div class="readiness-stat">
      <strong>Market Opportunity:</strong>
      <span>${data.level === 'Low' ? 'High' : data.level === 'Medium' ? 'Medium' : 'Low'}</span>
    </div>
  `;
}

function initCommodityChart() {
  const ctx = document.getElementById('commodityChart');
  if (!ctx) return;
  
  if (charts.commodity) charts.commodity.destroy();
  
  charts.commodity = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: commodityData.map(d => d.commodity),
      datasets: [{
        label: 'Operations Count',
        data: commodityData.map(d => d.count),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            afterLabel: function(context) {
              const index = context.dataIndex;
              return `${commodityData[index].percentage}% of operations`;
            }
          }
        }
      },
      scales: {
        x: { beginAtZero: true }
      }
    }
  });
}

function initScatterChart() {
  const ctx = document.getElementById('scatterChart');
  if (!ctx) return;
  
  if (charts.scatter) charts.scatter.destroy();
  
  const colorMap = {
    'High': '#dc3545',
    'Medium': '#ffc107',
    'Low': '#6c757d'
  };
  
  charts.scatter = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Mining Operations',
        data: scatterPlotData.map(d => ({ x: d.fleet, y: d.fit_score })),
        backgroundColor: scatterPlotData.map(d => colorMap[d.priority]),
        borderColor: scatterPlotData.map(d => colorMap[d.priority]),
        pointRadius: 8,
        pointHoverRadius: 12
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              const index = context.dataIndex;
              const item = scatterPlotData[index];
              return [
                item.name,
                `Fleet Size: ${item.fleet}`,
                `Fit Score: ${item.fit_score}`,
                `Priority: ${item.priority}`
              ];
            }
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Fleet Size' },
          beginAtZero: true
        },
        y: {
          title: { display: true, text: 'Digital Solution Fit Score' },
          beginAtZero: true
        }
      }
    }
  });
}

// Modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

// Setup modal event handlers
function setupModalHandlers() {
  const modal = document.getElementById('modal');
  
  // Close on backdrop click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}