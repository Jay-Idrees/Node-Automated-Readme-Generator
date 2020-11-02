// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## About the Project
${data.about_project}

## Contact Author

${data.author}
${data.email}
${data.author_position}

## Technologies used

${data.techs_used}

## Files in the repository

${data.file_list}


## Featured Programing skills

${data.skill_set}

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

module.exports = generateMarkdown;
