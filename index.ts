import inquirer from "inquirer";


const Currency: any = {
    USD: 1,
    PKR: 280,
    EUR: 0.91,
    INR: 74.57,
    GBP: 0.76,
}

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from Currency",
    type: "list",
    default: true,
    choices: ["USD", "EUR", "PKR", "GBP", "INR"],
  },
  {
    name: "to",
    message: "Enter to Currency",
    type: "list",
    default: true,
    choices: ["USD", "EUR", "PKR", "GBP", "INR"],
  },
  {
    name: "amount",
    message: "Enter amount",
    type: "number",
  },
]);




let fromAmount = Currency[user_answer.from]
let toAmount = Currency[user_answer.to]
let Amount = user_answer.amount
let baseAmount = Amount / fromAmount
let convertedAmount = baseAmount / toAmount

console.log(`conversion rate`,fromAmount);
// console.log(toAmount);
console.log(`your amount`,Amount);
console.log(`your converted value`,convertedAmount);





// console.log("aqib");