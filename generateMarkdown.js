// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
        return "";
    }
    const licenseBadges = {
        MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
        GPLv3: "https://img.shields.io/badge/License-GPLv3-blue.svg",
        "Apache 2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
        "BSD 3-Clause": "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
    };
    return licenseBadges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return "";
      }
      const licenseLinks = {
        MIT: "https://opensource.org/licenses/MIT",
        GPLv3: "https://www.gnu.org/licenses/gpl-3.0",
        "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
        "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
      };
      return licenseLinks[license];
}
    


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
      }
      return `
    ## License
    This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
 # ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
For any questions, feel free to contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

`;
}

export default generateMarkdown;
