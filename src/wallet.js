import { ethers } from "ethers";
import 'dotenv/config'

const provider = new ethers.InfuraProvider('goerli')

export const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

// const bal = await provider.getBalance(wallet.address)
// console.log(ethers.formatEther(bal.toString()))
