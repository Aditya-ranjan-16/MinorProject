import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x76084AeDebB621B11af3a64eF6Fe502fa2D70c8E"
);

export default instance;
