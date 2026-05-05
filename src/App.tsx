import { useState } from 'react'
import './App.css'
import codeSnippetOne from './assets/code-snippet 1.png'
import codeSnippetTwo from './assets/code-snippet 2.png'
import codeSnippetThree from './assets/code-snippet 3.png'
import codeSnippetFour from './assets/code-snippet 4.png'
import codeSnippetFive from './assets/code-snippet 5.png'
import resumePdf from './assets/John_Macfadyen.pdf'

const navItems = ['_hello', '_about-me', '_projects', '_contact-me'] as const

type NavItem = (typeof navItems)[number]

const skills = ['C#', '.NET', 'Azure', 'Python', 'React']

const codeSnippets = [
  codeSnippetOne,
  codeSnippetTwo,
  codeSnippetThree,
  codeSnippetFour,
  codeSnippetFive,
]

const aboutLines = [
  '/**',
  ' * About me',
  ' * I am a Software Developer with experience building',
  ' * enterprise applications, APIs, cloud workflows, and',
  ' * performance-focused systems.',
  ' *',
  ' * My background includes C#, .NET, Azure, Python,',
  ' * FastAPI, React, Angular, SQL, and CI/CD workflows.',
  ' *',
  ' * I have worked across financial, SaaS, and enterprise',
  ' * environments, modernizing legacy systems, improving',
  ' * performance, and delivering tools that streamline',
  ' * workflows for real users.',
  ' *',
  ' * Education: B.S. Computer Science,',
  ' * University of Michigan-Dearborn.',
  ' */',
]

function App() {
  const [activeSection, setActiveSection] = useState<NavItem>('_hello')

  const showAbout = activeSection === '_about-me'

  return (
    <main className="portfolio-home" aria-label="John Macfadyen portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className={`editor-window ${showAbout ? 'about-mode' : ''}`}>
        <header className="editor-topbar" aria-label="Portfolio navigation">
          <button className="brand" type="button" onClick={() => setActiveSection('_hello')}>
            john-macfadyen
          </button>

          <nav className="nav-tabs" aria-label="Main sections">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className={`nav-tab ${activeSection === item ? 'active' : ''}`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        </header>

        {showAbout ? <AboutMe /> : <Home />}

        <footer className="editor-footer">
          <a href={resumePdf} download="John_Macfadyen_Resume.pdf" aria-label="Download resume">
            Resume
          </a>
          <a href="https://github.com/SpaceC0wb0y" target="_blank" rel="noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/john-macfadyen-76ba0511b"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </footer>
      </section>
    </main>
  )
}

function Home() {
  return (
    <div className="home-content" id="hello">
      <section className="hero-copy" aria-labelledby="intro-title">
        <p className="eyebrow">Hi all. I am</p>
        <h1 id="intro-title">John Macfadyen</h1>
        <p className="role">&gt; Software Developer</p>

        <div className="resume-strip" aria-label="Core technologies">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <pre className="code-card" aria-label="GitHub profile code snippet">
          <code>
            <span className="comment">// experienced in enterprise apps, APIs, and cloud workflows</span>{'\n'}
            <span className="comment">// find my profile on Github:</span>{'\n'}
            <span className="keyword">const</span> <span className="variable">githubLink</span>{' '}
            <span className="operator">=</span>{' '}
            <a href="https://github.com/SpaceC0wb0y" target="_blank" rel="noreferrer">
              "https://github.com/SpaceC0wb0y"
            </a>
            ;
          </code>
        </pre>
      </section>

      <aside className="snippet-showcase" aria-label="Featured code snippets">
        {codeSnippets.map((snippet, index) => (
          <img
            key={snippet}
            className={`snippet-card snippet-card-${index + 1}`}
            src={snippet}
            alt={`Code snippet preview ${index + 1}`}
          />
        ))}
      </aside>
    </div>
  )
}

function AboutMe() {
  return (
    <section className="about-layout" aria-labelledby="about-title">
      <aside className="about-sidebar" aria-label="About me file explorer">
        <div className="folder-section">
          <button className="folder-title" type="button">
            <span className="chevron">▾</span>
            personal-info
          </button>
          <ul className="file-tree">
            <li>
              <span className="chevron muted">›</span>
              <span className="folder-dot bio" />
              bio
            </li>
            <li>
              <span className="chevron muted">›</span>
              <span className="folder-dot interests" />
              interests
            </li>
            <li className="active">
              <span className="chevron">▾</span>
              <span className="folder-dot education" />
              education
            </li>
            <li className="nested">high-school</li>
            <li className="nested">university</li>
          </ul>
        </div>

        <div className="folder-section contacts-section">
          <button className="folder-title" type="button">
            <span className="chevron">▾</span>
            contacts
          </button>
          <ul className="contact-tree">
            <li>johnmacfadyen1@gmail.com</li>
            <li>7346791691</li>
          </ul>
        </div>
      </aside>

      <div className="about-editor">
        <div className="about-tabbar">
          <span id="about-title">about-me</span>
          <span aria-hidden="true">×</span>
        </div>

        <div className="about-code-pane" aria-label="About me text editor">
          <ol className="line-numbers" aria-hidden="true">
            {aboutLines.map((_, index) => (
              <li key={`line-${index + 1}`}>{index + 1}</li>
            ))}
          </ol>
          <pre className="about-code"><code>{aboutLines.join('\n')}</code></pre>
        </div>
      </div>
    </section>
  )
}

export default App
