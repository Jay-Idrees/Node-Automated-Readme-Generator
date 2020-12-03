// function to generate markdown for README
function generate_markdown(data) {
  return `# ${data.title}

## About the Project
${data.about_project}

## Contact Programmer

${data.programmer}
${data.email}
${data.author_position}

## Contents
-[User Story](#user-story)
-[Technologies used](#technologies-used)
-[Key files in the repository](#key-files-in-the-repository)
-[Packages used](#packages-used)
-[Programming Competencies](#programming-competencies)
-[Installation](#installation)
-[Usage](#usage)
-[Testing](#testing)
-[License](#license)
-[Copyright](#copyright)

\`\`\`
## User Story
${data.user_story}
\`\`\`

## Technologies used

${data.techs_used}

## Packages used

${data.packages_used}

## Programming Competencies

-Using command terminal and the Node NPM package Inquirer to generate an automated readme file. Utilizing various node packages.
-Using gitignore to prevent node modules from being uploaded into the git repository.
-Creating table of contents in the readme file using a markdown function.
Obtaining tags for licenses and implantin them into the readme file automatically.
-Understanding the various forms of inputs available via inquirer.
Notice how the index.js file utilized a variety of prompt options for data input including 'input' 'checkbox' 'expandable choices' 'list' 'editor box' and 'password'
-Notice the use of "default" values as starting text for a quick modifiation of a readme file and "validate" to check that the user inputs a value.
-Demonstrates understanding regarding initilaiztion with npm init specifying web and developer dependencies in package.jason
-Demonstrates understanding about the npm commands for installation of packages, testing and running the application
Skills in pseudocoding.
-Application concepts regarding template literals and string-interpolation.
-Using git for version control.
-Writing file in Node.js.

## Key files in the repository

${data.file_list}


## Installation

For installation of the dependies, please run the following command in the terminal
\`\`\`
${data.to_install}
\`\`\`

## Usage

To start the application, please type the following command in the terminal

\`\`\`
${data.to_use}
\`\`\`


## Testing

For running the tests on application, please run the following commad

\`\`\`
${data.to_test}
\`\`\`


## License 

![License badge](https://img.shields.io/badge/license-${data.license}-blue.svg)


## Copyright 
${data.copyright}


`;
}

module.exports = generate_markdown;
