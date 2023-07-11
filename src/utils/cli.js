import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import chalk from 'chalk';

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

export async function welcome() {
    const firstTitle = chalkAnimation.glitch('Welcome to WEB3 script by ChubyDurcel');
    await sleep();
    firstTitle.stop();

    console.log(`
        ${chalk.bgBlue('This is DEMO script for Ethereum')} 
        Here you can check data from blockchain and send TX
        Enjoy...
        `);
}


let addr;

export async function askAddr(){
    const answer = await inquirer.prompt({
        name: 'ethAddress',
        type: 'input',
        message: 'Type ur address',
        default(){
            return '0x.....'
        }
    });

    addr = answer.ethAddress;

    return addr;
} 

export async function chooseNetwork () {
    const answer = await inquirer.prompt({
        name: 'network',
        type: 'list',
        message: 'Choose Network',
        choices: [
            'goerli',
            'sepolia',
            'matic',
            'mainnet',
          ],
    });

    return answer.network
}

export async function confimation () {
    const answer = await inquirer.prompt({
        name: 'network',
        type: 'confirm',
        message: 'Do you want to send tx?',
        default(){
            return false
        }
    });

    return answer.network
}