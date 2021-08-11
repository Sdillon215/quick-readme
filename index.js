// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = userData => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project! How, what, and why! (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmLink',
      message: 'Is your application deployed?',
      default: true
    },
    {
      type: 'input',
      name: 'link',
      message: 'Please provide the link!',
      when: ({ confirmLink }) => confirmLink
    },
    {
      type: 'input',
      name: 'steps',
      message: 'Please provide step by step instructions on how to install and run the application.',
      validate: stepsInput => {
        if (stepsInput) {
          return true;
        } else {
          console.log('Enter the steps required to run this app!');
        }
      }
    },
    {
      type: 'input',
      name: 'examples',
      message: 'Provide examples for use, instructions, and screenshots.',
      validate: examplesInput => {
        if (examplesInput) {
          return true;
        } else {
          console.log('please enter examples, instructions, and screenshot!');
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmCollab',
      message: 'Were there any collaborators?',
      default: true
    },
    {
      type: 'input',
      name: 'collab',
      message: 'Please provide their Github account!',
      when: ({ confirmCollab }) => confirmCollab
    },
    {
      type: 'checkbox',
      name: 'badge',
      choices: ['badge', 'badge', 'badge']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your github username');
        }
      }
    }
  ]).then(data => {
    console.log(data);
  });
};

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

questions();


