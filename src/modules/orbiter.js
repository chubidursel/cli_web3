import { ethers } from "ethers";

// QUICK INTRO
// set the value-> check gas price -> send tx
// node src/modules/orbiter.js
const orbiterIds = {
    eth: 9005,
    zkSync: 9514,
    arbitrum: 9022,
    optimism: 9077
}

// 0.015000000000009514
// 0.01 + 0.005 + 0.000...0009514
function setValue(number, chainId) {
    
    console.log("Type: ", typeof number, "VALUE: ", number)
    // Convert number to Wei
    const etherValue = ethers.parseUnits(number.toString(), 'ether');

    console.log("TypeOF: ", typeof etherValue, "VALUE: ", etherValue)

    //const weiValue = BigInt(etherValue);

    //console.log("TypeOF: ", typeof weiValue, "VALUE: ", weiValue)
    // Convert Wei to BigNumber
    // const weiString = weiValue.toString();
    // const weiWithoutLastDigits = weiString.slice(0, -4);
    // const concatenatedValue = weiWithoutLastDigits + chainId;
  
    // return ethers.BigNumber.from(concatenatedValue);
  }


setValue(0.1, "2222")



// const contract_txn = {
//     'chainId': chain_id,
//     'nonce': nonce,
//     "from": wallet,
//     'to': '0x80C67432656d59144cEFf962E8fAF8926599bCF8',  // check on etherscan just an address?
//     'value': value,
//     'gas': 0,
//     'gasPrice': 0
// }
// STEPS
// #1 Calculate gas price and gas limit (make this func in helper file)

                        //EXAMPLE
            // contract_txn = add_gas_price(web3, contract_txn)
            // contract_txn = add_gas_limit(web3, contract_txn)

            // def add_gas_price(web3, contract_txn):
            //     gas_price = web3.eth.gas_price
            //     contract_txn['gasPrice'] = int(gas_price * random.uniform(1.01, 1.02))
            //     return contract_txn