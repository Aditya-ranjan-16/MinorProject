import { useRef, useState } from "react";
import web3 from "../../ethereum/web3";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
function CampaignNew() {
  const mincont = useRef("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const formsubmit = async (event) => {
    event.preventDefault();
    const mincontri = mincont.current.value;

    try {
      setLoading(true);
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(mincontri).send({
        from: accounts[0],
      });
      setError("");
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div className="w-full h-full flex items-center justify-center ">
        <div className="w-[50%] flex flex-col items-center justify-start p-2 h-[33%] cardglass">
          <div className="w-full h-8 flex flex-col text-[#cad3f6] font-semibold items-start pl-4 justify-start text-[25px]">
            Create a New Campaign
          </div>
          <div>Minimum Contribution : 100</div>
          <input
            ref={mincont}
            className=" w-[80%] mt-4 rounded-full text-sm  bg-[#1F263D]  placeholder:text-gray-500  outline-none p-4 h-8"
            placeholder={`Enter amount `}
          />

          <div className="w-full flex items-center justify-center mt-4">
            <div
              onClick={formsubmit}
              className="w-[28%] cursor-pointer h-8 rounded-[5px] flex items-center justify-center shadow-inner bg-[#0077FF] "
            >
              Create Campaign
            </div>
            <span>{error}</span>
          </div>
        </div>
      </div>
    </Layout>
  );

  // <div>

  //   {!loading &&   <form  onSubmit={formsubmit}>
  //       <input ref={mincont} type="text" />
  //       <button>Create</button><br/>
  //       <span>{error}</span>
  //   </form>  }
  // {loading && <div>Loading</div>}
  //   </div>;
}

export default CampaignNew;
