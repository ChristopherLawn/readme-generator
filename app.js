const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
const [title, description, installation, usage, contribution, tests, license, githubName, email] = profileDataArgs;



fs.writeFile('./dist/README.md', generatePage(title, description, installation, usage, contribution, tests, license, githubName, email), err => {
    if (err) throw new Error(err);

    console.log('README complete! Checkout README.md to see the output!')
});