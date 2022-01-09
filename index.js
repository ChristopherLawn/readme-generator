// Required dependencies and functions
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

// User questions function
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter a title for your project');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a detailed description of your project:',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please provide a description of your project');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide detailed installation instructions:',
            validate: installInput => {
                if (installInput) {
                  return true;
                } else {
                  console.log('Please provide installation instructions');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide all relevant usage information:',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please provide usage information');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide detailed guidelines for contributing to this project:',
            validate: contributionInput => {
                if (contributionInput) {
                  return true;
                } else {
                  console.log('Please provide contribution guidelines for this project');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide testing instructions for the project:',
            validate: testInput => {
                if (testInput) {
                  return true;
                } else {
                  console.log('Please provide testing instructions');
                  return false;
                }
              }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your application:',
            choices: ['Artistic', 'Creative Commons', 'GNU GPLv3', 'MIT', 'Mozilla'],
            default: 'Artistic'
        },
        {
            type: 'input',
            name: 'githubName',
            message: 'Please provide your GitHub username:',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please provide your GitHub username');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email:',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please provide your email');
                  return false;
                }
              }
        }
    ]);
};

// Writes README.md file and saves it to the 'dist' folder inside main project folder
promptUser().then(answers => {
    const readmeFile = generatePage(answers.title, answers.description, answers.installation, answers.usage, answers.contribution, answers.tests, answers.license, answers.githubName, answers.email);

    fs.writeFile('./dist/README.md', readmeFile, err => {
        if (err) throw err;
        console.log('README questionnaire complete! Checkout your new README.md file in the "dist" folder!')
    });
});
