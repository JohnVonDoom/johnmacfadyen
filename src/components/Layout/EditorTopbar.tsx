import { navItems, type NavItem } from '../../data/portfolio'

type EditorTopbarProps = {
  activeSection: NavItem
  onSelectSection: (section: NavItem) => void
}

export function EditorTopbar({ activeSection, onSelectSection }: EditorTopbarProps) {
  return (
    <header className="editor-topbar" aria-label="Portfolio navigation">
      <button className="brand" type="button" onClick={() => onSelectSection('_hello')}>
        john-macfadyen
      </button>

      <nav className="nav-tabs" aria-label="Main sections">
        {navItems.map((item) => (
          <button
            key={item}
            type="button"
            className={`nav-tab ${activeSection === item ? 'active' : ''}`}
            onClick={() => onSelectSection(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  )
}
