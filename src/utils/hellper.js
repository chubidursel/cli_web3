

//----------------------FUNC#1----------
function gasCheck(gas){
    // take the amount of gas required to execute this func and then compare to limmit from setting.js
    if (gas > 10) return true
}

        // EXAMPLE
// def checker_total_fee(chain, gas):

//     gas = decimalToInt(gas, 18) * PRICES_NATIVE[chain]

//     # cprint(f'total_gas : {round_to(gas)} $', 'blue')
//     logger.info(f'total_gas : {round_to(gas)} $')

//     if gas > MAX_GAS_CHARGE[chain]:
//         logger.info(f'gas is too high : {round_to(gas)}$ > {MAX_GAS_CHARGE[chain]}$. sleep and try again')
//         sleeping(30,30)
//         return False
//     else:
//         return True

