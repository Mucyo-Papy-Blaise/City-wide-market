import { useState } from "react"
import Option from "../Components/Option"
import Dashboard from "./Dashboard"
import DesignUpload from "./DesignUpload"
import MaterialUpload from "./MaterialUpload"
import Orders from "./Orders"
import Users from "./Users"
import Settings from "./Settings"

const FullDashboard = () => {
    const [viewDashboard, setViewBoard] = useState<"dashboard" | "settings" | "management">("dashboard");
    const [selectedManagementId, setSelectedManagementId] = useState<number | null>(null);

    const handleDashboardClick =()=>{
        setViewBoard("dashboard")
        setSelectedManagementId(null)
    }

    const handleManagementClick =(id: number)=>{
        setViewBoard("management")
        setSelectedManagementId(id)
    }

    const handleSettingsClick =()=>{
        setViewBoard("settings")
        setSelectedManagementId(null)
    }

    const renderMainContent = () => {
    if (viewDashboard === "dashboard") return <Dashboard />;
    if (viewDashboard === "settings") return <Settings />;
    if (viewDashboard === "management") {
      switch (selectedManagementId) {
        case 1:
          return <DesignUpload />;
        case 2:
          return <MaterialUpload />;
        case 3:
          return <Orders />;
        case 4:
          return <Users />;
        default:
          return <p>Select a management section</p>;
      }
    }
    return <p>Welcome! Select an option.</p>;
  };

  return (
    <div className="flex flex-row">
        <Option 
        onDashoboardClick={handleDashboardClick} 
        onManagementClick={handleManagementClick}
        onSettingsClick={handleSettingsClick}
        />
        {renderMainContent()}
    </div>
  )
}

export default FullDashboard
