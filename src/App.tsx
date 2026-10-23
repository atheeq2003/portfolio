import { useEffect, useState } from 'react';
import {
  ArrowDownRight, ArrowUpRight, BrainCircuit, Check, Code2, Sun, Moon,
  Github, Linkedin, Mail, Menu, Network, Sparkles, X, Workflow, MapPin, GraduationCap,
  Database, Eye, Layers3, ExternalLink, MessageCircleQuestion,
  ShieldCheck, BookOpen, Activity, Radio, Braces, ShieldAlert, History, DatabaseZap, GitFork
} from 'lucide-react';
import ProjectVisual from './ProjectVisual';

const experienceProjects = [
  {
    number: '01',
    type: 'ENTERPRISE AI · TEXT-TO-SQL · OBSERVABILITY',
    title: 'Realty of America — Conversational Data Assistant',
    description: 'Delivered a production-grade AI Data Assistant using LangChain’s SQLDatabase Toolkit for natural-language-to-SQL across 50+ isolated enterprise datasets. Automated ingestion, schema sanitization, and permanent view creation, reducing manual engineering overhead by 80%; added LangSmith observability.',
    stack: ['Python', 'LangChain', 'PostgreSQL', 'LangSmith', 'Text-to-SQL'],
    icon: Database,
    visual: 'sql'
  },
  {
    number: '02',
    type: 'ENERGY MARKETS · FORECASTING · RAG',
    title: 'ChiGrids — Energy Market AI',
    description: 'Built with Django, LangChain, and Gemini 2.5 Flash for dynamic tool calling, real-time calculations, and SSE streaming. Combined SARIMA-EGARCH and Quantile Regression for day-ahead P10/P50/P90 pricing bands with PGVector RAG and regulatory guardrails.',
    stack: ['Django', 'LangChain', 'Gemini 2.5 Flash', 'PGVector', 'Forecasting'],
    icon: Workflow,
    visual: 'forecast'
  },
  {
    number: '03',
    type: 'INSIGHTS AI AGENTS · TIME SERIES DB',
    title: 'WEGoT — AI Insights',
    description: 'Developed asynchronous AI Insight Agents using asyncio and Gemini 2.5 Flash to analyze operational and portfolio data. Added Pydantic-validated structured outputs for consistent JSON, site-efficiency metrics, anomaly detection, and CXO-level insights.',
    stack: ['Python', 'asyncio', 'Gemini 2.5 Flash', 'Pydantic', 'AI Agents'],
    icon: Network,
    visual: 'agents'
  },
  {
    number: '04',
    type: 'CONVERSATIONAL AI · LEARNING QUIZZES',
    title: 'Stockz11 — Conversational Agent',
    description: 'A real-time conversational financial assistant built with Django and LangChain, using Server-Sent Events for low-latency streaming and multi-turn contextual memory to serve structured financial learning content with prompt guardrails.',
    stack: ['Django', 'LangChain', 'SSE', 'Contextual Memory', 'Prompt Guardrails'],
    icon: MessageCircleQuestion,
    visual: 'quiz',
    github: '',
    demo: ''
  }
];

const personalProjects = [
  {
    number: '01',
    type: 'PERSONAL PROJECT · COMPUTER VISION',
    title: 'Lung Disease Diagnosis & Severity',
    description: 'Deep-learning framework for lung disease segmentation, diagnosis, and severity assessment. MultiRes U-Net achieved a reported IoU of 0.92 and reduced segmentation error by 30%; Parrot Optimizer-based CNN feature optimization reduced training time by 25%.',
    stack: ['TensorFlow', 'MultiRes U-Net', 'CNN', 'Parrot Optimizer', 'Computer Vision'],
    icon: Eye,
    visual: 'lung',
    github: 'https://github.com/atheeq2003/Optimized-DLFramework-Lung-Disease-Classification-Severity-Assessment',
    demo: 'https://atheeq2003-disease-classification-severity-assessment.streamlit.app/'
  },
  {
    number: '02',
    type: 'PERSONAL PROJECT · EXPLORATORY DATA ANALYSIS',
    title: 'Road Collision Severity Analysis',
    description: 'Exploratory analysis of a road-collision dataset with 101,525 records and 60 fields. The dataset was cleaned and validated for missing values and duplicates, then examined for severity patterns across slight, serious, and fatal collisions.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA'],
    icon: Database,
    visual: 'severity',
    github: 'https://github.com/atheeq2003/exploratory_data_analysis_of_road_collisions_and_collision_severity_in_great_britain',
    demo: ''
  }
];

