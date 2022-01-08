// Dynamic README template
const generatePage = (title, description, installation, usage, contribution, tests, license, githubName, email) => {
    // let badge;
    // let licenseLink;
    switch(license) {
        case 'Artistic':
            badge = "![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)"
            licenseLink = "This project is covered under the [Artistic License 2.0](https://opensource.org/licenses/Artistic-2.0)";
        case 'Creative Commons':
            badge = "![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)"
            licenseLink = "The project is covered under the [Creative Commons License](https://creativecommons.org/publicdomain/zero/1.0/)";
        case 'GNU GPLv3':
            badge = "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)"
            licenseLink = "The project is covered under the [GNU GPLv3 General Public License](https://www.gnu.org/licenses/gpl-3.0)";
        case 'MIT':
            badge = "![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)"
            licenseLink = "This project is covered under the [MIT License](https://choosealicense.com/licenses/mit/)";
        case 'Mozilla':
            badge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
            licenseLink = "This project is covered under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
    }
    return `
${badge}
# **${title}**

## **Description**
${description}

## **Table of Contents**
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## **Installation**
${installation}

## **Usage**
${usage}

## **Contribution**
${contribution}

## **Tests**
${tests}

## **License**
${licenseLink}

## **Questions**
Please contact me directly with any additional questions:
* [GitHub](https://github.com/${githubName})
* [Email](mailto:${email})
    `;
};

module.exports = generatePage;