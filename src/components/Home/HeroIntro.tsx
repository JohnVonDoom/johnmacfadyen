import { portfolioLinks, skills } from '../../data/portfolio'

export function HeroIntro() {
  return (
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
          <a href={portfolioLinks.github} target="_blank" rel="noreferrer">
            "{portfolioLinks.github}"
          </a>
          ;
        </code>
      </pre>
    </section>
  )
}