const skillGroups = [
  { title: 'Generative AI', icon: BrainCircuit, skills: ['LLM Orchestration', 'LangChain', 'LangGraph', 'RAG Pipelines', 'Prompt Engineering', 'LLM Evaluation', 'LangSmith', 'DSPy'] },
  { title: 'Backend & Data', icon: Database, skills: ['Python', 'Django / DRF', 'PostgreSQL', 'SQL', 'FAISS', 'PGVector', 'REST APIs', 'Data Processing'] },
  { title: 'Machine Learning', icon: Layers3, skills: ['TensorFlow', 'CNNs', 'Computer Vision', 'Feature Engineering', 'NumPy', 'Pandas', 'Matplotlib', 'Model Evaluation'] },
  { title: 'Engineering', icon: Code2, skills: ['Git & GitHub', 'Docker', 'Redis', 'Celery', 'JavaScript', 'Node.js', 'Tailwind CSS', 'GCP'] }
];

const coreStack = ['Python', 'LangChain', 'LangGraph', 'LangSmith', 'RAG', 'PGVector', 'FAISS', 'Django / DRF', 'PostgreSQL', 'Gemini', 'TensorFlow', 'Docker', 'GCP'];

const highlights = [
  { concept: 'Text-to-SQL on secured views', project: 'ROA', tool: 'SQLDatabase Toolkit', icon: DatabaseZap },
  { concept: 'LLM observability', project: 'ROA', tool: 'LangSmith', icon: Activity },
  { concept: 'Dynamic tool calling', project: 'ChiGrids', tool: 'Gemini 2.5 Flash', icon: Workflow },
  { concept: 'Guardrailed RAG', project: 'ChiGrids', tool: 'PGVector', icon: ShieldCheck },
  { concept: 'SSE streaming', project: 'ChiGrids · Stockz11', tool: 'Django', icon: Radio },
  { concept: 'Concurrent AI agents', project: 'WEGoT', tool: 'asyncio', icon: GitFork },
  { concept: 'Validated structured output', project: 'WEGoT', tool: 'Pydantic', icon: Braces },
  { concept: 'Prompt guardrails & memory', project: 'Stockz11', tool: 'LangChain', icon: ShieldAlert }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'atheeq.techie03@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const closeMenu = () => setMenuOpen(false);

  // Fade/slide each section in the first time it scrolls into view.
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`site-shell ${lightMode ? 'theme-light' : 'theme-dark'}`}>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Atheeq home">
            <span className="brand-mark" aria-hidden="true"><span className="brand-bracket">[</span><span className="brand-monogram">AR</span><span className="brand-bracket">]</span></span>
            <span className="brand-name">ATHEEQUR RAHAMAN</span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#highlights" onClick={closeMenu}>Highlights</a>
            <button className="theme-toggle" onClick={() => setLightMode(!lightMode)} aria-label={lightMode ? 'Switch to dark mode' : 'Switch to light mode'}>
              {lightMode ? <Moon size={15} /> : <Sun size={15} />}
              <span>{lightMode ? 'Dark mode' : 'Light mode'}</span>
            </button>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO AI / GENAI ROLES · REMOTE</div>
            <p className="hero-hello">Hi, I'm <b>Atheequr Rahaman</b> — AI Engineer.</p>
            <h1>Building AI that<br />works <span className="accent-word">in the real world.</span></h1>
            <p className="hero-description">
              I ship production-grade LLM applications, agentic AI, and RAG pipelines — with guardrails built in from day one.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
              <a className="button button-quiet" href={`${import.meta.env.BASE_URL}Atheequr_Rahaman_B_Resume.pdf`} target="_blank" rel="noreferrer">View resume <Eye size={15} /></a>
            </div>
          </div>

          <div className="hero-art reveal reveal-delay" aria-label="Abstract illustration of an AI system">
            <div className="art-topline"><span>MODEL / 001</span><span className="live-indicator"><i /> SYSTEM THINKING</span></div>
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="orbit orbit-tilt" />
            <div className="core-glow" />
            <div className="core-node"><BrainCircuit size={48} strokeWidth={1.15} /></div>
            <div className="orbit-card orbit-card-llm"><span className="mini-icon"><Sparkles size={14} /></span><span className="orbit-card-copy"><b>LLM</b><small>Reasoning layer</small></span><span className="card-status">●</span></div>
            <div className="orbit-card orbit-card-context"><span className="mini-icon"><Database size={14} /></span><span className="orbit-card-copy"><b>CONTEXT</b><small>Retrieval + data</small></span></div>
            <div className="orbit-card orbit-card-orchestrate"><span className="mini-icon"><Workflow size={14} /></span><span className="orbit-card-copy"><b>ORCHESTRATE</b><small>Tools & workflows</small></span></div>
            <div className="art-caption"><span>FROM IDEAS</span><span className="caption-line" /><span>TO INTELLIGENCE</span></div>
          </div>
        </section>

        <section className="intro-strip" aria-label="Quick facts">
          <div className="container facts-strip reveal reveal-stagger">
            <div className="fact"><Sparkles size={17} /><span><small>FOCUS</small>GenAI · RAG · AI Systems</span></div>
            <div className="fact"><GraduationCap size={17} /><span><small>EDUCATION</small>CSE · CEG · Anna University</span></div>
            <div className="fact"><MapPin size={17} /><span><small>LOCATION</small>Chennai · Open to remote</span></div>
            <div className="fact"><BookOpen size={17} /><span><small>CURRENTLY</small>Pursuing an online AI/ML course</span></div>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-heading reveal">
            <span className="section-index">01 / ABOUT</span>
            <h2>Engineer by training.<br /><span className="muted-heading">Builder by instinct.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-main reveal">
              <p className="large-copy">I'm an AI Engineer with experience delivering production-grade AI solutions across enterprise data, energy markets, and operational intelligence.</p>
              <p className="body-copy">At Cyces Innovation Labs LLP, I worked on conversational data assistants, energy-market AI, asynchronous insight agents, and retrieval-augmented generation. My work included text-to-SQL, LLM orchestration, observability, predictive forecasting, structured outputs, and compliance guardrails.</p>
              <p className="body-copy">I completed my B.E. in Computer Science and Engineering at the College of Engineering, Guindy, Anna University (September 2022 – June 2025), after a Diploma in Computer Science and Engineering at Panimalar Polytechnic College (2019 – 2022). Since July 2026, I have been taking an online AI/ML course.</p>
            </div>
            <div className="about-aside reveal reveal-stagger">
              <div className="aside-card"><span className="aside-number">01</span><div><b>Applied GenAI</b><p>LLM applications, RAG, agents, and prompt optimization.</p></div></div>
              <div className="aside-card"><span className="aside-number">02</span><div><b>End-to-end thinking</b><p>From ingestion and retrieval to evaluation and APIs.</p></div></div>
              <div className="aside-card aside-stack"><span className="aside-number">03</span><div><b>Tech stack</b><div className="skill-tags">{coreStack.map(skill => <span key={skill}>{skill}</span>)}</div><a className="stack-link" href="#skills">Full toolkit <ArrowDownRight size={14} /></a></div></div>
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading heading-row reveal">
              <div><span className="section-index">02 / PROFESSIONAL EXPERIENCE</span><h2>AI Engineer at<br /><span className="muted-heading">Cyces Innovation Labs.</span></h2></div>
              <p className="heading-note">June 2025 — June 2026 · SaaS · Chennai, India<br/>Production AI across enterprise data, energy markets, and operational intelligence.</p>
            </div>
            <div className="experience-intro reveal">
              <div className="experience-mark">C.</div>
              <div><h3>Cyces Innovation Labs LLP</h3><p>AI Engineer · LLM orchestration · Agentic AI · RAG pipelines · Predictive modeling</p></div>
            </div>
            <div className="project-grid reveal reveal-stagger">
              {experienceProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className={`project-card project-${project.visual}`} key={project.number}>
                    <div className="project-visual">
                      <div className="project-visual-top"><span>WORK / {project.number}</span><span className="visual-cross">✳</span></div>
                      <ProjectVisual kind={project.visual} />
                      <div className="project-visual-icon"><Icon size={17}/></div>
                    </div>
                    <div className="project-content">
                      <span className="project-type">{project.type}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="personal-heading reveal"><div><span className="section-index">03 / PERSONAL PROJECTS</span><h2>Experiments, analysis<br /><span className="muted-heading">& applied machine learning.</span></h2></div><p className="heading-note">Personal and academic work, presented separately from professional experience.</p></div>
            <div className="project-grid reveal reveal-stagger">
              {personalProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className={`project-card project-${project.visual}`} key={project.number + project.title}>
                    <div className="project-visual">
                      <div className="project-visual-top"><span>PERSONAL / {project.number}</span><span className="visual-cross">✳</span></div>
                      <ProjectVisual kind={project.visual} />
                      <div className="project-visual-icon"><Icon size={17}/></div>
                    </div>
                    <div className="project-content">
                      <span className="project-type">{project.type}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                      {(project.github || project.demo) && <div className="project-links">
                        {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a>}
                        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={13}/></a>}
                      </div>}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <div className="section-heading heading-row reveal">
            <div><span className="section-index">03 / TOOLKIT</span><h2>The tools I use to<br /><span className="muted-heading">turn ideas into systems.</span></h2></div>
            <p className="heading-note">A practical toolkit across AI applications, backend engineering, and machine learning.</p>
          </div>
          <div className="skills-grid reveal reveal-stagger">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return <div className="skill-card" key={group.title}>
                <div className="skill-card-head"><span className="skill-icon"><Icon size={18}/></span><span className="skill-count">0{index + 1}</span></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              </div>;
            })}
          </div>
        </section>

        <section className="section approach-section" id="highlights">
          <div className="container">
            <div className="section-heading heading-row reveal">
              <div><span className="section-index">04 / HIGHLIGHTS</span><h2>Concepts in production.<br /><span className="muted-heading">Applied across my AI work.</span></h2></div>
            </div>
            <div className="highlight-grid reveal reveal-stagger">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <a className="highlight-card" href="#work" key={item.concept}>
                    <span className="highlight-icon"><Icon size={17} /></span>
                    <b>{item.concept}</b>
                    <span className="highlight-meta"><span>{item.project}</span><em>{item.tool}</em></span>
                  </a>
                );
              })}
            </div>
            <a className="article-card reveal" href="https://atheeq.hashnode.dev/how-i-secure-production-ai-applications-with-guardrails" target="_blank" rel="noreferrer">
              <span className="article-icon"><BookOpen size={20} /></span>
              <span className="article-copy">
                <span className="article-label">FROM MY WRITING · HASHNODE</span>
                <b>How I Secure Production AI Applications with Guardrails</b>
                <small>Scope, safety, privacy, hallucination, and prompt-injection guardrails, plus three defence layers across prompt, retrieval, and database, with SQL examples.</small>
              </span>
              <span className="article-cta">Read article <ArrowUpRight size={16} /></span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <span className="section-index reveal">05 / CONTACT</span>
            <div className="contact-grid reveal reveal-delay">
              <div><h2>Have a problem<br />worth <span className="accent-word">solving?</span></h2><p className="contact-copy">I'm interested in AI engineering opportunities and conversations about building practical, thoughtful software.</p></div>
              <div className="contact-actions">
                <div className="social-tiles">
                  <a className="social-tile" href="https://www.linkedin.com/in/atheeq03/" target="_blank" rel="noreferrer"><span className="social-icon"><Linkedin size={24}/></span><b>LinkedIn</b><small>/in/atheeq03</small><ArrowUpRight size={16} className="social-arrow"/></a>
                  <a className="social-tile" href="https://github.com/atheeq2003" target="_blank" rel="noreferrer"><span className="social-icon"><Github size={24}/></span><b>GitHub</b><small>@atheeq2003</small><ArrowUpRight size={16} className="social-arrow"/></a>
                  <a className="social-tile" href="https://leetcode.com/u/Atheeq_03/" target="_blank" rel="noreferrer"><span className="social-icon"><Code2 size={24}/></span><b>LeetCode</b><small>@Atheeq_03</small><ArrowUpRight size={16} className="social-arrow"/></a>
                </div>
                <a className="contact-email" href={`mailto:${email}`}><span>{email}</span><ArrowUpRight size={20}/></a>
                <button className="copy-email" onClick={copyEmail}>{copied ? <Check size={15}/> : <Mail size={15}/>} {copied ? 'Copied to clipboard' : 'Copy email address'}</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container reveal">
        <a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true"><span className="brand-bracket">[</span><span className="brand-monogram">AR</span><span className="brand-bracket">]</span></span>
        <span className="brand-name">ATHEEQUR RAHAMAN</span></a>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#about">About</a><a href="#work">Projects</a><a href="#skills">Skills</a><a href="#highlights">Highlights</a><a href="#contact">Contact</a>
        </nav>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
