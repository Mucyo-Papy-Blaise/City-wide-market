import { Plus } from "lucide-react";
import { useState } from "react";
import AllDesigns from "../Components/AllDesigns";
import { DesignCards } from "../Data/Data";
import { addNewDesignProps } from "../Data/Types";
const DesignUpload = ({addNewDesign}:addNewDesignProps) => {
  const [filter, setFilter] = useState("all");
  const designTabs = [
    { title: "All Designs", filter: "all" },
    { title: "Published", filter: "published" },
    { title: "Draft", filter: "draft" },
  ];
  const filteredDesign = DesignCards.filter((card) => {
    if (filter === "all") return card;
    return card.status.toLocaleLowerCase() === filter;
  });
  return (
    <div className="bg-softCream w-full p-10 min-h-screen">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-2xl mb-5">Design</h1>
        <p 
        className="flex flex-row gap-2 bg-black text-white justify-center items-center w-40 h-10 rounded cursor-pointer hover:bg-gray-700 text-sm"
        onClick={addNewDesign}
        >
          <span>
            <Plus />
          </span>
          Add New Design
        </p>
      </div>

      <div className="flex flex-row items-center gap-4 font-medium cursor-pointer bg-[#D9D9D9]/70 p-2 w-fit rounded transition-all duration-300  ease-in-out">
        {designTabs.map((designTab, index) => (
          <div
            key={index}
            className={`${
              designTab.filter.toLocaleLowerCase() === filter
                ? "bg-white text-black w-16 text-center h-6 rounded text-[11px] flex items-center justify-center shadow-sm cursor-pointer"
                : "text-[11px] cursor-pointer text-lightGray"
            }`}
            onClick={() => setFilter(designTab.filter)}
          >
            {designTab.title}
          </div>
        ))}
      </div>

      <AllDesigns DesignCards={filteredDesign} />
    </div>
  );
};

export default DesignUpload;
