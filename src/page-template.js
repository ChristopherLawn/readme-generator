const generatePage = (title, description, installation, usage, contribution, tests, license, githubName, email) => {
    return `
    # ${title}

    ## Description
    ${description}
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)
    
    ## Installation
    ${installation}
    
    ## Usage
    ${usage}

    ## Contribution
    ${contribution}

    ## Tests
    ${tests}

    ## License
    ${license}

    ## Questions
    Please contact me with any additional questions
    [GitHub](https://github.com/${githubName})
    [Email]("mailto:${email}")
    `;
};

module.exports = generatePage;