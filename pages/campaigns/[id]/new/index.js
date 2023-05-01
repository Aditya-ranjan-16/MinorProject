import { useState, useRef } from "react";
import web3 from "../../../../ethereum/web3";
import Campaign from "../../../../ethereum/campaign";
import Layout from "../../../../components/Layout";
RequestNew.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;
  console.log(id);
  return { id: id };
};
function RequestNew({ id }) {
  const des = useRef("");
  const ammount = useRef("");
  const recipient = useRef("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const formsubmit = async (event) => {
    event.preventDefault();
    const description = des.current.value;
    const amm = ammount.current.value;
    const recip = recipient.current.value;
    try {
      setLoading(true);
      const campaign = Campaign(id);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(amm, "ether"), recip)
        .send({
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
        <div className="w-[50%] flex flex-col items-center justify-start p-2 h-[45%] cardglass">
          <div className="w-full h-8 flex flex-col text-[#cad3f6] font-semibold items-start pl-4 justify-start text-[25px]">
            Create a New Request
          </div>
          <input
            ref={des}
            className=" w-[80%] mt-4 rounded-full text-sm  bg-[#1F263D]  placeholder:text-gray-500  outline-none p-4 h-8"
            placeholder={`Enter description `}
          />
          <input
            ref={ammount}
            className=" w-[80%] mt-4 rounded-full text-sm  bg-[#1F263D]  placeholder:text-gray-500  outline-none p-4 h-8"
            placeholder={`Enter amount `}
          />
          <input
            ref={recipient}
            className=" w-[80%] mt-4 rounded-full text-sm  bg-[#1F263D]  placeholder:text-gray-500  outline-none p-4 h-8"
            placeholder={`Enter recipient address `}
          />
          <div className="w-full flex items-center justify-center mt-4">
            {!loading && (
              <div
                onClick={formsubmit}
                className="w-[28%] cursor-pointer h-8 rounded-[5px] flex items-center justify-center shadow-inner bg-[#0077FF] "
              >
                Create Request
              </div>
            )}
            {loading &&   <div
          
                className="w-[28%] cursor-pointer h-8 rounded-[5px] flex items-center justify-center "
              >
                Loading
              </div>}
          </div>
        </div>
      </div>
    </Layout>
    // <div>
    //   {!loading && (
    //     <form onSubmit={formsubmit}>
    //       <input ref={des} placeholder="discription" type="text" />
    //       <br />
    //       <input ref={ammount} placeholder="ammount" type="text" />
    //       <br />
    //       <input ref={recipient} placeholder="recipient" type="text" />
    //       <br />
    //       <button>Create Request</button>
    //       <br />
    //       <span>{error}</span>
    //     </form>
    //   )}
    //   {loading && <div>Loading</div>}
    // </div>
  );
}

export default RequestNew;
