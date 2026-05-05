import { aboutFileLabels, portfolioLinks, type AboutFile } from '../../data/portfolio'

type AboutSidebarProps = {
  activeAboutFile: AboutFile | null
  onOpenAboutFile: (file: AboutFile) => void
}

export function AboutSidebar({ activeAboutFile, onOpenAboutFile }: AboutSidebarProps) {
  return (
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
              onClick={() => onOpenAboutFile('bio')}
            >
              <span className="folder-dot bio" />
              {aboutFileLabels.bio}
            </button>
          </li>
          <li>
            <button
              className={`file-button ${activeAboutFile === 'resume' ? 'active' : ''}`}
              type="button"
              onClick={() => onOpenAboutFile('resume')}
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
          <li>{portfolioLinks.email}</li>
        </ul>
      </div>
    </aside>
  )
}
