// Dependencies
const fs = require ('fs');
const inquirer= require('inquirer');
const generate_markdown= require('./utils/markdown');


function require_input(input_text){
   if(input_text){
     return true
   }
   return 'Please provide an answer, a response is required'
}




const questions = [

    // Obtaining Title- using plain input prompt

    {
        type: 'input',
        name: 'title', // this is the name of the variable where the repsponse is stored
        message: 'Please enter the project name',
        default:'Node Automated Readme Generator'
      },


    // Obtaiing info about the project - using editor prompt

    {
        type: 'editor',
        name: 'about_project',
        message: 'Please enter details about your project in the notepad',
        default: 'This project is a command line interface application that prompts the user to answer a series of brief questions, regarding a project and then generates a high quality readme file using Node.js and using the package inquirer. I developed this application during the third week of the coding bootcamp experience at Columbia University, NY. Date of publication: 11/01/2020'
      },


    // Obtaining author Contact information- using plain input
    {
        type: 'input',
        name: 'programmer', // this is the name of the variable how the repsponse is stored
        message: "Please enter the programmer's name",
        default:'Jay J. Idrees, MD, MPH'
      },

      {
        type: 'input',
        name: 'email', 
        message: "Please enter the author's e-mail",
        default:'jidrees@live.com'
      },

      {
        type: 'input',
        name: 'author_position',
        message: "Please enter the author's current position",
        default:'Full-Stack Software Engineer'
      },

    // Obtaining information regarding the technologies Used in the project- using checkboxes

    {
        type: 'checkbox',
        name: 'techs_used',
        message: 'Please check mark if any of the technologies were used in this project',
        choices: [
        'HTML', 
        'CSS', 
        'Bootstrap', 
        'Node.js', 
        'Javascript', 
        'jQuery',
        'React.js',
        'Express.js', 
        'Heroku', 
        'Git/Bash-Version control', 
        'Mongo DB',
        'MySQL',
        'Index DB',

        
      ],
    },

// Packages used
    {
      type: 'checkbox',
      name: 'packages_used',
      message: 'Please check mark if any of the following node packages were used in this project',
      choices: [
        'Inquirer', 
        'Express', 
        'MySQL', 
        'Axios', 
        'Express-handlebar',
        'Sequelize',
        'Passport/Passport Local',
        'Mongoose',
        'Webpack',
        
      
      ],
  },




    // Obtaining username for Linking to git hub repository - using plain input

    {
        type: 'input',
        name: 'gh_username',
        message: "Please enter your current Git-Hub username",
        default:'jidrees',
        validate: require_input,
      },

    // Obtaining a list of files in this repository - using editor

    {
      type: 'checkbox',
      name: 'file_list',
      message: 'Please check mark if any of the following files were created in this project',
      choices: ['index.html', 'server.js', 'index.js', 'style.css', 'script.js', 'readme.md', 'markdown.js'],
  },



    // Obtaining a list of featured Programer skills utilized in the creation of this project- using editor

    {
        type: 'editor',
        name: 'skills_list',
        message: 'Please highlight any programing features or skills utilized in this project',
        default:'This project demonstrates command over the following programing skills: '
      
      },

// User story
      {
        type: 'editor',
        name: 'user_story',
        message:'Please enter text for user story' ,
        default:'I am a developler and I would like an app that can simplify the process of generating a high quality readme.'
     
      
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
    type: 'input',
    name: 'copyright',
    message: 'Please enter information regarding copyright',
    default:'Copytight 2020- Present. Jay Idrees'

}

];

// function to write README file
// Notice that the write_file function has 2 parameters that will take a file name and data
//?Ben what is data referring the here? The name of the object variable is questions. Do we even need this function? as the write file command has the same parameters as the write_file function
function write_file(file_name, data) {
// 
    fs.writeFile(file_name, data, function(error){

        if (error){
            return console.log(error)
        } // br-close if statement in error function

    }); // br-close eror function

}; // br-close write file function




// function to initialize program
function run() {

inquirer.prompt(questions).then(function(response){

    console.log(response)

    const markdown= generate_markdown(response);
    console.log(markdown);

    // Note that the arguments passed out here for the parameters file_name and data are 'readme.md' and the markdown variable which is infact a generateMarkdown function
    write_file('readme.md', markdown)
});
};

// function call to initialize program
run();
