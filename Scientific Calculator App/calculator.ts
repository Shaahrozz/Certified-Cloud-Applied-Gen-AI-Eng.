import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.blueBright("---------------------------------------------------"))
console.log(chalk.blueBright('|*************Scientific Calculator App***********|'))
console.log(chalk.blueBright("---------------------------------------------------"))

export function calculator(operation: string, a:number, b:number):void{
    if (operation.toLowerCase()== '+'  || operation.toLowerCase()== 'addition' || operation.toLowerCase()== 'add'){
        console.log(chalk.greenBright('Answer of Addition:', a + b))
    }
    else if (operation.toLowerCase()== '-'  || operation.toLowerCase()== 'subtraction' || operation.toLowerCase()== 'minus'){
        console.log(chalk.greenBright('Answer of Subtraction:', a - b))
    }
    else if (operation.toLowerCase()== '/'  || operation.toLowerCase()== 'division' || operation.toLowerCase()== 'divide'){
        console.log(chalk.greenBright('Answer of Division:', a / b))
    }
    else if (operation.toLowerCase()== 'x'  || operation.toLowerCase()== 'multiplication' || operation.toLowerCase()== 'multiply'){
        console.log(chalk.greenBright('Answer of Multiplication:', a * b))
    }
    else if (operation.toLowerCase()== '**'  || operation.toLowerCase()== 'exponenetial' || operation.toLowerCase()== 'exponent'){
        console.log(chalk.greenBright('Answer of Exponential:', a ** b))
    }
    else if (operation.toLowerCase()== '%'  || operation.toLowerCase()== 'modulus' || operation.toLowerCase()== 'mod'){
        console.log(chalk.greenBright('Answer of Modulus Remainder:', a % b))
    }
    else if (operation.toLowerCase()== 'sin' ){
        console.log(chalk.greenBright('Value of Sin:', Math.sin(a*(3.14/180))))
    }
    else if (operation.toLowerCase()== 'cos' ){
        console.log(chalk.greenBright('Value of Cosine:', Math.cos(a*(3.14/180))))
    }
    else if (operation.toLowerCase()== 'tan' ){
        console.log(chalk.greenBright('Value of Tan:', Math.tan(a*(3.14/180))))
    }
    else if (operation.toLowerCase()== 'log2' ){
        console.log(chalk.greenBright('Value of Log2:', Math.log2(a)))
    }
    else if (operation.toLowerCase()== 'log10' ){
        console.log(chalk.greenBright('Value of Log10:', Math.log10(a)))
    }
    else{
        console.log(chalk.red("Invalid Operation Entered"))
    }
}
let values= await inquirer.prompt([{
    name:'o',
    type:'string',
    message: 'What operation do you want to perform:'
},{
    name:'a',
    type:'number',
    message: chalk.yellow('Enter the First Value:')
},{
    name: 'b',
    type: 'number',
    message: chalk.yellow('Enter the Second Value:')
}
])
calculator(values.o,values.a,values.b);

