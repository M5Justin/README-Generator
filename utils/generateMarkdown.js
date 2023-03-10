// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![Github license(https://img.shields.io/badge/license-${data.license})]`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
return `[${license}](https://opensource.org/licenses/${license})`;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `


# ${data.project}

![Github license(https://img.shields.io/badge/license-${data.license})]

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:
${data.test}
`

};

module.exports = generateMarkdown;
