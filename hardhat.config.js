require("@nomiclabs/hardhat-waffle");
require('solidity-coverage')
require("hardhat-gas-reporter");
require('hardhat-spdx-license-identifier');
require("hardhat-interface-generator");

import {ALCHEMY_API_KEY} from "key.js"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: ALCHEMY_API_KEY,
        blockNumber: 13184004
      }
    }
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  gasReporter: {//comment me out to toggle
    enabled: process.env.REPORT_GAS
  }
};