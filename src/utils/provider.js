import { ethers } from "ethers";
import 'dotenv/config'

const provider = new ethers.InfuraProvider('goerli')

function get_provider(chainID){
    return 'certain provider depends on CHANID'
}