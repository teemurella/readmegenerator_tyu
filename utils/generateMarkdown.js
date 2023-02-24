// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  return `[![License](https://img.shields.io/badge/License-${License}-yellow.svg)](https://opensource.org/licenses/MIT)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  return `\n * [License](#License)\n`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  return `\n## License\n
  ${License}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.github}/${data.repo}
  ${renderLicenseBadge(data.License)}
  # Description
  ${data.description}
  # Table Of Contents:
  * [installation](#installation)
  * [usage](#usage)
  ${renderLicenseLink(data.License)}
  * [credits](#credits)
  * [test](#test)
  

  ## installation
  ${data.packages}
  ## contact info
  ${data.contact}
  ${data.email}
  ## usage
  ${data.usage}
  ${renderLicenseSection(data.License)}
  ## credits
  ${data.credit}
  ## test
  ${data.test}
`;
}

module.exports = generateMarkdown;
