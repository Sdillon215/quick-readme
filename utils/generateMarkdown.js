//function to generate markdown for README
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
${data.license}

## Contributing
${data.collab}

## Questions
https://github.com/${data.github}   
${data.email}
`;
}

module.exports = generateMarkdown;
