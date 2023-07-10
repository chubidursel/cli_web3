#!/usr/bin/env node
import { askAddr, welcome, chooseNetwork, confimation } from "./src/cli.js";
import { balances } from "./src/balance.js";
import { gasCheck } from "./src/gasCheck.js";
import { ethers } from "ethers";

await welcome();

const network = await chooseNetwork()

const addr = await askAddr()

await balances(addr, network) 

const resTx = await confimation()

const txObj = {
    to: addr,
    value: ethers.parseUnits('0.001', 'ether')
}

resTx ? console.log(await gasCheck(txObj)) : 'OKi, Chao!'


// 0x63018F44E822875Be96e7CE6F5b53cB1dEcA1B96