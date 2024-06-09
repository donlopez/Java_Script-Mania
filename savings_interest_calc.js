// Program that calculates savings and interest

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let initial_savings = 10000;
let interest_rate = 0.05;

rl.question('Enter years: ', (years) => {
    console.log('');

    let savings = initial_savings;
    for (let i = 0; i < parseInt(years); i++) {
        console.log(`Savings in year ${i}: $${savings.toFixed(2)}`);
        savings = savings + (savings * interest_rate);
    }

    console.log('\n');
    rl.close();
});
