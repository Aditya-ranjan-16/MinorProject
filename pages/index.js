import factory from "../ethereum/factory";
import { useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

Home.getInitialProps = async (ctx) => {
  const campaign = await factory.methods.getDeployedCampaigns().call();
  console.log(campaign);
  return { campaign: campaign };
};

export default function Home({ campaign }) {
  const Item = () =>
    campaign.map((address) => {
      return <div>{address}</div>;
    });

  return (
    <Layout>
      <div className="w-[75%] h-full flex flex-col py-2 px-10">
        {/* <Item /> */}
        <div
          style={{ boxShadow: "10px -10px 100px #186ED0" }}
          className="w-full flex flex-col items-start justify-end h-[25%] bg-cover shadow-inner bg-[center_top_20rem] bg-[url(https://images.hdqwalls.com/wallpapers/hope-everything-right-4k-5l.jpg)]  rounded-[20px]"
        >
          <Link href={"/campaigns/new"}>
            <div className="h-10 rounded-[10px] btnglass w-36 m-4 font-semibold text-sm menuHov flex justify-center items-center bg-black ">
              Create Campaign
            </div>
          </Link>
        </div>

        <div className="text-base font-semibold mt-4 ml-4">Top Inventors</div>
        <div className="flex w-full mt-1 gap-2 h-[23%]  ">
          <div className="h-full w-1/3 cardglass p-1  flex flex-col items-center justify-center ">
            <div className="h-1/2  w-full flex items-center justify-center  rounded-[15px] bg-cover bg-[url(https://www.coverphotosforfb.com/files/covers/300-graffiti-wall.jpg)]">
              <div className="h-14 w-14   rounded-full border-[3px] translate-y-8 border-[#28314B] bg-cover bg-[url(https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60)]"></div>
            </div>
            <div className="h-1/2 w-full flex flex-col items-center justify-end  ">
              <div className="text-sm font-semibold text-[#cad3f6]">
                Aditya Ranjan
              </div>
            </div>
          </div>
          <div className="h-full w-1/3 cardglass p-1  flex flex-col items-center justify-center ">
            <div className="h-1/2  w-full flex items-center justify-center  rounded-[15px] bg-cover bg-[url(https://www.coverphotosforfb.com/files/covers/300-graffiti-wall.jpg)]">
              <div className="h-14 w-14   rounded-full border-[3px] translate-y-8 border-[#28314B] bg-cover bg-[url(https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60)]"></div>
            </div>
            <div className="h-1/2 w-full flex flex-col items-center justify-end  ">
              <div className="text-sm font-semibold text-[#cad3f6] ">
                Aditya Ranjan
              </div>
            </div>
          </div>
          <div className="h-full w-1/3 cardglass p-1  flex flex-col items-center justify-center ">
            <div className="h-1/2  w-full flex items-center justify-center  rounded-[15px] bg-cover bg-[url(https://www.coverphotosforfb.com/files/covers/300-graffiti-wall.jpg)]">
              <div className="h-14 w-14   rounded-full border-[3px] translate-y-8 border-[#28314B] bg-cover bg-[url(https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60)]"></div>
            </div>
            <div className="h-1/2 w-full flex flex-col items-center justify-end  ">
              <div className="text-sm font-semibold text-[#cad3f6]">
                Aditya Ranjan
              </div>
            </div>
          </div>
        </div>

        <div className="text-base font-semibold mt-4 ml-4">Top Campaigns</div>
        <div className="flex w-full gap-4  h-[40%] mt-2 b">
          {!campaign && <div>No Campaings</div>}
          {campaign.map((address) => (
            <div className="h-full flex flex-col gap-1 items-center justify-start w-1/3 p-2 cardglass">
              <div className="w-full h-2/3 flex items-start justify-end bg-cover bg-[url(https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=170667a&w=0&k=20&c=i-N1TmNANS73iybPdiozulimM9D5A6PqRyRkw6nO2DI=)] rounded-[10px]">
                <div className="w-20 h-5 statusglass m-3 flex items-center justify-center text-[10px] font-medium">
                  57% funded
                </div>
              </div>
              <div className="w-full mt-1 text-sm text-[#cad3f6]">
                New age Drone
              </div>
              <div className="w-full flex gap-1 items-center justify-center">
                <div className="w-[55%] text-sm font-medium ">
                  Goal : 221 ETH{" "}
                </div>

                <div className="w-[45%] h-8 rounded-full flex items-center justify-center shadow-inner bg-[#0077FF] ">
                  <Link href={`/campaigns/${address}`}>Fund</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[24%] h-full gap-2 flex flex-col items-center justify-start">
        <div className="text-base font-semibold mt-2 ml-4">
          Trending Inventors
        </div>
        <div className="h-[40%] w-full cardglass"></div>
        <div className="text-base font-semibold mt-2 ml-4">
          Trending Campaigns
        </div>
        <div className="h-[40%] w-full cardglass"></div>
      </div>
    </Layout>
  );
}
