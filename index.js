#!/usr/bin/env node
import { askAddr, welcome, chooseNetwork, confimation } from "./src/utils/cli.js";
import { balances } from "./src/modules/balance.js";
import { gasCheck } from "./src/modules/gasCheck.js";
import { ethers } from "ethers";

await welcome();

const network = await chooseNetwork()

const addr = await askAddr()

if(!addr.startsWith("0x")){
    console.log("You ddint put the address");
} else {
    await balances(addr, network) 

    const resTx = await confimation()
    
    const txObj = {
        to: addr,
        value: ethers.parseUnits('0.001', 'ether')
    }
    
    resTx ? console.log(await gasCheck(txObj)) : console.log('OKi, Chao!')
    
}


