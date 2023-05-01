import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import Link from "next/link";

Explore.getInitialProps = async (ctx) => {
  const campaign = await factory.methods.getDeployedCampaigns().call();
  console.log(campaign);
  return { campaign: campaign };
};
function Explore({ campaign }) {
  return (
    <Layout>
      <div class="container  h-[90vh] scbar  overflow-y-scroll  px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {!campaign && <div>No Campaings</div>}
          {campaign.map((v, i) => (
            <div
              key={i}
              class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            >
              {/* <!-- Article --> */}
              <div className="h-[300px] w-full flex flex-col gap-1 items-center justify-start w-1/3 p-2 cardglass">
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
                    <Link href={`/campaigns/${v}`}>Fund</Link>
                  </div>
                </div>
              </div>
              {/* <!-- END Article --> */}
            </div>
          ))}
          {/* <!-- Column --> */}

          {/* <!-- END Column -->

        <!-- Column --> */}

          {/* <!-- END Column -->

        <!-- Column --> */}

          {/* <!-- END Column -->

        <!-- Column --> */}

          {/* <!-- END Column -->
       
        <!-- Column --> */}

          {/* <!-- END Column -->

        <!-- Column --> */}

          {/* <!-- END Column --> */}
        </div>
      </div>
    </Layout>
  );
}
export default Explore;
