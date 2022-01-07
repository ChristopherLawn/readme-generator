const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const readmeFile = generatePage(title, description, installation, usage, contribution, tests, license, githubName, email);

// fs.writeFile('./dist/README.md', readmeFile, err => {
//     if (err) throw err;

//     console.log('README complete! Checkout README.md to see the output!')
// });

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
            message: 'Please provide relevant usage information:',
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
            message: 'Please provide the name and GitHub link of the contributor to this project:',
            validate: contributionInput => {
                if (contributionInput) {
                  return true;
                } else {
                  console.log('Please provide the name and GitHub link of the contributor to this project');
                  return false;
                }
              }
        },
        // {
        //     type: 'confirm',
        //     name: 'confirmAddContributor',
        //     message: 'Would you like to enter an additional contributor?',
        //     default: true
        // },
        // {
        //     type: 'input',
        //     name: 'addContributor',
        //     message: 'Please provide the name and GitHub link of the contributor:',
        //     when: ({ confirmAddContributor }) => {
        //       if (confirmAddContributor) {
        //         return true;
        //       } else {
        //         return false;
        //       }
        //     }
        //   },
        // {
        //     type: 'confirm',
        //     name: 'confirmAddContributors',
        //     message: 'Would you like to enter an additional contributor?',
        //     default: false,
        //     when: ({confirmAdd}) => confirmAdd
        // },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test examples for the project:',
            validate: testInput => {
                if (testInput) {
                  return true;
                } else {
                  console.log('Please provide test examples');
                  return false;
                }
              }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your application:',
            choices: ['Community', 'MIT', 'GNU GPLv3'],
            default: 'Community'
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

// const addContributors = contributorData => {
//     if (!contributorData.contributors) {
//         contributorData.contributors = [];
//       }
//     console.log(`
//     Additional Contributors`);
//         return inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'contribution',
//                 message: 'Please provide the name and GitHub link of the contributor'
//             },
//             {
//                 type: 'confirm',
//                 name: 'confirmAddContributor',
//                 message: 'Would you like to enter an additional contributor?',
//                 default: false
//             }
//         ])
//         .then(addContributorsData => {
//             contributorData.contributors.push(addContributorsData);
//             if (addContributorsData.confirmAddContributor) {
//               return promptProject(contributorData);
//             } else {
//               return contributorData;
//             }
//           });
// };

promptUser().then(answers => {
    console.log(answers)
    });
    // addContributors().then(contributorData => {
    // console.log(contributorData)
    // })
