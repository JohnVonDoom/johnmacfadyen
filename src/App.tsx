import { useState } from 'react'
import './App.css'
import { AboutMe } from './components/About/AboutMe'
import { Home } from './components/Home/Home'
import { PortfolioShell } from './components/Layout/PortfolioShell'
import type { NavItem } from './data/portfolio'

function App() {
  const [activeSection, setActiveSection] = useState<NavItem>('_hello')
  const showAbout = activeSection === '_about-me'

  return (
    <PortfolioShell
      activeSection={activeSection}
      isAboutMode={showAbout}
      onSelectSection={setActiveSection}
    >
      {showAbout ? <AboutMe /> : <Home />}
    </PortfolioShell>
  )
}

export default App
