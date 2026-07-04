import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";
import Head from 'next/head';
import Terminal from '../components/Terminal';

/* ── DATA ── */
const EXPERIENCE = [
  {
    date: 'June 2026',
    role: 'AutoPhysML Intern',
    company: 'GreyWiz',
    desc: 'Developing a project in GreyWiz',
    tags: ['Python', 'Machine Learning', 'LLMs', 'Automation'],
  },
  {
    date: 'June 2026',
    role: 'Research Intern',
    company: 'Center for Information Security, Forensics and Cyber Resilience, PES University',
    desc: 'Researching explainable cross-architecture IoT malware detection using machine learning and SHAP analysis to improve model interpretability and cybersecurity.',
    tags: ['Machine Learning', 'SHAP', 'IoT Security', 'Cybersecurity'],
  },
];

const PROJECTS = [
  {
    num: '01',
    icon: '🛡️',
    name: 'Vigil Insight',
    desc: 'Vigil Insight is an ML based public safety application that uses machine learning and geospatial analysis to predict crime risk, visualize crime hotspots, and recommend safer travel routes.',
    tags: ['React Native', 'FastAPI', 'ML', 'Node.js'],
  },
  {
    num: '02',
    icon: '⚡',
    name: 'Other ML Projects',
    desc: 'Built various end-to-end ML projects from data pipelines and model training, including agentic AI pipelines, IoT malware detectors, and data validation systems.',
    tags: ['Python', 'Machine Learning', 'FastAPI', 'Data Pipelines'],
  },
];

const SKILLS = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Python', pct: 95 },
      { name: 'Java', pct: 80 },
      { name: 'C', pct: 75 },
    ],
  },
  {
    title: 'Data Science & ML',
    items: [
      { name: 'Pandas', pct: 90 },
      { name: 'NumPy', pct: 85 },
      { name: 'Matplotlib', pct: 80 },
      { name: 'Seaborn', pct: 75 },
      { name: 'Plotly Dash', pct: 70 },
      { name: 'Scikit-Learn', pct: 85 },
    ],
  },
  {
    title: 'Tools & Databases',
    items: [
      { name: 'MySQL', pct: 80 },
      { name: 'Tableau & Cognos', pct: 75 },
      { name: 'Git / GitHub', pct: 85 },
      { name: 'Jupyter Notebook', pct: 90 },
      { name: 'Excel', pct: 85 },
    ],
  },
  {
    title: 'Web Development',
    items: [
      { name: 'HTML', pct: 95 },
      { name: 'CSS', pct: 90 },
      { name: 'JavaScript', pct: 85 },
    ],
  },
];

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'Hackathon Finalist',
    desc: 'Top 21 out of 600+ teams with Project Vigil Insight — real-time crime risk analysis platform.',
  },
  {
    icon: '📜',
    title: 'IBM Certifications',
    desc: 'Certified in multiple IBM Data Science, demonstrating industry-recognized ML expertise.',
  },
  {
    icon: '🔬',
    title: 'Working on a Research',
    desc: 'Developing a framework for IoT malware detection with cross-architecture generalization.',
  },
  {
    icon: '⚡',
    title: 'Full-stack ML Projects',
    desc: 'Built an End-to-end ML projects from data pipelines and model training.',
  },
  {
    icon: '🛡️',
    title: 'Vigil Insight',
    desc: 'Vigil Insight is an ML based public safety application that uses machine learning and geospatial analysis to predict crime risk, visualize crime hotspots, and recommend safer travel routes.',
  },
  {
    icon: '👥',
    title: 'Leadership Roles',
    desc: 'Held multiple leadership roles at PES University, serving as Deputy Head of Init Club, Marketing & PR Head of Sahay AI, and an Organizer for University Bootstrap. Contributed to organizing and volunteering for major technical events, including CODEBLITZ, GAMEFORGE, MYSTARA, VICHAR, and the "Echoes of Excellence" alumni podcast series. Led a week-long Thunkable workshop, mentoring 300+ students in no-code app development.',
  },
];

const CERTIFICATIONS = [
  {
    title: 'Scholarship for Academic Excellence - Sem 2',
    org: 'PES University',
    date: 'Dec 2024',
  },
  {
    title: 'Scholarship for Academic Excellence - Sem 3',
    org: 'PES University',
    date: 'Aug 2025',
  },
  {
    title: 'IBM Data Science Professional Certificate',
    org: 'IBM, Coursera',
    date: 'May 2026',
  },
  {
    title: 'IBM Data Analyst Professional Certificate',
    org: 'IBM, Coursera',
    date: 'May 2026',
  },
  {
    title: 'TATA Forage Data Visualisation Job Simulation',
    org: 'TATA',
    date: 'Feb 2026',
  },
];

