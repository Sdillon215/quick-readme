// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// const linkGen = linkText => {
//   if (!confirmLink) {
//     return '';
//   } 

//   return `## Deployed Link
//   ${link}`
// };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
[Description](ReadMe.md/#description)  
[Installation](ReadMe.md/#installation)  
[Usage](ReadMe.md/#usage)  
[License](ReadMe.md/#license)  
[Contributing](ReadMe.md/#contributing)  
[Questions](ReadMe.md/##questions)  

## Insallation
${data.steps}

## Usage
${data.examples}

## License

## Contributing
${data.collab}

## Questions
https://github.com/${data.github}   
${data.email}
`;
}

module.exports = generateMarkdown;
