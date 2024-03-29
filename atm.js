#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myPin = 54321;
let myBalance = 50000;
console.log(chalk.cyan("Welcome to ATM Machine."));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Kindly Enter 5 Digit Code to Continue...")
    }
]);
if (myPin === pinAnswer.pin) {
    console.log(chalk.magentaBright("Correct Pin Code."));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.red("Kindly Select One Option from given below:"),
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: chalk.green("Enter The Amount You Want to Withdraw.")
            }
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(chalk.redBright(`Your remaining balance is ${myBalance}`));
        }
        else {
            console.log(chalk.blue("Insuficient Balance to get this Transaction."));
        }
    }
    else if (operationAns.operation = "Check Balance") {
        console.log(chalk.greenBright(`Your Balance is ${myBalance}`));
    }
}
else {
    console.log(chalk.red("Incorrect Pin Code.Kindly Check Your Pin And Try Again Later."));
}
