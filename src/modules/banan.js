// https://github.com/binance/binance-connector-node
// https://binance-docs.github.io/apidocs/spot/en/#introduction

import axios from "axios";

export async function getEthereumPrice() {
    try {
      const response = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
      const ethereumPrice = response.data.price;
      // console.log('Ethereum Price:', ethereumPrice, "$");
      return parseFloat(ethereumPrice)
    } catch (error) {
      console.error('Error fetching Ethereum price:', error);
    }
  }
