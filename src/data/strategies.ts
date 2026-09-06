export interface StrategyArticle {
  id: number;
  slug: string;
  module: "writing" | "speaking" | "reading" | "listening";
  moduleLabel: string;
  title: string;
  subtitle: string;
  icon: string;
  category: string;
  readTime: string;
  targetBand: string;
  summary: string;
  problem: {
    heading: string;
    description: string;
  };
  whyItHappens: {
    heading: string;
    description: string;
  };
  strategy: {
    heading: string;
    steps: string[];
  };
  demonstration: {
    heading: string;
    exampleQuestion: string;
    poorResponse: string;
    band8Response: string;
    breakdown: string;
  };
  commonTrap: {
    heading: string;
    description: string;
  };
  practiceMethod: {
    heading: string;
    drills: string[];
  };
  takeaway: string;
}

export const strategyArticles: StrategyArticle[] = [
  // ============================================================================
  // WRITING (1–10)
  // ============================================================================
  {
    id: 1,
    slug: "why-writing-stuck-at-band-6-5",
    module: "writing",
    moduleLabel: "IELTS Writing",
    title: "Why Your IELTS Writing Is Stuck at Band 6.5",
    subtitle: "An Examiner's Diagnostic on the Missing Leap Between Competent and Good",
    icon: "✍️",
    category: "Task Response & Cohesion",
    readTime: "5 min read",
    targetBand: "Band 6.5 → 7.5+",
    summary: "Understand why mechanical linkers, repetitive arguments, and lack of depth cap your writing score at 6.5, and master the exact linguistic shifts needed for Band 7.5+.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "You produce grammatically clean sentences and write over 250 words, yet your Task 2 score remains perpetually trapped at 6.0 or 6.5. Despite memorising templates and vocabulary lists, the examiner never awards you a 7.0."
    },
    whyItHappens: {
      heading: "02 — Why It Happens (The Cognitive Trap)",
      description: "At Band 6.5, candidates present relevant ideas but fail to develop them fully. They list three different points in a paragraph instead of developing one point in depth, and rely heavily on formulaic mechanical linkers like 'Furthermore', 'Moreover', and 'In a nutshell'."
    },
    strategy: {
      heading: "03 — The Step-by-Step Strategy",
      steps: [
        "Adopt the 'One Central Idea Per Paragraph' rule.",
        "Use the Point → Explain → Develop → Example (PEDE) paragraph structure.",
        "Replace mechanical sentence starters with referencing pronouns and thematic topic sentences.",
        "Demonstrate nuance by examining conditional consequences rather than absolute generalizations."
      ]
    },
    demonstration: {
      heading: "04 — Realistic IELTS Demonstration",
      exampleQuestion: "Some people believe that university education should be free for all students. To what extent do you agree?",
      poorResponse: "Firstly, university should be free because poor students cannot afford it. Furthermore, it helps the economy. Moreover, countries will have more doctors and engineers.",
      band8Response: "Providing universal access to tertiary education removes financial barriers for meritorious students from underprivileged backgrounds. When higher education is publicly funded, individuals are empowered to pursue high-skill disciplines—such as medicine and engineering—without the crippling burden of student debt. Consequently, this broadens the nation's human capital, directly accelerating technological innovation and long-term economic productivity.",
      breakdown: "The Band 8+ version focuses on one logical chain: Free Education → Eliminates Debt → Enables High-Skill Training → Boosts National Productivity."
    },
    commonTrap: {
      heading: "05 — The Common Candidate Trap",
      description: "Listing disconnected brainstormed ideas without showing the 'how' and 'why' link. Breadth without depth guarantees a 6.0 in Task Response."
    },
    practiceMethod: {
      heading: "06 — Actionable Daily Practice",
      drills: [
        "Take a Task 2 topic and write only ONE body paragraph explaining ONE idea across 5 logically connected sentences.",
        "Eliminate 'Firstly, Secondly, In addition' from your draft and use cohesive noun phrases instead.",
        "Ask 'So what?' after every statement you write to force progressive explanation."
      ]
    },
    takeaway: "Depth beats breadth every single time. Develop one strong idea fully rather than listing three shallow ones."
  },
  {
    id: 2,
    slug: "band-7-vs-band-8-writing",
    module: "writing",
    moduleLabel: "IELTS Writing",
    title: "Band 7 vs Band 8 Writing: What Actually Changes?",
    subtitle: "A Sentence-by-Sentence Comparison of Vocabulary Precision and Syntactic Flexibility",
    icon: "✍️",
    category: "Band Criteria",
    readTime: "6 min read",
    targetBand: "Band 7.0 → 8.0+",
    summary: "Discover the subtle differences in lexical precision, complex punctuation, and cohesive progression that elevate a standard Band 7 essay to a Band 8.5 masterpiece.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "You already write with good grammar and clear paragraphing, but your score plateaus at Band 7.0. You want to understand the exact linguistic markers that unlock Band 8.0 and 8.5."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Band 7 essays have occasional minor inaccuracies in collocation and slightly obvious organizational structures. Band 8 essays exhibit effortless lexical precision, rare minor slips, and sophisticated syntactic flexibility (inversions, reduced relative clauses)."
    },
    strategy: {
      heading: "03 — The Step-by-Step Strategy",
      steps: [
        "Use precise academic collocations rather than dictionary synonyms.",
        "Integrate natural hedging and modal nuance (e.g., 'tends to precipitate', 'arguably stems from').",
        "Master varied sentence architecture including non-finite participle clauses."
      ]
    },
    demonstration: {
      heading: "04 — Sentence Comparison Demo",
      exampleQuestion: "Topic: The impact of urban migration on infrastructure.",
      poorResponse: "[Band 7]: Many people move to cities and this causes heavy traffic congestion and public transport problems.",
      band8Response: "[Band 8.5]: The relentless influx of rural migrants into urban centres places unprecedented strain on municipal transit networks, frequently precipitating gridlock during peak commuting hours.",
      breakdown: "Notice 'relentless influx' replaces 'many people move', and 'places unprecedented strain' provides natural academic tone."
    },
    commonTrap: {
      heading: "05 — The Common Candidate Trap",
      description: "Using overly archaic words (e.g. 'plethora', 'myriad', 'furthermore to this') thinking it sounds sophisticated when it actually sounds unnatural."
    },
    practiceMethod: {
      heading: "06 — Actionable Practice",
      drills: [
        "Read articles from Aeon or The Economist and extract 3-word academic noun phrases.",
        "Rewrite your past Band 7 paragraphs focusing entirely on collocation accuracy."
      ]
    },
    takeaway: "Band 8 is not about harder words; it is about natural collocations and absolute precision in meaning."
  },
  {
    id: 3,
    slug: "how-to-write-band-8-thesis-statement",
    module: "writing",
    moduleLabel: "IELTS Writing",
    title: "How to Write a Band 8+ Thesis Statement",
    subtitle: "The Blueprint for Crafting Crystal-Clear Introduction Anchors",
    icon: "✍️",
    category: "Structure",
    readTime: "4 min read",
    targetBand: "Band 7.0+",
    summary: "Learn how to write a direct, nuanced thesis statement in under 60 seconds that outlines your clear stance and previews your core arguments.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Writing vague thesis statements like 'In this essay, I will discuss both sides and give my opinion' which costs valuable points in Task Achievement."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Candidates treat the introduction as an empty ritual rather than an explicit declaration of their position."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "State your position clearly using concessive clauses: 'While X has merits, I contend that Y is significantly more vital because of Z.'",
        "Never leave the examiner guessing what your opinion is until the conclusion."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Should dangerous sports be banned?",
      poorResponse: "This essay will examine whether extreme sports should be outlawed or allowed.",
      band8Response: "While proponents argue that individuals possess the fundamental right to engage in high-risk recreation, I firmly contend that governments must regulate extreme sports due to the catastrophic financial burden severe injuries impose on public healthcare systems.",
      breakdown: "Directly presents the opposing context, the candidate's firm stance, and the precise logical justification."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Sitting on the fence without taking a definitive stance on 'To what extent do you agree?' questions."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Practice writing 5 different thesis statements for Cambridge prompts in 10 minutes."
      ]
    },
    takeaway: "A great thesis statement answers the prompt directly and gives the reader a road map of your entire essay."
  },
  {
    id: 4,
    slug: "task-1-overview-strategy",
    module: "writing",
    moduleLabel: "IELTS Writing",
    title: "How to Write an IELTS Task 1 Overview That Scores Well",
    subtitle: "The 3-Rule Framework to Secure Band 7.0+ in Task Achievement for Charts & Graphs",
    icon: "✍️",
    category: "Task 1 Strategy",
    readTime: "5 min read",
    targetBand: "Band 7.0 – 9.0",
    summary: "An overview is mandatory for Band 7+ in Task 1. Master the art of summarizing overall trends, highest/lowest points, and key contrasts without writing raw data numbers.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Missing an overview paragraph or filling the overview with specific numbers and data figures, which drops your score to Band 5 in Task Achievement."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Candidates confuse a summary of main features with detailed data reporting."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Rule 1: Start with an explicit signal: 'Overall, it is evident that...'",
        "Rule 2: Identify 2 main features (e.g., general upward trend + dominant category).",
        "Rule 3: NEVER include raw figures (percentages, years, dollars) in the overview."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Line graph showing car sales from 2000 to 2020 in 3 countries.",
      poorResponse: "In 2000 car sales were 50,000 in UK and in 2020 it was 80,000.",
      band8Response: "Overall, it is immediately apparent that car sales experienced an upward trajectory in all three nations over the period, with the UK maintaining the highest volume of vehicle purchases throughout.",
      breakdown: "Clear, macro-level trends identified without cluttering data."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Forgetting to write an overview completely or placing it as an afterthought without distinct paragraphing."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Look at 10 Cambridge Task 1 diagrams and write ONLY the 2-sentence overview for each."
      ]
    },
    takeaway: "No overview = maximum Band 5 in Task Achievement. Write a clear 2-sentence trend summary with zero raw numbers."
  },
  {
    id: 5,
    slug: "point-explain-develop-example-method",
    module: "writing",
    moduleLabel: "IELTS Writing",
    title: "The Point–Explain–Develop–Example Method for Task 2",
    subtitle: "The Mathematical Formula for Structuring Flawless 90-Word Body Paragraphs",
    icon: "✍️",
    category: "Idea Development",
    readTime: "5 min read",
    targetBand: "Band 7.5+",
    summary: "Learn the PEDE method to ensure every body paragraph flows effortlessly from a strong topic sentence to deep explanation and concrete illustration.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Paragraphs that feel jumpy, disjointed, or lack clear logical transitions between sentences."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Writing stream-of-consciousness thoughts without a structural paragraph blueprint."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "P (Point): State the main topic claim.",
        "E (Explain): Explain why or how this occurs.",
        "D (Develop): Explore the consequence or conditional effect.",
        "E (Example): Provide a realistic contextual example to ground the argument."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Remote working benefits.",
      poorResponse: "Working from home is good. People save time. Also traffic is less.",
      band8Response: "The primary advantage of telecommuting is the substantial reduction in daily travel time (Point). Eliminating long commutes enables professionals to achieve a more harmonious work-life balance and reduces chronic workplace fatigue (Explain). As a result, employees demonstrate higher cognitive focus and sustained productivity during operational hours (Develop). For instance, a recent survey among software engineers in London revealed that remote workers reported a 20% increase in project completion rates (Example).",
      breakdown: "Every sentence logically unlocks the next."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Giving an example that has nothing to do with the point made in the first sentence."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Take any Task 2 prompt and write 2 body paragraphs using strict PEDE color-coded mapping."
      ]
    },
    takeaway: "Master PEDE to guarantee a minimum Band 7.5 in both Coherence & Cohesion and Task Response."
  },
  {
    id: 6,
    slug: "why-memorised-essays-hurt-score",
    module: "writing",
    moduleLabel: "IELTS Writing",
    title: "Why Memorised Essays Can Hurt Your IELTS Writing Score",
    subtitle: "How Certified Examiners Instantly Detect and Penalize Template Essays",
    icon: "✍️",
    category: "Examiner Insight",
    readTime: "4 min read",
    targetBand: "Band 7.0+",
    summary: "Memorised essays and rigid templates are the #1 reason why capable students fail to score Band 7. Learn how examiners spot fake fluency and how to write authentically.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Candidates memorise full 250-word sample essays or rigid 10-line sentence templates from social media and try to force them onto the exam prompt."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Fear of grammar mistakes leads students to rely on prefabricated sentences that don't address the specific nuance of the prompt."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Learn structural frameworks (PEDE, ARDEL) rather than fixed sentences.",
        "Respond strictly to the prompt's specific keywords.",
        "Ensure tone consistency across every sentence."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Exam prompt on space exploration budget.",
      poorResponse: "In this day and age, whether space is good is a controversial issue with two opposing sides since ancient times.",
      band8Response: "Allocating substantial national revenue to interplanetary exploration remains a contentious debate amidst pressing domestic socio-economic challenges.",
      breakdown: "Direct, tailored, and authentic."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Using grand clichés like 'Since the dawn of human civilization' on modern topics like smartphones."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Audit your essays: Delete any sentence that could be copy-pasted into 10 completely different essays without changing a word."
      ]
    },
    takeaway: "Examiners are trained to penalize memorised text. Authenticity with good grammar beats fake sophistication."
  },
  {
    id: 7,
    slug: "how-to-develop-ideas-in-writing",
    module: "writing",
    moduleLabel: "IELTS Writing",
    title: "How to Develop Ideas Instead of Repeating Them",
    subtitle: "The 'So What?' Method for Progressive Argumentation",
    icon: "✍️",
    category: "Coherence",
    readTime: "5 min read",
    targetBand: "Band 7.5+",
    summary: "Avoid circular reasoning. Discover how to use causal connectors and conditional reasoning to move your argument forward step by step.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Writing the same idea 3 times using different words: 'Pollution is bad. It harms nature. The environment is destroyed.'"
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Running out of brainstormed content and padding the word count with paraphrased repetition."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Ask 'What is the immediate cause?'",
        "Ask 'What is the secondary effect?'",
        "Ask 'What happens if this trend continues?'"
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Effects of excessive screen time on children.",
      poorResponse: "Children watch too much screen. This is bad for their health. Their physical condition becomes worse because they use screens all day.",
      band8Response: "Prolonged screen exposure encourages a sedentary lifestyle among children (Initial Cause). By spending hours immobilized before digital devices, they forfeit opportunities for cardiovascular exercise and motor skill development (Direct Impact). Over time, this chronic physical inactivity significantly elevates the risk of childhood obesity and juvenile diabetes (Long-term Consequence).",
      breakdown: "Notice how sentence 1, 2, and 3 progress from behavior to immediate impact to long-term pathology."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Restating the topic sentence as your conclusion within the body paragraph."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Practice 3-step causal chains: Action → Direct Consequence → Broad Societal Result."
      ]
    },
    takeaway: "Progress your thought forward in every sentence. Never say the same thing twice in different clothing."
  },
  {
    id: 8,
    slug: "task-response-criterion-guide",
    module: "writing",
    moduleLabel: "IELTS Writing",
    title: "Task Response: The Most Misunderstood IELTS Writing Criterion",
    subtitle: "How to Fully Address Both Views and Avoid the 5.0 Cap",
    icon: "✍️",
    category: "Scoring Criteria",
    readTime: "5 min read",
    targetBand: "Band 7.0+",
    summary: "Task Response represents 25% of your total writing score. Learn how addressing only half of a two-part prompt caps your score at 5.0 and how to guarantee full compliance.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Answering only one part of a 'Discuss both views and give your opinion' prompt, or ignoring plural requirements (e.g. discussing only one problem when the prompt asks for 'problems')."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Rushing to write without dissecting the prompt's instruction words and qualifiers."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Underline micro-keywords, qualifiers (all, only, always), and instruction words.",
        "Ensure equal paragraph weight for both views.",
        "Present your personal position throughout the essay."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Discuss both views and give your opinion.",
      poorResponse: "Writes 4 sentences on View A, and 12 sentences on View B.",
      band8Response: "Writes 1 balanced 80-word paragraph for View A, and 1 balanced 80-word paragraph for View B, explicitly stating why View B is more persuasive.",
      breakdown: "Symmetrical coverage satisfies the official descriptor: 'sufficiently addresses all parts of the task'."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Giving an opinion in the conclusion that was never mentioned in the introduction or body."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Highlight the prompt parts in yellow and check off where each part is answered in your essay."
      ]
    },
    takeaway: "Answer all parts of the question with equal depth. Balance is the key to Band 7+ Task Response."
  },
  {
    id: 9,
    slug: "coherence-and-cohesion-flow",
    module: "writing",
    moduleLabel: "IELTS Writing",
    title: "Coherence & Cohesion: How to Make Your Essay Flow Naturally",
    subtitle: "Moving Beyond 'Moreover' With Lexical Referencing & Pronouns",
    icon: "✍️",
    category: "Cohesion",
    readTime: "5 min read",
    targetBand: "Band 7.5+",
    summary: "Discover how advanced writers achieve seamless paragraph flow using demonstrative pronouns, synonym chains, and thematic continuity rather than robotic linkers.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Starting every single sentence with a transition word (First, Secondly, Furthermore, In addition, Consequently, Thus)."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Believing that more transition words equals higher Coherence & Cohesion score."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Use referencing demonstratives: 'This phenomenon...', 'Such initiatives...', 'These measures...'",
        "Use passive and relative clauses to link the subject of the new sentence to the predicate of the last sentence."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Environmental degradation from tourism.",
      poorResponse: "Tourists visit beaches. Furthermore, they drop plastic. Moreover, this kills turtles. Therefore, governments must act.",
      band8Response: "Thousands of international tourists visit delicate coastal habitats annually. Many discard single-use plastics along the shoreline, a practice that directly jeopardizes marine wildlife. To mitigate such ecological damage, local municipalities must enforce rigorous waste management protocols.",
      breakdown: "Flows smoothly through natural referencing ('a practice that...', 'such ecological damage')."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Using linkers incorrectly (e.g., using 'On the other hand' without an earlier 'On the one hand')."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Circle all transition linkers in your essay. If you have more than 6, replace half with pronoun referencing."
      ]
    },
    takeaway: "True cohesion is invisible. Sentences should link through ideas and pronouns, not mechanical transitional cliches."
  },
  {
    id: 10,
    slug: "complex-sentences-without-grammar-mistakes",
    module: "writing",
    moduleLabel: "IELTS Writing",
    title: "How to Use Complex Sentences Without Making Grammar Mistakes",
    subtitle: "The 4 Core Syntactic Structures Every Band 8 Writer Uses",
    icon: "✍️",
    category: "Grammar (GRA)",
    readTime: "5 min read",
    targetBand: "Band 7.5 – 9.0",
    summary: "Learn how to write conditional, concessive, relative, and non-finite participle clauses with 100% punctuation and agreement accuracy.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Writing 40-word run-on sentences with comma splices and dangling modifiers that obscure your meaning."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Confusing 'complex sentence' (which means dependent + independent clauses) with 'long confusing sentence'."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Structure 1: Concession clauses ('Although X, Y is true.')",
        "Structure 2: Conditional clauses ('If governments implement X, Y will inevitably occur.')",
        "Structure 3: Participle clauses ('By investing in renewables, nations can reduce carbon output, thereby fostering sustainable growth.')"
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Renewable energy adoption.",
      poorResponse: "Governments should invest in solar energy because it is clean and also it does not make pollution so this will help the planet.",
      band8Response: "Although transitioning to renewable infrastructure requires substantial upfront capital, investing in solar technology ultimately secures energy independence while drastically curbing industrial emissions.",
      breakdown: "One elegant, perfectly punctuated concessive complex sentence."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Writing comma splices (joining two complete independent clauses with only a comma)."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Transform 5 pairs of simple sentences into 5 sophisticated complex sentences using 'Although', 'Whereas', and 'By + V-ing'."
      ]
    },
    takeaway: "Complex sentences are about clause relationships and punctuation accuracy, not convoluted wordiness."
  },

  // ============================================================================
  // SPEAKING (11–18)
  // ============================================================================
  {
    id: 11,
    slug: "speak-naturally-without-memorising",
    module: "speaking",
    moduleLabel: "IELTS Speaking",
    title: "How to Speak Naturally in IELTS Without Memorising Answers",
    subtitle: "Developing Spontaneous Fluency and Real-Time Idea Formulation",
    icon: "🎙️",
    category: "Fluency",
    readTime: "5 min read",
    targetBand: "Band 7.0 – 8.5",
    summary: "Stop sounding like a robot. Discover how natural intonation, authentic fillers, and communicative flexibility score higher than rehearsed answers.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Rehearsing script answers word-for-word and panicking when the examiner asks an unpredicted twist question."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Lack of daily speaking practice leads candidates to treat speaking like a written memory test."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Learn natural conversational buying-time phrases: 'Well, that's an interesting question...'",
        "Use communicative fillers ('I'd say that...', 'To be perfectly honest...') instead of 'Uhhh...'",
        "Focus on thought groups and natural voice inflection."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Do you prefer mornings or evenings?",
      poorResponse: "[Monotone]: I prefer morning because morning is good for health and morning walk is beneficial.",
      band8Response: "[Natural rhythm]: I'm definitely more of a night owl, to be honest. I tend to find that my creative energy peaks after dinner, whereas in the early mornings, I'm usually pretty groggy until I've had my first cup of coffee!",
      breakdown: "Uses natural idioms ('night owl'), contrast ('whereas'), and genuine personal details."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Reciting definitions instead of sharing your genuine perspective."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Record 1-minute voice notes answering random questions without any preparation time."
      ]
    },
    takeaway: "The examiner tests communication, not memory. Speak like you are conversing with an educated colleague."
  },
  {
    id: 12,
    slug: "how-to-extend-speaking-answers",
    module: "speaking",
    moduleLabel: "IELTS Speaking",
    title: "How to Extend Your Speaking Answers",
    subtitle: "The 3-Sentence Rule for Part 1 and Part 3",
    icon: "🎙️",
    category: "Part 1 & 3",
    readTime: "4 min read",
    targetBand: "Band 7.0+",
    summary: "Never give a one-word answer again. Master the Answer + Reason + Detail formula to deliver crisp 15-second responses effortlessly.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Giving blunt answers like 'Yes, I like reading' and then sitting in awkward silence."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Fear of making grammar errors makes students cut their sentences short."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Sentence 1: Direct Answer with paraphrase.",
        "Sentence 2: Explanation / Reason (Why).",
        "Sentence 3: Personal Detail / Exception / Reflection."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Do you like flowers?",
      poorResponse: "Yes, I like flowers very much.",
      band8Response: "Yes, absolutely, especially fragrant varieties like jasmine and roses. I find having fresh flowers around the living room really lifts my mood after a stressful day, although I admit I'm terrible at keeping houseplants alive for very long!",
      breakdown: "Extends into emotion, sensory detail, and humor naturally."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Speaking for 2 minutes on a simple Part 1 question until the examiner has to interrupt you."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Answer 10 Part 1 questions using a timer: Aim for 12 to 20 seconds per response."
      ]
    },
    takeaway: "Aim for 2 to 4 well-constructed sentences in Part 1. Answer → Explain → Add Detail."
  },
  {
    id: 13,
    slug: "band-6-vs-band-7-speaking",
    module: "speaking",
    moduleLabel: "IELTS Speaking",
    title: "Band 6 vs Band 7 Speaking: What's the Difference?",
    subtitle: "The Key Behavioral Shifts Examiners Look for in the Oral Interview",
    icon: "🎙️",
    category: "Fluency & Vocab",
    readTime: "5 min read",
    targetBand: "Band 6.0 → 7.0+",
    summary: "Compare the exact fluency, lexical, and grammatical behaviors that separate a 6.0 candidate from a 7.0+ achiever.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Scoring 6.0 repeatedly because of frequent mid-sentence restarts and repetitive simple vocabulary."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Pausing to search for individual grammar rules rather than speaking in conceptual phrases."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Speak at a steady, deliberate pace rather than rushing.",
        "Use natural collocations instead of forced archaic idioms.",
        "Smoothly self-correct only when necessary without halting the entire conversation."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Describe your hometown.",
      poorResponse: "[Band 6]: My hometown is Dhaka. It is very big. There is many traffic jam. But I like it.",
      band8Response: "[Band 7.5]: I was born and raised in Dhaka, which is a bustling, vibrant metropolis. While the daily gridlock can be quite frustrating, what I love most is the sheer warmth of the community and the incredible street food culture.",
      breakdown: "Collocations: 'bustling metropolis', 'daily gridlock', 'sheer warmth of the community'."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Using idioms like 'It is raining cats and dogs' which native speakers rarely use today."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Practice speaking with a peer for 15 minutes daily without switching to Bengali."
      ]
    },
    takeaway: "Band 7 requires speaking at length without noticeable effort and using flexible vocabulary with good collocations."
  },
  {
    id: 14,
    slug: "handle-speaking-question-dont-understand",
    module: "speaking",
    moduleLabel: "IELTS Speaking",
    title: "How to Handle an IELTS Speaking Question You Don't Understand",
    subtitle: "Official Clarification Phrases That Protect Your Score",
    icon: "🎙️",
    category: "Exam Tactics",
    readTime: "4 min read",
    targetBand: "Band 7.0+",
    summary: "Don't panic in silence. Learn official polite phrases to ask the examiner to repeat or rephrase without losing marks.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Freezing in silence or answering an entirely wrong question because you missed a key word."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Believing that asking for repetition lowers your score. (It does NOT in Part 1 and Part 3!)."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "In Part 1: Ask for repetition politely: 'Could you please repeat that question, please?'",
        "In Part 3: Ask for rephrasing: 'Could you please rephrase that question?' or 'What exactly do you mean by X?'"
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "How has consumerism impacted urbanization?",
      poorResponse: "[Silent for 10 seconds] ... Yes, I like shopping in urban malls.",
      band8Response: "If I understand correctly, you're asking how our purchasing habits have influenced the growth and infrastructure of modern cities, right? Well, from my perspective...",
      breakdown: "Clarifies while demonstrating advanced paraphrasing and maintaining communication."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Saying 'What?' or 'Repeat please' in an abrupt tone."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Memorize 3 polite clarification templates until they are second nature."
      ]
    },
    takeaway: "Asking the examiner to repeat or clarify is 100% permitted. It shows authentic communication."
  },
  {
    id: 15,
    slug: "speaking-part-2-two-minutes",
    module: "speaking",
    moduleLabel: "IELTS Speaking",
    title: "How to Answer IELTS Speaking Part 2 for Two Minutes",
    subtitle: "The Past–Present–Future Narrative Structure",
    icon: "🎙️",
    category: "Part 2 Cue Card",
    readTime: "5 min read",
    targetBand: "Band 7.5+",
    summary: "Running out of things to say after 45 seconds is the biggest cue card fear. Master the chronological storytelling framework to easily speak for the full 2 minutes.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Stopping after 45–60 seconds, forcing the examiner to look at you waiting for you to continue."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Answering the 4 bullet points as isolated facts rather than telling a cohesive story."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Stage 1 (Past - 45s): Background, how it started, who was involved.",
        "Stage 2 (Present - 45s): Specific sensory details, emotions, challenges overcome.",
        "Stage 3 (Future - 30s): Long-term impact, lessons learned, and future plans."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Describe a memorable gift you received.",
      poorResponse: "My brother gave me a watch. It is blue. I got it on my birthday. I like it very much. [Stops at 30 seconds]",
      band8Response: "[Past]: 'A couple of years ago, right around my graduation, my elder brother surprised me with a vintage mechanical watch...' [Present]: 'What makes it particularly special is the intricate craftsmanship...' [Future]: 'Looking ahead, I intend to preserve it as an heirloom to pass down...'",
      breakdown: "Flows smoothly across time periods with vivid detail."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Writing full sentences on your 1-minute scratch paper instead of shorthand keywords."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Practice 5 cue cards with a stopwatch. Do not stop speaking until the timer hits 2:00."
      ]
    },
    takeaway: "Divide your 2 minutes into Past, Present, and Future. You will never run out of things to say."
  },
  {
    id: 16,
    slug: "fluent-vs-memorised-english",
    module: "speaking",
    moduleLabel: "IELTS Speaking",
    title: "The Difference Between Fluent English and Memorised English",
    subtitle: "How Intonation, Stress, and Rhythm Signal True Proficiency",
    icon: "🎙️",
    category: "Pronunciation & Tone",
    readTime: "4 min read",
    targetBand: "Band 7.0+",
    summary: "Learn how word stress, connected speech, and expressive pitch variation convince the examiner of your genuine English capability.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Speaking with flat, robotic pitch and unnatural pauses between memorised chunks."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Focusing on grammar rules instead of listening to real English rhythm and conversational melody."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Emphasize content words (nouns, main verbs) and reduce function words (to, of, the).",
        "Use connected speech: link consonants to following vowels (e.g. 'pick_it_up')."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Do you enjoy art?",
      poorResponse: "[Flat monotone]: YES. I. ENJOY. ART. VERY. MUCH.",
      band8Response: "[Dynamic intonation]: 'To be honest, I'm not a HUGE art enthusiast, but I do appreciate modern photography...'",
      breakdown: "Emphasizes key words and uses natural conversational pitch rises and falls."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Trying to fake a heavy British or American accent instead of speaking clearly in your own natural voice."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Shadow native podcast audio for 10 minutes daily, copying pauses and emphasis."
      ]
    },
    takeaway: "Fluency is music. Stress content words and speak with dynamic expressive intonation."
  },
  {
    id: 17,
    slug: "improve-pronunciation-without-accent-change",
    module: "speaking",
    moduleLabel: "IELTS Speaking",
    title: "How to Improve Pronunciation Without Trying to Change Your Accent",
    subtitle: "Focusing on Word Stress, Consonant Clusters & Intelligibility",
    icon: "🎙️",
    category: "Intelligibility",
    readTime: "4 min read",
    targetBand: "Band 7.5+",
    summary: "The official IELTS rubric tests Pronunciation, NOT Accent. Learn the 3 key aspects that guarantee Band 8 in Pronunciation.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Worrying that having a Bengali accent will reduce your score, leading to unnatural pronunciation."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Misunderstanding the criteria: IELTS is an international test that accepts all global accents as long as you are easily intelligible."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Correct syllable stress in multi-syllable words (e.g., pho-TOG-ra-phy vs PHO-to-graph).",
        "Pronounce ending consonants clearly (d, t, s, ed endings).",
        "Maintain clarity in consonant clusters (str, spl, thr)."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Word Stress Audit",
      poorResponse: "E-CO-no-my, E-co-NO-mic (Misplaced stress causes comprehension strain).",
      band8Response: "e-CON-o-my /ˌiː.kəˈnɑː.mɪk/ (Accurate syllable stress makes communication effortless).",
      breakdown: "Examiners rate how easy you are to understand throughout the test."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Mumbling final consonants in past tense verbs (e.g. saying 'walk' instead of 'walked')."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Read aloud 5 minutes daily, exaggerating final consonant endings (t, d, s, z)."
      ]
    },
    takeaway: "Accent is identity; pronunciation is clarity. Speak clearly with correct word stress and you will score Band 8+."
  },
  {
    id: 18,
    slug: "common-speaking-mistakes-audit",
    module: "speaking",
    moduleLabel: "IELTS Speaking",
    title: "Common IELTS Speaking Mistakes That Reduce Your Score",
    subtitle: "The Top 7 Candidate Pitfalls and How to Eliminate Them",
    icon: "🎙️",
    category: "Mistake Audit",
    readTime: "5 min read",
    targetBand: "Band 7.0+",
    summary: "Audit and eliminate the top 7 speaking errors: overuse of 'like', one-word answers, memorised idioms, and stopping prematurely.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Making simple avoidable errors during the exam that drop an otherwise solid 7.5 speaker down to a 6.5."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Test anxiety and lack of simulated exam condition practice."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Mistake 1: Filler overuse ('like', 'you know'). Replace with brief silence.",
        "Mistake 2: Changing verb tenses randomly. Anchor your answer in the correct timeframe.",
        "Mistake 3: Giving up mid-sentence. Always finish your thought."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Do you like travelling?",
      poorResponse: "Like, yeah, I like travel, you know, because it's like fun and like relaxing...",
      band8Response: "Yes, I really enjoy travelling. It offers a welcome respite from daily routines and allows me to explore distinct cultures.",
      breakdown: "Clean, professional, and filler-free."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Speaking too quietly. Confidence and voice projection directly impact perception of fluency."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Record a mock interview and count how many times you said 'like' or 'uhh'. Aim for zero."
      ]
    },
    takeaway: "Eliminate low-level fillers and tense slips to instantly boost your speaking score by 0.5 to 1.0 band."
  },

  // ============================================================================
  // READING (19–25)
  // ============================================================================
  {
    id: 19,
    slug: "find-answers-faster-in-reading",
    module: "reading",
    moduleLabel: "IELTS Reading",
    title: "How to Find Answers Faster in IELTS Reading",
    subtitle: "Synonym Mapping and Keyword Scanning Mastery",
    icon: "📖",
    category: "Speed & Accuracy",
    readTime: "5 min read",
    targetBand: "Band 7.5 – 9.0",
    summary: "Stop reading word-for-word. Learn how keyword mapping and scanning for parallel expressions lets you find 90% of answers in under 45 seconds.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Spending 4 minutes reading a passage line by line and having only 8 minutes left to answer 13 questions."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Approaching IELTS reading like a literature book rather than an informational search-and-match task."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Read the question first and identify Unchangeable Keywords (names, dates, numbers).",
        "Identify Changeable Keywords (verbs, adjectives) and predict their synonyms.",
        "Scan the passage for the target zone, then read ONLY those 2 sentences carefully."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Question: 'The company was established in the 19th century.'",
      poorResponse: "[Reads entire passage from line 1 word by word to find the company history].",
      band8Response: "[Instantly scans for capital letters and dates like '1850s', 'founded', 'set up']. Finds the exact line in 10 seconds.",
      breakdown: "Keyword anchoring saves 15 minutes across the full test."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Looking for the exact word from the question. Cambridge ALWAYS uses synonyms (e.g. 'reduce' → 'curb', 'dangerous' → 'hazardous')."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Practice 'Synonym Mapping': Match 20 question keywords with their exact passage synonyms after every test."
      ]
    },
    takeaway: "IELTS Reading is a vocabulary synonym test in disguise. Scan for meaning, not just exact spelling."
  },
  {
    id: 20,
    slug: "true-false-not-given-strategy",
    module: "reading",
    moduleLabel: "IELTS Reading",
    title: "True / False / Not Given: The Strategy Students Get Wrong",
    subtitle: "Stop Guessing and Start Proving with Strict Evidence Logic",
    icon: "📖",
    category: "Question Strategy",
    readTime: "5 min read",
    targetBand: "Band 8.0+",
    summary: "TFNG questions destroy scores when students guess. Master the strict 3-way logic test to achieve 100% accuracy every time.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Confusing FALSE (statement is explicitly contradicted) with NOT GIVEN (information is missing or cannot be proven)."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Bringing outside world knowledge or making assumptions that are not directly stated in the passage."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "TRUE: 100% agreement with the passage facts.",
        "FALSE: The passage explicitly states the OPPOSITE.",
        "NOT GIVEN: Impossible to prove TRUE or FALSE from the text alone."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Passage: 'Albert Einstein loved playing the violin.' Question: 'Albert Einstein was the best violinist in Germany.'",
      poorResponse: "Candidate thinks: 'He was a genius, so he must have been great!' → Selects TRUE.",
      band8Response: "The passage confirms he played the violin, but says NOTHING about whether he was 'the best' in Germany. → Correct Answer: NOT GIVEN.",
      breakdown: "Never assume. If the comparison or quantifier is not verified in the text, it is NOT GIVEN."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Ignoring modifying words like 'always', 'sometimes', 'all', 'mainly', 'only'."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Do 20 TFNG questions without timing and force yourself to underline the exact proving sentence for each."
      ]
    },
    takeaway: "If you cannot find the direct opposite stated in the passage, it is NOT GIVEN. Stop assuming."
  },
  {
    id: 21,
    slug: "matching-headings-step-by-step",
    module: "reading",
    moduleLabel: "IELTS Reading",
    title: "Matching Headings: A Step-by-Step Strategy",
    subtitle: "Extracting Core Paragraph Gist and Eliminating Distractor Headings",
    icon: "📖",
    category: "Skimming",
    readTime: "5 min read",
    targetBand: "Band 7.5+",
    summary: "Matching Headings is the most time-consuming question type. Learn the elimination matrix to match headings with speed and precision.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Picking a heading simply because a word from the heading appears in the paragraph."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Cambridge deliberately puts keywords from wrong headings as minor examples inside the paragraph to trap careless candidates."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Do Matching Headings FIRST before any other question type for that passage.",
        "Read the first 2 and last sentence of the paragraph for the main theme.",
        "Summarize the paragraph's core point in your own 3 words before looking at the list of headings."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Paragraph discussing why early steam trains failed despite high funding.",
      poorResponse: "Spots the word 'funding' → Picks heading 'Government Financial Subsidies'.",
      band8Response: "Analyzes paragraph focus: 'The core reason for early locomotive breakdown' → Picks heading 'Engineering Deficiencies in Early Transport'.",
      breakdown: "Distinguishes supporting detail from main overarching idea."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Reading every single heading before reading the paragraph and getting overwhelmed."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Read 5 paragraphs from Cambridge tests and write a 5-word heading for each without looking at the question sheet."
      ]
    },
    takeaway: "Match the main central argument of the whole paragraph, not an isolated supporting example."
  },
  {
    id: 22,
    slug: "skimming-vs-scanning-guide",
    module: "reading",
    moduleLabel: "IELTS Reading",
    title: "Skimming vs Scanning: When Should You Use Each?",
    subtitle: "The Two Reading Gears That Save 15 Minutes Per Test",
    icon: "📖",
    category: "Core Technique",
    readTime: "4 min read",
    targetBand: "Band 7.0+",
    summary: "Skimming is reading for general gist; scanning is hunting for specific data. Master when and how to switch between these two essential gears.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Using only one reading speed throughout the exam and running out of time on Passage 3."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Treating every word with equal importance instead of prioritizing structural topic sentences."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Gear 1 (Skim): 2-minute overview of entire passage structure.",
        "Gear 2 (Scan): Rapid eye movement targeting specific names, numbers, and technical terms."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Locating when Dr. John Watson published his treatise.",
      poorResponse: "Skims the entire text from start to finish.",
      band8Response: "Scans specifically for capital 'W' and 4-digit numbers. Locates in 8 seconds.",
      breakdown: "Scanning requires zero comprehension of surrounding words until the target is found."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Stopping to read interesting trivia in the passage that is completely irrelevant to the questions."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Scan a 900-word text for 10 specific names with a 60-second timer."
      ]
    },
    takeaway: "Skim for main ideas (Headings); scan for specific facts (MCQ, Fill in the blanks)."
  },
  {
    id: 23,
    slug: "deal-with-difficult-vocabulary-reading",
    module: "reading",
    moduleLabel: "IELTS Reading",
    title: "How to Deal With Difficult Vocabulary in IELTS Reading",
    subtitle: "Contextual Clues and Word Breakdown Strategies",
    icon: "📖",
    category: "Context Clues",
    readTime: "4 min read",
    targetBand: "Band 7.5+",
    summary: "You will encounter words you have never seen before. Learn how root words, prefixes, and sentence context reveal the meaning without a dictionary.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Freezing when encountering an unknown academic jargon word (e.g. 'anthropogenic', 'paleoclimatology') and losing confidence."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Assuming you need to know 100% of the words to get Band 9 in reading."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Identify the word's grammatical function (noun, verb, adjective).",
        "Look at prefix/suffix clues (e.g., 'anti-', 'de-', '-less').",
        "Look at neighboring contrast words ('however', 'unlike') or definitions in apposition."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Sentence: 'Unlike diurnal creatures, bats are nocturnal.'",
      poorResponse: "Panics over what 'diurnal' means.",
      band8Response: "Knows 'nocturnal' means active at night + 'unlike' means opposite → 'diurnal' must mean active during the day.",
      breakdown: "Decoded effortlessly from contrast context."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Spending 2 minutes trying to figure out a technical Latin species name that is not tested in any question."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Take an academic article and guess 5 unknown words from context before looking up the definitions."
      ]
    },
    takeaway: "You don't need to know every word. Decode from context and focus only on tested information."
  },
  {
    id: 24,
    slug: "why-running-out-of-time-in-reading",
    module: "reading",
    moduleLabel: "IELTS Reading",
    title: "Why You Keep Running Out of Time in IELTS Reading",
    subtitle: "The 17–20–23 Minute Protocol to Guarantee 100% Completion",
    icon: "📖",
    category: "Time Management",
    readTime: "5 min read",
    targetBand: "Band 7.5+",
    summary: "Spending 25 minutes on Passage 1 leaves you stranded on Passage 3. Master the 17-20-23 minute distribution protocol to complete all 40 questions with time to review.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Reaching question 32 when the invigilator calls '10 minutes remaining'."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Passage 1 is the easiest and Passage 3 is the most complex. Spending 20+ minutes on Passage 1 guarantees failure on Passage 3."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Passage 1: Max 17 minutes.",
        "Passage 2: Max 20 minutes.",
        "Passage 3: 23 minutes.",
        "Strict 90-Second Rule: If stuck on a question for >90 seconds, make an educated guess, circle the number, and move forward immediately."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Time Allocation Table",
      poorResponse: "Passage 1: 25 mins | Passage 2: 22 mins | Passage 3: 13 mins (Rushes & Guesses 8 questions).",
      band8Response: "Passage 1: 15 mins | Passage 2: 20 mins | Passage 3: 22 mins | Review: 3 mins (Answers every question calmly).",
      breakdown: "Proper pacing ensures easy and hard questions get their appropriate time."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Leaving answer transfer until the end. In IELTS Reading, there is NO extra 10-minute transfer time!"
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Set strict 17-minute alarms when practicing Passage 1 standalone sets."
      ]
    },
    takeaway: "There is no extra transfer time. Transfer as you go and maintain the 17-20-23 minute pace."
  },
  {
    id: 25,
    slug: "40-question-reading-time-management",
    module: "reading",
    moduleLabel: "IELTS Reading",
    title: "The 40-Question IELTS Reading Time Management Strategy",
    subtitle: "Tactical Question-Order Prioritization for Maximum Scores",
    icon: "📖",
    category: "Exam Protocol",
    readTime: "5 min read",
    targetBand: "Band 7.5 – 9.0",
    summary: "Never answer questions in purely numerical order. Learn which question types to solve first to build rapid momentum and maximize correct answers.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Getting bogged down in difficult Multiple Choice Questions at the start of a passage."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Blindly following the question sequence 1 to 13."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Step 1: Solve Matching Headings first (gives complete passage overview).",
        "Step 2: Solve Sentence Completion / Diagram Labelling (easy chronological scanning).",
        "Step 3: Solve Summary Completion & TFNG.",
        "Step 4: Solve global Multiple Choice Questions last."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Exam Question Sequencing",
      poorResponse: "Solves 4 hard global MCQs first, loses 8 minutes, gets stressed.",
      band8Response: "Solves 6 easy gap-fill questions first, locates passage zones, then answers the remaining questions in half the time.",
      breakdown: "Strategic order builds momentum and mental confidence."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Leaving empty answer spaces on the answer sheet. There is zero negative marking in IELTS!"
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Practice 1 full reading test rearranging question types in optimal tactical order."
      ]
    },
    takeaway: "Order of attack matters. Solve overview and gap-fill questions before deep analysis questions."
  },

  // ============================================================================
  // LISTENING (26–30)
  // ============================================================================
  {
    id: 26,
    slug: "predict-answers-before-audio-starts",
    module: "listening",
    moduleLabel: "IELTS Listening",
    title: "How to Predict Answers Before the Audio Starts",
    subtitle: "The 30-Second Pre-Listening Golden Window Strategy",
    icon: "🎧",
    category: "Pre-Listening",
    readTime: "4 min read",
    targetBand: "Band 7.5 – 9.0",
    summary: "The 30 seconds before each section is the most critical time in IELTS Listening. Learn how to predict word classes, numbers, and subject context to hear answers with 100% clarity.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Listening blindly without anticipating what kind of word fits in the blank."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Waiting for the audio to explain everything rather than using the question text as a predictive filter."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Check grammatical type needed: Noun, Verb, Adjective, Number, Date.",
        "Check surrounding prepositions: 'in...', 'at...', 'by...'",
        "Check plural requirements: 'a list of [Plural Noun]'."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Question: 'The conference will take place on [_____].'",
      poorResponse: "Expects anything. Gets confused between room number and day of the week.",
      band8Response: "Predicts: 'On' + date/day name (e.g., 'Tuesday' or '15th May'). Ear filters out all irrelevant words and locks onto the date.",
      breakdown: "Pre-activation of mental auditory filters guarantees accurate capture."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Checking past answers during the 30-second window instead of previewing the NEXT section."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Look at 10 listening gap-fills without audio and write predictions for grammar type and expected content."
      ]
    },
    takeaway: "Never look back during the test. Use every silent second to preview and predict upcoming answers."
  },
  {
    id: 27,
    slug: "listening-distractors-elimination",
    module: "listening",
    moduleLabel: "IELTS Listening",
    title: "IELTS Listening Distractors: How the Test Tries to Trick You",
    subtitle: "Spotting Self-Corrections, Reversals, and Synonym Traps",
    icon: "🎧",
    category: "Trap Elimination",
    readTime: "5 min read",
    targetBand: "Band 8.0+",
    summary: "In IELTS Listening, the first answer mentioned is frequently corrected or rejected. Learn the linguistic triggers that signal a distractor trap.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Writing down the first number or name you hear, only for the speaker to change their mind 2 seconds later."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Failing to wait for the complete thought to finish before committing to the answer."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Watch for reversal keywords: 'but', 'actually', 'instead', 'I used to think...', 'sorry, that was last year...'",
        "Wait for confirmation from the second speaker in dialogues."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Question: 'Time of departure: [_____]'",
      poorResponse: "Speaker: 'We'll leave at 8:30.' → Candidate writes '8:30'.",
      band8Response: "Speaker: 'We'll leave at 8:30. Oh wait, the bus has been delayed until 9:15 due to traffic.' → Writes '9:15'.",
      breakdown: "Reversal keyword 'Oh wait' overrides the initial distractor."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Assuming the first mentioned piece of information is final."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Listen to Section 1 sets and highlight all distractor words in the audio transcript."
      ]
    },
    takeaway: "Listen to the whole sentence before writing. Reversal markers always reveal the true answer."
  },
  {
    id: 28,
    slug: "why-lose-marks-when-understand-audio",
    module: "listening",
    moduleLabel: "IELTS Listening",
    title: "Why You Lose Marks Even When You Understand the Audio",
    subtitle: "The 4 Hidden Rules of the IELTS Listening Answer Sheet",
    icon: "🎧",
    category: "Accuracy",
    readTime: "4 min read",
    targetBand: "Band 7.5+",
    summary: "Understanding 100% of the conversation is useless if your spelling or word-count violates official grading rules. Master the technical accuracy checklist.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Hearing the correct word but getting zero marks due to singular/plural errors or exceeding word limits."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Ignoring the instruction: 'NO MORE THAN TWO WORDS AND/OR A NUMBER'."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Check the word limit before writing anything.",
        "Check plurals carefully: Did the speaker say 'hotel' or 'hotels'?",
        "Do not repeat words already printed on the question sheet."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Question: 'in the [_____]'",
      poorResponse: "Candidate writes 'in the morning' → Result: 'in the in the morning' (Marked WRONG).",
      band8Response: "Candidate writes 'morning' → Result: 'in the morning' (Marked 100% CORRECT).",
      breakdown: "Never duplicate printed prepositions."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Missing final 's' in plural nouns. A singular word for a plural answer receives 0 marks."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Audit your past listening tests and categorize errors: Was it hearing difficulty or technical error?"
      ]
    },
    takeaway: "Check word count limits and plural 's' on every single answer during transfer time."
  },
  {
    id: 29,
    slug: "spelling-plurals-numbers-listening",
    module: "listening",
    moduleLabel: "IELTS Listening",
    title: "Spelling, Plurals & Numbers: The Easy Marks Students Lose",
    subtitle: "The 50 Most Frequently Misspelled Words in IELTS Listening",
    icon: "🎧",
    category: "High Impact",
    readTime: "5 min read",
    targetBand: "Band 8.0+",
    summary: "Spelling mistakes cost more marks than complex vocabulary. Master the top 50 Cambridge listening trap words with double letters and silent consonants.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Misspelling common words like 'accommodation', 'environment', 'questionnaire', or confusing '15' with '50'."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "English phonetic inconsistencies and double consonant confusion."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "Master the 'teen' vs 'ty' intonation: 'fif-TEEN' (stress on teen) vs 'FIF-ty' (stress on fif).",
        "Memorize double letter traps: Accommodation (2 c's, 2 m's), Necessary (1 c, 2 s's)."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "High-Frequency Spelling Traps",
      poorResponse: "Acomodation, Enviroment, Goverment, Resturant.",
      band8Response: "Accommodation, Environment, Government, Restaurant.",
      breakdown: "1 wrong letter = 0 marks for that question."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Writing full words for dates instead of standard format (e.g. '15th Oct' is cleaner and faster)."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Write out the 50 common IELTS misspelled words twice weekly until 100% error-free."
      ]
    },
    takeaway: "One misspelled letter costs the entire mark. Perfect your high-frequency spelling list."
  },
  {
    id: 30,
    slug: "stay-focused-when-miss-listening-answer",
    module: "listening",
    moduleLabel: "IELTS Listening",
    title: "How to Stay Focused When You Miss an IELTS Listening Answer",
    subtitle: "The Immediate Mental Reset Protocol for Section 3 & 4",
    icon: "🎧",
    category: "Mindset",
    readTime: "4 min read",
    targetBand: "Band 7.5+",
    summary: "Missing one question often causes panic, resulting in missing the next 3 questions. Learn the instantaneous mental reset technique.",
    problem: {
      heading: "01 — Identify The Problem",
      description: "Worrying about question #14 while the audio is already discussing question #16, losing multiple marks in a row."
    },
    whyItHappens: {
      heading: "02 — Why It Happens",
      description: "Panic and cognitive fixation on sunk losses."
    },
    strategy: {
      heading: "03 — The Strategy",
      steps: [
        "The 3-Second Rule: If you realize an answer has passed, immediately let it go.",
        "Look ahead to the next question's keywords and anchor your focus on the current audio stream.",
        "Guess the missed answer during the final 10-minute transfer time."
      ]
    },
    demonstration: {
      heading: "04 — Demonstration",
      exampleQuestion: "Managing Cascading Losses",
      poorResponse: "Panics over missing #14 → misses #15, #16, #17 → Loses 4 whole marks.",
      band8Response: "Accepts #14 is gone in 1 second → Anchors on #15 keyword → Gets #15, #16, #17 correct → Loses only 1 mark.",
      breakdown: "Saves 3 marks simply through emotional discipline."
    },
    commonTrap: {
      heading: "05 — Common Trap",
      description: "Trying to rewind your memory during live playback."
    },
    practiceMethod: {
      heading: "06 — Practice Method",
      drills: [
        "Practice full listening tests with intentional distractions to build rock-solid focus."
      ]
    },
    takeaway: "A missed question is gone forever. Reset instantly to protect all subsequent marks."
  }
];
