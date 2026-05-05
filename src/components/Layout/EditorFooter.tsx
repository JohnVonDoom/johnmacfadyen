import { portfolioLinks } from '../../data/portfolio'

export function EditorFooter() {
  return (
    <footer className="editor-footer">
      <a
        href={portfolioLinks.resumePdf}
        download={portfolioLinks.resumeDownloadName}
        aria-label="Download resume"
      >
        Resume
      </a>
      <a href={portfolioLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        GitHub
      </a>
      <a href={portfolioLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        LinkedIn
      </a>
    </footer>
  )
}
