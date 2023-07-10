import { ethers } from "ethers";
import { getEthereumPrice } from "./banan.js";

const provider = ethers.getDefaultProvider()

const transaction = {
    to: '0x98162D17D4d15c945B7418475EdEb4d9c0335684', 
    value: BigInt("1")
  };


export const gasCheck = async(tx = transaction ) => {


    // INSTEAD getGasPrice()
  //console.log((await provider.getFeeData()))

    try {
        const gasLimit = await provider.estimateGas(tx);
        const gasPrice = (await provider.getFeeData()).gasPrice;

        const gasCost = gasLimit * gasPrice;

        // console.log(`Gas Price: ${gasPrice} Ether`);
        // console.log(`Gas Cost: ${ethers.formatEther(gasCost.toString())} Ether`);

        const var1 = parseFloat(ethers.formatEther(gasCost.toString()))
        const var2 = await getEthereumPrice();

        const result = `
                          TRANSATION DATA: 
                          Gas Price: ${gasPrice} GWEI,  
                          Gas Coast: ${ethers.formatEther(gasCost.toString())} Ether;
                          Actual Price: ${var1 * var2} $
                      `
        return result

      } catch (error) {
        console.error('Opppps ..... We got problem', error);
      }
    
}
