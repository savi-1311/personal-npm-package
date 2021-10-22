const chalk = require("chalk");
const boxen = require("boxen");


const cardData = {
  name: chalk.bold("      👋 Hello, I am Shambhavi Shandilya\n  Web Developer | Competitive Coder | Content Writer"),
  work: `${chalk.white("Cloud Solutions Engineer Intern at")} ${chalk.bold("PingSafe AI")}`,
  github: chalk.gray("https://github.com/") + chalk.green("savi-1311"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("savi1311"),
  npx: chalk.red("npx") + " " + chalk.white("savi-1311"),
  labelWork: chalk.white.bold("       Work:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelCard: chalk.white.bold("       Card:"),
};

exports.Card = boxen(
  [
    `${cardData.name}`,
    ``,
    `${cardData.labelWork}  ${cardData.work}`,
    ``,
    `${cardData.labelGitHub}  ${cardData.github}`,
    `${cardData.labelLinkedIn}  ${cardData.linkedin}`,
    ``,
    `${cardData.labelCard}  ${cardData.npx}`,
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