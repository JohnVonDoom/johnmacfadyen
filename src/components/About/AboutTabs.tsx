import { aboutFileLabels, type AboutFile } from '../../data/portfolio'

type AboutTabsProps = {
  activeAboutFile: AboutFile | null
  openAboutTabs: AboutFile[]
  onSelectAboutFile: (file: AboutFile) => void
  onCloseAboutFile: (file: AboutFile) => void
}

export function AboutTabs({
  activeAboutFile,
  openAboutTabs,
  onSelectAboutFile,
  onCloseAboutFile,
}: AboutTabsProps) {
  return (
    <div className="about-tabbar">
      {openAboutTabs.map((tab) => (
        <button
          key={tab}
          className={`about-tab ${activeAboutFile === tab ? 'active' : ''}`}
          type="button"
          onClick={() => onSelectAboutFile(tab)}
        >
          <span id={activeAboutFile === tab ? 'about-title' : undefined}>{aboutFileLabels[tab]}</span>
          <span
            className="tab-close"
            role="button"
            tabIndex={0}
            aria-label={`Close ${tab} tab`}
            onClick={(event) => {
              event.stopPropagation()
              onCloseAboutFile(tab)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                event.stopPropagation()
                onCloseAboutFile(tab)
              }
            }}
          >
            ×
          </span>
        </button>
      ))}
    </div>
  )
}
