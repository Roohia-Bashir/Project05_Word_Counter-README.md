#! /usr/bin/env node
// Word Counter
// The user will enter a english paragraph and all that is needed is to just to implement counting characters and words without whitespaces.
// Create a GitHub repository for the project and submit its URL in the project submission form.
//import the inquirer & chalk modules, which is a cmd interface for Node.js.
import inquirer from "inquirer";
import chalk from "chalk";
//declare a constant 'answer' and assign it to the result of inquirer.prompt function.
(async () => {
    const answer = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: chalk.red.bold("Enter your sentence to count the words.")
        }
    ]);
    const words = answer.sentence.trim().split(" ");
    console.log(words);
    console.log(chalk.yellow(`Your sentence word count is ${words.length}`));
})();
