#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 3733;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "please enter valid pin number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("valid pin code :)");
    // options area
    let actionanswer = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "what do you want to use",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    // withdraw process
    if (actionanswer.action === "withdraw") {
        let amountanswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount",
            }
        ]);
        if (amountanswer.amount <= myBalance) {
            let balance = myBalance - amountanswer.amount;
            console.log(`your remaining balance is ${balance}`);
        }
        else {
            console.log(`your balance is insufficient for this amount!`);
        }
    }
    // fast cash process
    else if (actionanswer.action === "fast cash") {
        let fastcashanswer = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["5000", "15000", "25000", "35000", "45000", "55000"],
                message: "how much you want to dispanse"
            }
        ]);
        if (fastcashanswer.amount <= myBalance) {
            let balanceNumber2 = myBalance - fastcashanswer.amount;
            console.log(`the remaining balance you have ${balanceNumber2}`);
        }
        else {
            console.log(`your balance is insufficient for this amount!`);
        }
    }
    else if (actionanswer.action === "check balance") {
        console.log(`your account balance is ${myBalance}`);
    }
}
else {
    console.log("invalid pin code please try again later");
}
