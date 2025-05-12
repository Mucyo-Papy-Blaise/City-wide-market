import { useState } from "react";
import Analytics from "../Components/Analytics";
import OverView from "../Components/OverView";
import Report from "../Components/Report";

const Dashboard = () => {
    const [SelectedMenuTab, setSelectedMenuTab] = useState<number>(0)
    const MenuTabs = ["Overview","Analytics","Report"]

  return (
    <div className="bg-softCream w-full min-h-screen font-poppins">
      <div className="bg-softCream w-full h-screen p-10">
        <h1 className="font-bold text-xl mb-5">Dashboard</h1>
        <div className="flex flex-row items-center gap-4 cursor-pointer bg-[#D9D9D9]/70 p-2 w-fit rounded transition-all duration-300  ease-in-out">
          {MenuTabs.map((MenuTab, index)=>
          <div
          key={index}
          className={`${
            SelectedMenuTab ===  index ? "bg-white w-16 text-center h-6 rounded text-[11px] flex items-center justify-center shadow-sm" : "text-[11px]"
          }`}
          onClick={()=>setSelectedMenuTab(index)}
          >
            {MenuTab}
          </div>
          )}
        </div>

        {SelectedMenuTab === 0 && (
          <OverView />
        )}

        {SelectedMenuTab === 1 && (
          <Analytics />
        )}

        {SelectedMenuTab === 2 && (
          <Report />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
