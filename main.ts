#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"


console.log(chalk.blueBright.bold("\n\tCHECK LIVE FOREIGN CURRENCY EXCHANGE RATES\n"))
// Currencies and their exchange rates
let exchange_rate : any = { 
    "USD-US dollar" : 1, // US DOLLAR
    "EUR-Euro" : 0.93, //EURO
    "GBP-British pound" : 0.80, //BRITISH POUND
    "JPY-Japanese yen" : 153, //JAPANESE YEN
    "CAD-Canadian dollar" : 1.37, //CANADIAN DOLLAR
    "AUD-Australian dollar" : 1.54, //AUSTRALIAN DOLLAR
    "PKR-Pakistani rupee" : 277., //PAKISTANI RUPEE
    "INR-Indian rupee" : 83.46, //INDIAN RUPEE
    "SAR/Dirham-Saudi riyal" : 3.75, //RIYAL
    "SGD-Singapore dollar" : 1.36, //SINGAPORE DOLLAR
    "NZD-Newzealand dollar" : 1.68, //NEW ZEALAND DOLLAR
    "RUB-Russian dollar" : 91.09, //RUSSIAN RUBBLE
    "TRY-Turkish lira" : 32.41, //TURKISH LIRA
    "CNY-Chinese yen" : 6.88, //CHINESE YUAN
    "KWD-Kuwaiti dinar" : 0.30, //KUWAITI DINAR
    "BDT-Bangladeshi taka" : 109.72, //BANGLADESHI TAKA
    "IRR-Iranian riyal" : 41890, //IRANIAN RIYAL
    "IQD-Iraqi dinar" : 1308 //IRAQI DINAR
};
let userAns = await inquirer.prompt(
    [
        {
            name: "from_currency",
            message: (chalk.bold.magenta("FROM: ")),
            type: "list",
            choices: ["USD-US dollar", "EUR-Euro", "GBP-British pound", "JPY-Japanese yen", "CAD-Canadian dollar", "AUD-Australian dollar", "PKR-Pakistani rupee" , "INR-Indian rupee" , "SAR/Dirham-Saudi riyal" , "SGD-Singapore dollar" , "NZD-Newzealand dollar" , "RUB-Russian dollar" , "TRY-Turkish lira" , "CNY-Chinese yen" , "KWD-Kuwaiti dinar" , "BDT-Bangladeshi taka" , "IRR-Iranian riyal" , "IQD-Iraqi dinar"]
    
        },
        {
            name: "to_currency",
            message: (chalk.bold.magenta("TO: ")),
            type: "list",
            choices:  ["USD-US dollar", "EUR-Euro", "GBP-British pound", "JPY-Japanese yen", "CAD-Canadian dollar", "AUD-Australian dollar", "PKR-Pakistani rupee" , "INR-Indian rupee" , "SAR/Dirham-Saudi riyal" , "SGD-Singapore dollar" , "NZD-Newzealand dollar" , "RUB-Russian dollar" , "TRY-Turkish lira" , "CNY-Chinese yen" , "KWD-Kuwaiti dinar" , "BDT-Bangladeshi taka" , "IRR-Iranian riyal" , "IQD-Iraqi dinar"]
        },
        {
            name: "amount",
            message: (chalk.bold.magenta("CONVERT: ")),
            type: "inputs"
        }
    ]

);

// Perform currency converion by using formula

let from_amount = exchange_rate[userAns.from_currency];
let to_amount = exchange_rate[userAns.to_currency];
let amount = userAns.amount;

//Formula of Currency Conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

//Display the converted currency
console.log(chalk.bold.magenta(`Your converted amount is : ${chalk.white(converted_amount.toFixed(3))}`));
console.log(chalk.bold.cyan("\n\tThank you for your time."));