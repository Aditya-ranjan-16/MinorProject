import React, { use, useEffect, useState } from "react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";
const Modal = ({ showModal, setShowModal, address, manager, isEqual }) => {
  const [accounts, setAccounts] = useState([]);
  const [ifAproved, setifAproved] = useState(false);
  const onApprove = async () => {
    const campaign = Campaign(address);

    const accounts = await web3.eth.getAccounts();

    await campaign.methods.approveRequest(showModal.id).send({
      from: accounts[0],
    });
  };

  const onFinalize = async () => {
    const campaign = Campaign(address);

    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(showModal.id).send({
      from: accounts[0],
    });
  };

  useEffect(() => {
    async function init() {
      const acc = await web3.eth.getAccounts();
      const campaign = Campaign(address);

      if (showModal.id != null) {
        const ifAp = await campaign.methods
          .getApprovercheck(showModal.id)
          .call();
        setifAproved(ifAp);
        console.log(ifAp);
      }
      setAccounts(acc);
    }
    init();
  }, [showModal]);

  return (
    <>
      {showModal.status ? (
        <>
          <div className="flex justify-center items-center cardglass overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-[40%] h-[55%] flex flex-col items-center justify-start px-4 py-1 rounded-[20px] bg-[#1B233E]">
              <div className="w-full h-9   flex items-center justify-center">
                <div className="w-1/2 h-full flex flex-col text-[#cad3f6] font-semibold items-start pl-4 justify-start text-[25px]">
                  Requests
                </div>
                <div
                  className="text-2xl w-1/2  flex items-center justify-end  bg-clip-text text-transparent font-semibold mt-2  "
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at top left ,#186ED0 12.81%, #9C60B4 100%) ",
                  }}
                >
                  {0.01} ETH
                </div>
              </div>

              <div className="w-full h-6 px-6 mt-1 text-ellipsis whitespace-nowrap overflow-hidden">
                <span className="text-[#59607A] font-bold text-sm">
                  Sending Money To Address :
                </span>{" "}
                <span className="text-sm">
                  {"0xD155be6dE009AD664a3c12F8668866877023BE37 "}
                </span>
              </div>
              <div className="w-[85%] h-[60%] flex flex-col items-center justify-start  mt-4 p-2 cardglass ">
                <div className="w-full h-[30%]  flex flex-col text-[#cad3f6] font-semibold items-start pl-4 justify-start text-[20px]">
                  Description
                </div>
                <h5 className="w-full h-full flex items-center flex-nowrap justify-start overflow-y-scroll  scbar">
                  Proident Lorem fugiat aliquip ipsum proident aliquip sit
                  ullamco ad reprehenderit labore nisi fugiat. Nulla labore
                  magna qui non ad reprehenderit labore nisi fugiat. Nulla
                  labore magna qui non ad reprehenderit labore nisi fugiat.
                  Nulla labore magna qui non ad reprehenderit labore nisi
                  fugiat. Nulla labore magna qui non ad reprehenderit labore
                  nisi fugiat. Nulla labore magna qui non ad reprehenderit
                  labore nisi fugiat. Nulla labore magna qui non ad
                  reprehenderit labore nisi fugiat. Nulla labore magna qui non
                  ad reprehenderit labore nisi fugiat. Nulla labore magna qui
                  non ullamco.
                </h5>
              </div>
              <div className="w-full flex gap-2  items-end justify-start mt-2">
                <div
                  onClick={() => {
                    setShowModal({ status: false, id: null, data: null });
                  }}
                  className="w-[15%] cursor-pointer h-8 rounded-full flex items-start justify-center text-[#59607A] font-bold text-sm "
                >
                  CLOSE
                </div>
                <div className="flex flex-grow"></div>

                {!showModal.data.complete &&
                  accounts[0] == manager &&
                  showModal.isEqual && (
                    <div
                      onClick={onFinalize}
                      className="w-[20%] cursor-pointer  h-8 rounded-full flex items-center justify-center shadow-inner bg-[#0077FF] "
                    >
                      Finalize
                    </div>
                  )}
                {!showModal.data.complete &&
                  accounts[0] != manager &&
                  !showModal.isEqual && (
                    <div
                      onClick={onApprove}
                      className="w-[20%] cursor-pointer  h-8 rounded-full flex items-center justify-center shadow-inner bg-[#0077FF] "
                    >
                      Approve
                    </div>
                  )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
