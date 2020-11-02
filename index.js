// Dependencies
const fs = require ('fs');
const inquirer= require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown');

const questions = [

    // Obtaining Title- using plain input prompt

    {
        type: 'input',
        name: 'title', // this is the name of the variable how the repsponse is stored
        message: 'Please enter the project name',
      },


    // Obtaiing info about the project - using editor prompt

    {
        type: 'editor',
        name: 'about_project',
        message: 'Please enter details about your project in the notepad',
        default: 'Developed with the skills I learnt at the bootcamp by the end of first week of coding boot camp experience at Columbia University, NY. Date of publication: 9/28/2020'
      },


    // Obtaining author Contact information- using plain input
    {
        type: 'input',
        name: 'author', // this is the name of the variable how the repsponse is stored
        message: 'Please enter the author name',
      },

      {
        type: 'input',
        name: 'email', 
        message: 'Please enter the author e-mail',
      },

      {
        type: 'input',
        name: 'author_position',
        message: "Please enter the author's current position"
      },

    // Obtaining information regarding the technologies Used in the project- using checkboxes

    {
        type: 'checkbox',
        name: 'techs_used',
        message: 'Please check mark if any of the technologies were used in this project',
        choices: ['HTML', 'CSS', ' Bootstrap', 'Javascript','Node.js', 'Express.js', 'Heroku', 'Version control using Git Hub', 'React.js','MySQL'],
    },


    // Obtaining username for Linking to git hub repository - using plain input

    {
        type: 'input',
        name: 'gh_username',
        message: "Please enter your current Git-Hub username"
      },

    // Obtaining a list of files in this repository - using editor

    {
        type: 'editor',
        name: 'file_list',
        message: 'Please enter the list of files in the note pad',
    
      },



    // Obtaining a list of featured Programer skills utilized in the creation of this project- using editor

    {
        type: 'editor',
        name: 'skil_list',
        message: 'Please enter the list of files in the note pad',
    
      },

    // Installation 
    {
        type: 'input',
        name: 'to_install',
        message: 'Please specify the command for installation',
        default: 'npm install'
    
      },

    
    
    //  Usage

    {
        type: 'input',
        name: 'to_use',
        message: 'Please specify the command for running this application',
        default: 'node index'
    
      },

    // Testing
    {
        type: 'input',
        name: 'to_test',
        message: 'Please specify the command for runing any test for this application',
        default: 'npm test'
    
      },

      // Obtaining information regarding license

      {
        type: 'expand',
        name: 'license',
        message: 'Please make a selection for license',
        choices: 
        [
            {key: 'a', value: 'MIT',},
            {key: 'b', value: 'APACHE 2.0',},
            {key: 'c', value: 'GPL 3.0',},
            {key: 'd', value: 'BSD 3',},
            {key: 'e', value: 'None',},
        ],
      },


    // Copy rights
{
    type: 'editor',
    name: 'copyright',
    message: 'Please enter information regarding copyright',

}

];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(error){

        if (error){
            return console.log(error)
        } // br-close if statement in error function

    }); // br-close eror function

}; // br-close write file function




// function to initialize program
function init() {

inquirer.prompt(questions).then(function(response){

    console.log(response)

    const markdown= generateMarkdown(response);
    console.log(markdown);

    writeToFile('readme.md', markdown)
});
};

// function call to initialize program
init();
