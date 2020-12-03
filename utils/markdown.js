// function to generate markdown for README
function generate_markdown(data) {
  return `# ${data.title}

## About the Project
${data.about_project}

## Contact Programmer for questions

${data.programmer}<br />
${data.author_position}<br />
[${data.gh_username}](https://github.com/${data.gh_username})<br />
${data.email}



## Contents

- [Technologies used](#technologies-used)
- [Key files in the repository](#key-files-in-the-repository)
- [Packages used](#packages-used)
- [Programming Competencies](#programming-competencies)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Copyright](#copyright)




## Technologies used

![Javascript Badge](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript)

## Packages used

${data.packages_used}

## Programming Competencies


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
