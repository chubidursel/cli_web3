import { ethers } from "ethers";
import {wallet} from '../utils/wallet.js'

export const transation = async() => {

    const txObj = {
        
        to: '0x63018F44E822875Be96e7CE6F5b53cB1dEcA1B96',
        value: ethers.parseUnits('0.001', 'ether')
    }

    const tx = await wallet.sendTransaction(txObj)
    const res = await tx.wait(1)
    console.log("result: ",  res)
}
