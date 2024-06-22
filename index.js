import Web3 from "web3"
import { ContractPlugin }  from "web3-plugin-contracts"

const web3 = new Web3(new Web3.providers.HttpProvider("https://ethereum-sepolia-rpc.publicnode.com"))

//Etherscan API_KEY
const API_KEY = process.env.ETHERSCAN_API_KEY

//Load plugin
web3.registerPlugin(new ContractPlugin(API_KEY))

//Verified smart contract
const contractAddress = "0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481";

// Get contract source: includes, source code, compiler version, metadata and ABI
const data = await web3.contractPlugin.source(contractAddress)

console.log('data', data);