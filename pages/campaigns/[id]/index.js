import { useState, useRef } from "react";
import web3 from "../../../ethereum/web3";
import { useRouter } from "next/router";
import Link from "next/link";
import Campaign from "../../../ethereum/campaign";
import Layout from "../../../components/Layout";
import Modal from "../../../components/Modal";

CampaignShow.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const { id } = query;
  try {
    const campaign = Campaign(id);
    const summary = await campaign.methods.getSummary().call();

    const reqCount = await campaign.methods.getRequestsCount().call();
    const requests = await Promise.all(
      Array(parseInt(reqCount))
        .fill()
        .map((e, i) => {
          return campaign.methods.requests(i).call();
        })
    );

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      id: id,
      requests: requests,
    };
  } catch (e) {
    console.log(e);
    return {
      minimumContribution: "",
      balance: "",
      requestCount: "",
      approversCount: "",
      manager: "",
      id: "",
      requests: "",
    };
  }
};
function CampaignShow({
  minimumContribution,
  balance,
  requestCount,
  approversCount,
  manager,
  requests,
  id,
}) {
  const router = useRouter();
  const mincont = useRef("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState({
    status: false,
    id: null,
    data: null,
    isEqual: false,
  });
  const formsubmit = async (event) => {
    event.preventDefault();
    const mincontri = mincont.current.value;

    try {
      setLoading(true);
      const campaign = Campaign(id);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(mincontri, "ether"),
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
      <div className="flex h-full w-full flex-col items-center justify-start">
        <div className="w-full h-1/2 flex justify-center items-center  ">
          <div className="w-[60%] h-full rounded-br-[30px]  bg-cover bg-[center_top_-8rem] bg-[url(https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=170667a&w=0&k=20&c=i-N1TmNANS73iybPdiozulimM9D5A6PqRyRkw6nO2DI=)]  flex items-end justify-start">
            <div className="flex w-[40%] h-[30%] translate-y-14 gap-2 items-end  justify-center">
              <div className="w-24 h-24   border-[7px] border-[#1B233E] rounded-full bg-cover bg-[url(https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60)]"></div>
              <div className="w-1/2 h-full  flex items-end justify-start mb-6 font-semibold text-lg">
                Aditya Ranjan
              </div>
            </div>
          </div>
          <div className="w-[40%]  flex items-center justify-end  h-full">
            <div className="w-[70%]  flex  flex-col items-center justify-start h-[90%] cardglass mr-16 mt-12  ">
              <h5 className="text-3xl font-medium text-[#cad3f6]">
                New Age Drone
              </h5>
              <div className="text-sm text-[#59607A]">Goal : 2.34 ETH</div>
              <div className="w-full px-4  text-[#59607A] flex items-center justify-start  font-bold text-sm ">
                <div className="text-ellipsis whitespace-nowrap overflow-hidden">
                  Address : {id}{" "}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </div>
              <div
                className="text-2xl w-full flex items-center justify-center pl-4 bg-clip-text text-transparent font-semibold mt-2  "
                style={{
                  backgroundImage:
                    "radial-gradient(circle at top left , #9C60B4 12.81%, #186ED0 100%) ",
                }}
              >
                <div className="w-1/2">
                  {web3.utils.fromWei(balance, "ether")} ETH
                </div>
                <div className="w-1/2 flex items-center justify-end pr-4 text-[#186ED0]">
                  57%
                </div>
              </div>
              <div className="flex w-[90%] px-5 pb-1 border-b-[0.2px] border-[#59607A] mt-2 items-center justify-evenly">
                <div className="w-1/2 flex items-start justify-start">
                  Contriutors
                </div>
                <div className="w-1/2 flex items-start justify-end">
                  {approversCount}
                </div>
              </div>
              <div className="flex w-[90%] px-5 pb-1 border-b-[0.2px] border-[#59607A] mt-2 items-center justify-evenly">
                <div className="w-1/2 flex items-start justify-start">
                  Min Contriution
                </div>
                <div className="w-1/2 flex items-start justify-end">
                  {minimumContribution}
                </div>
              </div>

              <div className="w-full h-10 mx-6 px-4 gap-4 flex items-center justify-center  mt-2">
                {!loading && (
                  <input
                    ref={mincont}
                    className=" rounded-full text-sm  bg-[#1F263D]  placeholder:text-gray-500 w-[60%] outline-none p-4 h-8"
                    placeholder={`Enter amount `}
                  />
                )}

                {!loading && (
                  <div
                    onClick={formsubmit}
                    className="w-[45%] h-8 rounded-full flex items-center justify-center shadow-inner bg-[#0077FF] "
                  >
                    Fund
                  </div>
                )}
                {loading && (
                  <div className="w-[45%] h-8 rounded-full flex items-center justify-center ">
                    Loading
                  </div>
                )}
              </div>

              <div></div>
            </div>
          </div>
        </div>
        <div className="w-full gap-4 h-1/2 p-4 flex items-end justify-end">
          <div className="w-[60%] p-4 h-[78%] flex gap-2 flex-col items-start justify-start cardglass">
            <h1 className="text-2xl text-justify  text-[#cad3f6] font-semibold">
              Description
            </h1>

            <h5 className="w-[36rem] h-[8rem] flex items-center flex-nowrap justify-start overflow-y-scroll  scbar">
              Proident Lorem fugiat aliquip ipsum proident aliquip sit ullamco
              ad reprehenderit labore nisi fugiat. Nulla labore magna qui non ad
              reprehenderit labore nisi fugiat. Nulla labore magna qui non ad
              reprehenderit labore nisi fugiat. Nulla labore magna qui non ad
              reprehenderit labore nisi fugiat. Nulla labore magna qui non ad
              reprehenderit labore nisi fugiat. Nulla labore magna qui non ad
              reprehenderit labore nisi fugiat. Nulla labore magna qui non ad
              reprehenderit labore nisi fugiat. Nulla labore magna qui non ad
              reprehenderit labore nisi fugiat. Nulla labore magna qui non
              ullamco.
            </h5>
          </div>
          <div className="w-[40%] h-[90%] p-2 flex flex-col items-center ju cardglass">
            <div className="w-full h-9   flex items-center justify-center">
              <div className="w-1/2 h-full flex flex-col text-[#cad3f6] font-semibold items-start pl-4 justify-start text-[25px]">
                Requests
              </div>
              <div className="w-1/2 h-full  flex flex-col  items-end pr-4 justify-end ">
                <div className=" w-[60%] h-8 rounded-[5px] p-2 shadow-inner text-[12px] bg-[#0077FF] font-semibold flex items-center justify-center ">
                  <Link href={`/campaigns/${id}/new`}>Create Request</Link>
                </div>
              </div>
            </div>
            <div className="w-[350px] h-[150px] mt-3 scbar  overflow-y-scroll ">
              {requests.map((v, i) => (
                <div
                  key={i}
                  className="w-full h-12 mb-2 listglass flex items-center justify-evenly"
                >
                  <div className="w-1/3 h-full flex items-center justify-center ">
                    {console.log(v)}
                    {web3.utils.fromWei(v.value, "ether")} ETH
                  </div>
                  <div className="w-1/3 h-full flex text-sm items-center justify-center ">
                    approvals : {v.approvalCount}/{approversCount}
                  </div>
                  <div
                    onClick={() =>
                      setShowModal({
                        status: true,
                        id: i,
                        data: v,
                        isEqual: v.approvalCount === approversCount,
                      })
                    }
                    className="w-1/3 h-full cursor-pointer flex items-center justify-center font-bold text-sm text-[#0077FF] "
                  >
                    View Request
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Modal
          showModal={showModal}
          address={id}
          manager={manager}
          setShowModal={setShowModal}
        />
      </div>
      {/* Campaign manager : {manager}<br/>
   **********************************************************************************************<br/>
   Campaign address : {id}<br/>
 
  
   requestCount : {requestCount}<br/>
   approversCount : {approversCount} <br/> */}

      {/* {!loading &&   <form  onSubmit={formsubmit}>
        <input ref={mincont} type="text" />
        <button>Contribute</button><br/>
        <span>{error}</span>
    </form>  }
  {loading && <div>Loading</div>} */}
    </Layout>
  );
}

export default CampaignShow;
