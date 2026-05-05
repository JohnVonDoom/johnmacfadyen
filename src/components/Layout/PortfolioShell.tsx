import type { ReactNode } from 'react'
import type { NavItem } from '../../data/portfolio'
import { EditorFooter } from './EditorFooter'
import { EditorTopbar } from './EditorTopbar'

type PortfolioShellProps = {
  activeSection: NavItem
  isAboutMode: boolean
  onSelectSection: (section: NavItem) => void
  children: ReactNode
}

export function PortfolioShell({
  activeSection,
  isAboutMode,
  onSelectSection,
  children,
}: PortfolioShellProps) {
  return (
    <main className="portfolio-home" aria-label="John Macfadyen portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className={`editor-window ${isAboutMode ? 'about-mode' : ''}`}>
        <EditorTopbar activeSection={activeSection} onSelectSection={onSelectSection} />
        {children}
        <EditorFooter />
      </section>
    </main>
  )
}
