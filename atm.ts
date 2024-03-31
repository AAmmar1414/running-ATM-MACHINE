import inquirer from "inquirer";

let mybalance = 500000;
console.log(`YOUR CURRENT BALANCE IS :${mybalance}`);
let mypin = 1234;

let pinanswer = await inquirer.prompt(
    {
        name: "ammar",
        message:"enter your pin",
        type: "number",
    }
)



if(pinanswer.ammar===mypin){
let operation = await inquirer.prompt(
    {
        name: "operation",
        message: "please select your operation to proceed",
        type: "list",
        choices: ["DEPOSIT", "WITHDRAW", "CHECK BALANCE", "EXIT"],
    }
)



if(operation.operation==="WITHDRAW"){
    let amountans=await inquirer.prompt(
        {
            name: "amount",
            message: "enter amount to withdraw",
            type: "number",
        }
    )
    mybalance-=amountans.amount
    console.log(`YOUR CURRENT BALANCE IS :${mybalance}`)
}

if(operation.operation==="DEPOSIT"){
    let amountans=await inquirer.prompt(
        {
            name: "amount",
            message: "enter amount to deposit",
            type: "number",
        }
    )
    mybalance+=amountans.amount
    console.log(`YOUR CURRENT BALANCE IS :${mybalance}`)
}

if(operation.operation==="CHECK BALANCE"){
    console.log(`YOUR CURRENT BALANCE IS :${mybalance}`)
}

if(operation.operation==="EXIT"){
    console.log("THANKS FOR USING ATM")
}
}
else{
    console.log("INCORRECT PIN CODE")}