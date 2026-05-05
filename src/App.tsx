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

type AboutFile = 'bio' | 'resume'

const aboutFileLabels: Record<AboutFile, string> = {
  bio: 'bio.md',
  resume: 'resume.md',
}

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

const resumeLines = [
  '/**',
  ' * Resume',
  ' * John Macfadyen',
  ' * Software Developer',
  ' *',
  ' * Experience',
  ' * Tegrit — Software Engineer',
  ' * 12/2021 - Present | Livonia, MI',
  ' * - Built EDRO retirement workflows with C# and .NET Core,',
  ' *   improving processing time and user experience.',
  ' * - Developed batch account tooling for CSV uploads,',
  ' *   increasing productivity and reducing manual entry.',
  ' * - Migrated file storage to Azure Blob Storage and',
  ' *   supported Azure Functions and Azure DevOps CI/CD.',
  ' *',
  ' * Computer Enterprises Inc — Software Engineer',
  ' * 10/2020 - 12/2021 | Pittsburgh, PA',
  ' * - Designed RESTful APIs with C#, .NET, SQL, and MySQL.',
  ' * - Improved application performance and scalability',
  ' *   across financial and inventory management systems.',
  ' *',
  ' * Shoptelligence — Software Engineer',
  ' * 08/2019 - 10/2020 | Ann Arbor, MI',
  ' * - Built Python and FastAPI services for high-volume APIs.',
  ' * - Improved integrations, reliability, and query performance.',
  ' *',
  ' * Education',
  ' * B.S. Computer Science, University of Michigan-Dearborn',
  ' *',
  ' * Skills',
  ' * C#, .NET, Azure, Python, FastAPI, React, Angular, SQL,',
  ' * REST Services, Entity Framework, CI/CD, Agile SDLC',
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
  const [activeAboutFile, setActiveAboutFile] = useState<AboutFile | null>('bio')
  const [openAboutTabs, setOpenAboutTabs] = useState<AboutFile[]>(['bio'])
  const currentLines = activeAboutFile === 'resume' ? resumeLines : aboutLines

  const openAboutFile = (file: AboutFile) => {
    setOpenAboutTabs((currentTabs) =>
      currentTabs.includes(file) ? currentTabs : [...currentTabs, file],
    )
    setActiveAboutFile(file)
  }

  const closeAboutTab = (file: AboutFile) => {
    setOpenAboutTabs((currentTabs) => {
      const nextTabs = currentTabs.filter((tab) => tab !== file)

      if (activeAboutFile === file) {
        setActiveAboutFile(nextTabs.at(-1) ?? null)
      }

      return nextTabs
    })
  }

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
              <button
                className={`file-button ${activeAboutFile === 'bio' ? 'active' : ''}`}
                type="button"
                onClick={() => openAboutFile('bio')}
              >
                <span className="folder-dot bio" />
                {aboutFileLabels.bio}
              </button>
            </li>
            <li>
              <button
                className={`file-button ${activeAboutFile === 'resume' ? 'active' : ''}`}
                type="button"
                onClick={() => openAboutFile('resume')}
              >
                <span className="folder-dot resume" />
                {aboutFileLabels.resume}
              </button>
            </li>
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
          {openAboutTabs.map((tab) => (
            <button
              key={tab}
              className={`about-tab ${activeAboutFile === tab ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveAboutFile(tab)}
            >
              <span id={activeAboutFile === tab ? 'about-title' : undefined}>{aboutFileLabels[tab]}</span>
              <span
                className="tab-close"
                role="button"
                tabIndex={0}
                aria-label={`Close ${tab} tab`}
                onClick={(event) => {
                  event.stopPropagation()
                  closeAboutTab(tab)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    event.stopPropagation()
                    closeAboutTab(tab)
                  }
                }}
              >
                ×
              </span>
            </button>
          ))}
        </div>

        {activeAboutFile ? (
          <div className="about-code-pane" aria-label="About me text editor">
            <ol className="line-numbers" aria-hidden="true">
              {currentLines.map((_, index) => (
                <li key={`line-${index + 1}`}>{index + 1}</li>
              ))}
            </ol>
            <pre className="about-code"><code>{currentLines.join('\n')}</code></pre>
          </div>
        ) : (
          <div className="empty-editor" aria-labelledby="about-title">
            <p id="about-title">Please select a &quot;file&quot;.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default App
