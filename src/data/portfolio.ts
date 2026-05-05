import resumePdf from '../assets/John_Macfadyen.pdf'

export const navItems = ['_hello', '_about-me'] as const

export type NavItem = (typeof navItems)[number]

export type AboutFile = 'bio' | 'resume'

export const aboutFileLabels: Record<AboutFile, string> = {
  bio: 'bio.md',
  resume: 'resume.md',
}

export const skills = ['C#', '.NET', 'Azure', 'Python', 'React']

export const portfolioLinks = {
  resumePdf,
  resumeDownloadName: 'John_Macfadyen_Resume.pdf',
  github: 'https://github.com/JohnVonDoom',
  linkedin: 'https://linkedin.com/in/john-macfadyen-76ba0511b',
  email: 'johnmacfadyen1@gmail.com',
} as const

export const aboutLines = [
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

export const resumeLines = [
  '/**',
  ' * Resume',
  ' * John Macfadyen',
  ' * Software Developer',
  ' *',
  ' * Experience',
  ' * Tegrit',
  ' * December 2021 - Present | Software Engineer | Livonia, MI',
  ' * - Engineered an EDRO retirement workflow using C# and .NET Core,',
  ' *   enhancing user experience and reducing processing time by 50%',
  ' *   within 3 months through full-stack development and end-to-end ownership.',
  ' * - Designed and implemented a Batch Calculator tool in C# and .NET Core,',
  ' *   enabling users to upload and create multiple accounts via CSV files,',
  ' *   boosting productivity by 65% and enhancing communication skills among teams.',
  ' * - Executed a lift-and-shift of on-prem file storage to Azure Blob Storage,',
  ' *   orchestrated nightly data processing with Azure Functions, and established',
  ' *   comprehensive CI/CD pipelines in Azure DevOps for seamless integration.',
  ' * - Transformed VB.NET WinForms applications, significantly improving user',
  ' *   experience and operational efficiency across multiple teams within 6 months',
  ' *   through collaborative full-stack modernization and communication.',
  ' *',
  ' * Computer Enterprises Inc',
  ' * October 2020 - November 2021 | Software Engineer | Remote',
  ' * - Boosted software application performance by 30% within 4 months through',
  ' *   cross-functional collaboration, enhancing scalability and user satisfaction.',
  ' * - Engineered and deployed a RESTful API utilizing C#, .NET, and Postgres',
  ' *   for user authentication and transaction management, achieving a 30%',
  ' *   reduction in response times and significantly improving system scalability.',
  ' * - Created an inventory management tool with .NET and MySQL, optimizing',
  ' *   stock tracking processes and driving user engagement within 4 months.',
  ' *',
  ' * Shoptelligence',
  ' * August 2019 - October 2020 | Software Engineer | Ann Arbor, MI, USA',
  ' * - Executed rigorous integration testing across diverse environments,',
  ' *   enhancing system reliability and achieving a 60% reduction in deployment',
  ' *   issues within 6 months using CI/CD practices.',
  ' * - Engineered robust Python-based integrations to unify platform services,',
  ' *   boosting interoperability and decreasing cross-service failures by 35%',
  ' *   in a Django environment.',
  ' * - Developed scalable Python APIs utilizing FastAPI, cutting latency by 40%',
  ' *   while efficiently managing over 1M daily requests across microservices,',
  ' *   leveraging Heroku for deployment.',
  ' * - Optimized database query performance through strategic ORM refactoring',
  ' *   and index implementation, reducing API response times from 800ms to',
  ' *   under 200ms and tripling throughput while employing Git for version control.',
  ' *',
  ' * Education',
  ' * B.S. Computer Science, University of Michigan-Dearborn',
  ' *',
  ' * Skills',
  ' * C#, .NET, Azure, Python, FastAPI, React, Angular, SQL,',
  ' * REST Services, Entity Framework, CI/CD, Agile SDLC',
  ' */',
]
