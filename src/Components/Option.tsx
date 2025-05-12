import {
  User,
  LayoutDashboard,
  PencilRuler,
  Package,
  ShoppingBag,
  Users,
  Settings,
} from "lucide-react";
import {useState } from "react";

export type optionsProps = {
    onDashoboardClick: () => void;
    onManagementClick: (id: number) => void;
    onSettingsClick: () => void
}


const Option = ({onDashoboardClick, onManagementClick, onSettingsClick}: optionsProps) => {
  const [isDashboardActive, setIsDashboardActive] = useState<boolean>(false);
  const [selectedManagement, setSelectedManagement] = useState<number | null>(
    null
  );
  const [isSettingsActive, setIsSettingActive] = useState<boolean>(false);

  const managementOptions = [
    {
      id: 1,
      icon: <PencilRuler size={15} />,
      title: "Designs",
    },
    {
      id: 2,
      icon: <Package size={15} />,
      title: "Materials",
    },
    {
      id: 3,
      icon: <ShoppingBag size={15} />,
      title: "Orders",
    },
    {
      id: 4,
      icon: <Users size={15} />,
      title: "Users",
    },
  ];

  const toggleClickDashboard = () => {
    setIsDashboardActive(!isDashboardActive);
    setSelectedManagement(null);
    setIsSettingActive(false);
  };

  const handleManagement = (id: number) => {
    setSelectedManagement(id);
    setIsDashboardActive(false);
    setIsSettingActive(false);
  };

  const handleSetting = () => {
    setIsSettingActive(!isSettingsActive);
    setSelectedManagement(null);
    setIsDashboardActive(false);
  };
  return (
    <div className="bg-softCream min-h-screen font-poppins flex flex-col gap-5 h-screen w-64 border-r-2 border-whiteText/80 p-5 overflow-y-auto">
      <div className="flex flex-row gap-3 items-center">
        <User size={20} />
        <h1 className="font-bold text-sm text-charcoal">City-Wide-Admin</h1>
      </div>
      <div className="h-[1px] w-full bg-whiteText/80" />

      <h1 className="text-charcoal text-[12px] font-semibold">Overview</h1>
      <div
        className="flex flex-row items-center gap-2 pl-5 cursor-pointer"
        onClick={()=> {
            toggleClickDashboard()
            onDashoboardClick()
        }}
      >
        {isDashboardActive ? (
          <div className="text-terracotta font-bold flex flex-row gap-2">
            <LayoutDashboard size={15} />
            <p className="text-[12px]">Dashboard</p>
          </div>
        ) : (
          <div className="flex flex-row gap-2">
            <LayoutDashboard size={15} />
            <p className="text-[12px]">Dashboard</p>
          </div>
        )}
      </div>
      <div className="h-[1px] w-full bg-whiteText/80" />
      <h1 className="text-charcoal text-[12px] font-semibold">Management</h1>
      <div className="flex flex-col gap-3">
        {managementOptions.map((managementOption) => (
          <div
            key={managementOption.id}
            className={`flex flex-row items-center gap-2 pl-5 cursor-pointer ${
              selectedManagement === managementOption.id
                ? "text-terracotta font-bold"
                : ""
            }`}
            onClick={() => {
                handleManagement(managementOption.id)
                onManagementClick(managementOption.id)
            }}
          >
            <p>{managementOption.icon}</p>
            <p className="text-[12px]">{managementOption.title}</p>
          </div>
        ))}
      </div>
      <div className="h-[1px] w-full bg-whiteText/80" />
      <h1 className="text-charcoal text-[12px] font-semibold">Settings</h1>
      <div
        className="flex flex-row items-center gap-2 pl-5 cursor-pointer"
        onClick={()=>{
            handleSetting()
            onSettingsClick()
        }}
      >
        {isSettingsActive ? (
          <div className="flex flex-row gap-2 text-terracotta font-bold">
            <Settings size={15} />
            <p className="text-[12px]">Settings</p>
          </div>
        ) : (
          <div className="flex flex-row gap-2">
            <Settings size={15} />
            <p className="text-[12px]">Settings</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Option;
