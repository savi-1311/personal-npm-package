"use strict";

const inquirer = require("inquirer");
const chalk = require("chalk");
const data = require("./data.json");
const boxen = require("boxen");

// add response color
const response = chalk.white;
const response1 = chalk.white;

const resumeOptions = {
  type: "list",
  name: "resumeOptions",
  message: "What do you want to know?",
  choices: [...Object.keys(data), "🔴 Exit"]
};

const data1 = {
  name: chalk.bold("      👋 Hello, I am Shambhavi Shandilya\n  Web Developer | Competitive Coder | Content Writer"),
  work: `${chalk.white("Cloud Solutions Engineer Intern at")} ${chalk
    .bold("PingSafe AI")}`,
  github: chalk.gray("https://github.com/") + chalk.green("savi-1311"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.blue("savi1311"),
  npx: chalk.red("npx") + " " + chalk.white("savi-1311"),

  labelWork: chalk.white.bold("       Work:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data1.name}`,
    ``,
    `${data1.labelWork}  ${data1.work}`,
    ``,
    `${data1.labelGitHub}  ${data1.github}`,
    `${data1.labelLinkedIn}  ${data1.linkedin}`,
    ``,
    `${data1.labelCard}  ${data1.npx}`,
    ``,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

function showResume() {
  console.log(me);
  handleResume();
}

function handleResume() {
  inquirer.prompt(resumeOptions).then(answer => {
    if (answer.resumeOptions == "Exit") return;

    const options = data[`${answer.resumeOptions}`]
    if (options) {
      if(answer.resumeOptions=="💻 Projects")
      {
        console.log(response(new inquirer.Separator()));
        options.forEach(info => {
          console.log(response1(" " + info));
        });
        console.log(response(new inquirer.Separator()));
      }
      else if(answer.resumeOptions=="🔧 Skills" || answer.resumeOptions=="🏅 Achievements")
      {
        console.log(response(new inquirer.Separator()));
        options.forEach(info => {
          console.log(response1("🔺 " + info));
        });
        console.log(response(new inquirer.Separator()));
      }
      else
      {
        console.log(response(new inquirer.Separator()));
        options.forEach(info => {
          console.log(response("🔺 " + info));
        });
        console.log(response(new inquirer.Separator()));
      }
    }

    inquirer
    .prompt({
      type: "list",
      name: "exitBack",
      message: "Do You want to go back or exit?",
      choices: ["Back", "Exit"]
    }).then(choice => {
      if (choice.exitBack == "Back") {
        handleResume();
      } else {
        console.log("Thanks for stopping by 😇");
        return;
      }
    });
  }).catch(err => console.log('Ooops,', err))
}

showResume();