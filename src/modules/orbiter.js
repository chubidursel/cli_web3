// node src/orbiter.js

// QUICK INTRO
// set right contracts -> check gas price -> send tx


const orbiter_ids = {
    'ethereum'      : '1',
    'optimism'      : '7',
    'bsc'           : '15',
    'arbitrum'      : '2',
    'nova'          : '16',
    'polygon'       : '6',
    'polygon_zkevm' : '17',
    'zksync'        : '14',
    'zksync_lite'   : '3',
    'starknet'      : '4',
}

const contract_txn = {
    'chainId': chain_id,
    'nonce': nonce,
    "from": wallet,
    'to': '0x80C67432656d59144cEFf962E8fAF8926599bCF8',  // check on etherscan just an address?
    'value': value,
    'gas': 0,
    'gasPrice': 0
}
// STEPS
// #1 Calculate gas price and gas limit (make this func in helper file)

                        //EXAMPLE
            // contract_txn = add_gas_price(web3, contract_txn)
            // contract_txn = add_gas_limit(web3, contract_txn)

            // def add_gas_price(web3, contract_txn):
            //     gas_price = web3.eth.gas_price
            //     contract_txn['gasPrice'] = int(gas_price * random.uniform(1.01, 1.02))
            //     return contract_txn