/* ── PAGE ── */
export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'certifications', 'achievements', 'contact'];
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Head>
        <title>Manvitha G K Portfolio</title>
        <meta name="description" content="Portfolio of Manvitha G K — ML Researcher and AI Engineer at PES University" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* NAV */}
      <nav className="nav">
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        <div className="nav-right">
          <div className="nav-links">
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''}>Certifications</a>
            <a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''}>Achievements</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
          <a href="mailto:manvithakannur@gmail.com" className="nav-cta">Hire me</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-content">
          <h1 className="hero-name">
            Manvitha <span className="teal">G K.</span>
          </h1>
          <p className="hero-title">
            Final Year BCA Student at PES University, Bangalore
          </p>
          <p className="hero-roles">
            Open to SDE · Data Science · Research roles · Data Analyst
          </p>
          <Terminal />
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="tab-section" style={{ paddingTop: '96px' }}>
        <div className="tab-label">about me</div>
        <div className="tab-card">
          <div className="about-grid">
            <div className="about-img-wrap">
              <div className="about-img-box">
                <img src="/avatar.png" alt="Manvitha Avatar" className="about-avatar" />
              </div>
            </div>
            <div className="about-text">
              <h2 className="section-title">Building systems<br />that actually matter.</h2>
              <p>
                I'm a third-year BCA student at PES University, Bangalore, currently running two internships simultaneously — one in ML-based cybersecurity research and another building an AutoPhysML product from scratch.
              </p>
              <p>
                I enjoy uncovering insights from data, building predictive models, and applying analytical thinking to solve real-world challenges. I'm constantly exploring new technologies and strengthening my skills through hands-on projects and practical learning.
              </p>
              <p>
                My experience includes working with <strong>Python, SQL, Pandas, NumPy, Scikit-learn, and data visualization tools</strong> to analyze datasets and develop machine learning solutions. I'm passionate about transforming raw data into meaningful insights and building intelligent, data-driven applications that create real-world value while continuously learning and growing in the field of AI and analytics.
              </p>
              <div className="about-facts">
                <div className="fact-card">
                  <div className="fact-val">2</div>
                  <div className="fact-lbl">Active Internships</div>
                </div>
                <div className="fact-card">
                  <div className="fact-val">2</div>
                  <div className="fact-lbl">Projects</div>
                </div>
                <div className="fact-card">
                  <div className="fact-val">Top 21</div>
                  <div className="fact-lbl">of 600+ Hackathon Teams</div>
                </div>
                <div className="fact-card">
                  <div className="fact-val">2</div>
                  <div className="fact-lbl">Research Papers Working On</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="tab-section">
        <div className="tab-label">where i've worked</div>
        <div className="tab-card">
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">
            Two concurrent internships — research and engineering
          </p>
          <div className="exp-list">
            {EXPERIENCE.map((e, i) => (
              <div className="exp-item" key={i}>
                <div className="exp-date">{e.date}</div>
                <div className="exp-dot" />
                <div className="exp-body">
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                  <div className="exp-desc">{e.desc}</div>
                  <div className="exp-tags">
                    {e.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="tab-section">
        <div className="tab-label">what i've built</div>
        <div className="tab-card">
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">
            From hackathon prototypes to production pipelines — each project is end-to-end owned, designed, and shipped.
          </p>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div className="project-card" key={i}>
                <div className="project-num">{p.num}</div>
                <div className="project-icon">{p.icon}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="tab-section">
        <div className="tab-label">what i use</div>
        <div className="tab-card">
          <h2 className="section-title">Skills</h2>
          <p className="section-sub">
            Proficient across the ML stack — from data wrangling and model training to backend APIs and mobile frontends.
          </p>
          <div className="skills-wrapper">
            {SKILLS.map((group, gi) => (
              <div className="skill-group" key={gi}>
                <div className="skill-group-title">{group.title}</div>
                {group.items.map(sk => (
                  <div className="skill-item" key={sk.name}>
                    <span className="skill-name">{sk.name}</span>
                    <div className="skill-bar-wrap">
                      <div className="skill-bar" style={{ width: `${sk.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="tab-section">
        <div className="tab-label">certifications</div>
        <div className="tab-card">
          <h2 className="section-title">Certifications & Awards</h2>
          <p className="section-sub">
            Recognitions for academic excellence and professional skill development.
          </p>
          <div className="exp-list">
            {CERTIFICATIONS.map((c, i) => (
              <div className="exp-item" key={i}>
                <div className="exp-date">{c.date}</div>
                <div className="exp-dot" />
                <div className="exp-body">
                  <div className="exp-role">{c.title}</div>
                  <div className="exp-company">{c.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="tab-section">
        <div className="tab-label">milestones</div>
        <div className="tab-card">
          <h2 className="section-title">Achievements</h2>
          <p className="section-sub">
            A few things I'm proud of — from competition wins to certified skills and research contributions.
          </p>
          <div className="achieve-grid">
            {ACHIEVEMENTS.map((a, i) => (
              <div className="achieve-card" key={i}>
                <div className="achieve-icon">{a.icon}</div>
                <div>
                  <div className="achieve-title">{a.title}</div>
                  <div className="achieve-desc">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="tab-section">
        <div className="tab-label">let's connect</div>
        <div className="tab-card">
          <div className="contact-wrap">
            <div className="contact-card">
              <h2>Open to the right opportunity.</h2>
              <p>
                I'm looking for roles where I can apply machine learning to solve real-world problems — end-to-end, from data to deployment. Mid-tier product companies, ML engineering, analytics, and research roles.
              </p>
              <div className="contact-links">
                <a href="mailto:manvithakannur@gmail.com" className="contact-link">
                  ✉️ Email
                </a>
                <a href="https://www.linkedin.com/in/manvitha3/" className="contact-link" target="_blank" rel="noopener noreferrer">
                  🔗 LinkedIn
                </a>
                <a href="https://github.com/manvithaaaaa" className="contact-link" target="_blank" rel="noopener noreferrer">
                  🐙 GitHub
                </a>
                <a href="https://drive.google.com/file/d/1Il4wODYt011HkJ6savv8loo4GtY3lgTa/view?usp=sharing" className="contact-link" target="_blank" rel="noopener noreferrer">
                  📄 Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
