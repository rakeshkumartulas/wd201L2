// const args = require("minimist")(process.argv.slice(2));
let args = require("minimist")(process.argv.slice(2),{
    alias:{
        u:"user",
        p:"password"
    },
    default:{
        programming:"programming"
    }
})
console.log(args);
// taking input and showing output
// const readline = require("readline");

// const lineDetail = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout,
// });

// lineDetail.question('Please provide your name ',(name)=>{
//     console.log(`Hi ${name}`);
//     lineDetail.close();
// });

//console.log("Hello")


//import { ESLint } from "eslint";

// npm insall --global eslint
// to install it globally

// npm config ls
// to see all the packages globally
