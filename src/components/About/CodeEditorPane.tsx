type CodeEditorPaneProps = {
  lines: string[]
  downloadLink?: {
    href: string
    filename: string
    label: string
  }
}

export function CodeEditorPane({ lines, downloadLink }: CodeEditorPaneProps) {
  return (
    <div className="about-code-pane" aria-label="About me text editor">
      <ol className="line-numbers" aria-hidden="true">
        {lines.map((_, index) => (
          <li key={`line-${index + 1}`}>{index + 1}</li>
        ))}
      </ol>
      <div className="about-code-content">
        <pre className="about-code"><code>{lines.join('\n')}</code></pre>

        {downloadLink && (
          <pre className="resume-download-code" aria-label="Resume download code snippet">
            <code>
              <span className="comment">// download resume:</span>{'\n'}
              <span className="keyword">const</span> <span className="variable">resumePdf</span>{' '}
              <span className="operator">=</span>{' '}
              <a href={downloadLink.href} download={downloadLink.filename}>
                &quot;{downloadLink.label}&quot;
              </a>
              ;
            </code>
          </pre>
        )}
      </div>
    </div>
  )
}
