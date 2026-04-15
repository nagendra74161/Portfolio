export const skills = [
  { label: 'Java', category: 'Programming' },
  { label: 'Python', category: 'Programming' },
  { label: 'JavaScript', category: 'Programming' },
  { label: 'Selenium', category: 'Automation' },
  { label: 'Cypress', category: 'Automation' },
  { label: 'Playwright', category: 'Automation' },
  { label: 'API Testing', category: 'Testing' },
  { label: 'UI Testing', category: 'Testing' },
  { label: 'Regression Testing', category: 'Testing' },
  { label: 'Jenkins', category: 'CI/CD' },
  { label: 'GitHub Actions', category: 'CI/CD' },
  { label: 'TestNG', category: 'Other' },
  { label: 'JUnit', category: 'Other' },
  { label: 'Postman', category: 'Other' },
];

export const experiences = [
  {
    company: 'Quantum Quality Lab',
    role: 'Senior Automation Tester',
    duration: 'Mar 2024 - Present',
    contributions: [
      'Designed and maintained Selenium and Playwright test suites for web application releases.',
      'Reduced regression cycle time by 45% through script modularization and parallel execution.',
      'Mentored junior testers on BDD automation patterns and CI pipeline integration.',
    ],
  },
  {
    company: 'Velocity Tech Systems',
    role: 'Automation Engineer',
    duration: 'Jan 2022 - Feb 2024',
    contributions: [
      'Implemented Cypress-based automation for end-to-end UI flows, improving defect detection.',
      'Built API test frameworks with Java and Postman for contract validation and regression.',
      'Collaborated with DevOps to deploy automated tests into Jenkins and GitHub Actions.',
    ],
  },
];

export const projects = [
  {
    title: 'Cross-Browser Regression Suite',
    description: 'A robust Playwright framework that validates UI behavior across desktop and mobile browsers with dynamic reporting.',
    tools: ['Playwright', 'Node.js', 'Allure', 'GitHub Actions'],
    github: 'https://github.com/placeholder/automation-regression-suite',
  },
  {
    title: 'API Contract Validator',
    description: 'Java-based API test harness for REST endpoints, including schema validation, data-driven tests, and CI integration.',
    tools: ['Java', 'RestAssured', 'TestNG', 'Postman'],
    github: 'https://github.com/placeholder/api-contract-validator',
  },
  {
    title: 'Cypress UX Smoke Kit',
    description: 'A scalable Cypress project focused on smoke testing critical user journeys with custom retries and accessibility checks.',
    tools: ['Cypress', 'JavaScript', 'Jenkins'],
    github: 'https://github.com/placeholder/cypress-ux-smoke-kit',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
];

export const typingPhrases = [
  'Building reliable automation suites.',
  'Delivering high quality releases.',
  'Accelerating CI/CD test coverage.',
];
