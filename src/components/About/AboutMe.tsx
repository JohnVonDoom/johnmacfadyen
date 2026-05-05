import { useState } from 'react'
import { aboutLines, portfolioLinks, resumeLines, type AboutFile } from '../../data/portfolio'
import { AboutSidebar } from './AboutSidebar'
import { AboutTabs } from './AboutTabs'
import { CodeEditorPane } from './CodeEditorPane'
import { EmptyEditor } from './EmptyEditor'

export function AboutMe() {
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
      <AboutSidebar activeAboutFile={activeAboutFile} onOpenAboutFile={openAboutFile} />

      <div className="about-editor">
        <AboutTabs
          activeAboutFile={activeAboutFile}
          openAboutTabs={openAboutTabs}
          onSelectAboutFile={setActiveAboutFile}
          onCloseAboutFile={closeAboutTab}
        />

        {activeAboutFile ? (
          <CodeEditorPane
            lines={currentLines}
            downloadLink={
              activeAboutFile === 'resume'
                ? {
                    href: portfolioLinks.resumePdf,
                    filename: portfolioLinks.resumeDownloadName,
                    label: 'John_Macfadyen_Resume.pdf',
                  }
                : undefined
            }
          />
        ) : (
          <EmptyEditor />
        )}
      </div>
    </section>
  )
}
