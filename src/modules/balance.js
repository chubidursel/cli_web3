import { ethers } from "ethers";



export const balances = async(addr, network) => {

    const provider = ethers.getDefaultProvider(network)

    const data = await provider.getBalance(addr);
    
    console.log("Your Balance: ", ethers.formatEther(data.toString()))
}

