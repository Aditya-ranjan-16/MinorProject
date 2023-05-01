const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
 
const provider = new HDWalletProvider(
    "knee gesture convince spy other cry beauty upgrade neither slush earn park",
    "https://sepolia.infura.io/v3/046d93f812de47bc828c45b86d629c28"
);
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log("Attempting to deploy from account", accounts[0]);
 try{
    const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "1400000", from: accounts[0] });
      console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
 }catch(e){
 console.log(e)
 }

 

};
deploy();