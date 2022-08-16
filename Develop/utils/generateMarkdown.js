// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){return ``} else {return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`}
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'GNU AGPLv3') {
    return 'https://www.gnu.org/licenses/agpl-3.0.en.html'
  }
  if (license === 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  }
  if (license === 'GNU LGPLv3') {
    return 'https://www.gnu.org/licenses/lgpl-3.0.en.html'
  }
  if (license === 'Mozilla Public License 2.0') {
    return 'https://www.mozilla.org/en-US/MPL/2.0/'
  }
  if (license === 'Apache License 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0'
  }
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT'
  }
  if (license === 'Boost Software License 1.0') {
    return 'https://www.boost.org/LICENSE_1_0.txt'
  }
  if (license === 'The Unlicense') {
    return 'https://unlicense.org/'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ``;
  } else {
    return `## Licenses
    This project is licensed under ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.licenses)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please direct questions about this project to:
  Github: https://github.com/${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
