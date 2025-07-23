import React from "react";
import { Link, useLocation } from "react-router-dom";
import MouManagmenticon from "./MouManagmenticon";
import CsvIcon from "./CsvManagmenticon";
import PriceIcon from "./Price&servicesicon";
import CollegeIcon from "./Collegeaccessicon";
import StateIcon from "./Stateaccessicon";
import RevenueIcon from "./Revenueicon";
import DashboardIcon from "./DashboardIcon";

const TopSidebar = () => {
  const location = useLocation();
  const Items = [
    { label: "Dashboard", path: "/", icon: <DashboardIcon /> },
    { label: "MoU Managment", path: "/MoUManagment", icon: <MouManagmenticon/> },
    { label: "CSV Management", path: "/CSVManagement", icon: <CsvIcon /> },
    {
      label: "Price & Services",
      path: "/Prices&Services",
      icon: <PriceIcon/>
    },
    { label: "College Access", path: "/CollegeAccess", icon:<CollegeIcon/>},
    {
      label: "corporate Access",
      path: "/CorporateAccess",
      icon: <CollegeIcon/>
    },
    { label: "State Access", path: "/StateAccess",icon:<StateIcon/>  },
    { label: "Revenue", path: "/Revenue", icon:<RevenueIcon/> },
  ];
  return (
    <div className="flex flex-col w-[275px] h-[558.65px] gap-[25px]">
      <div className="logo flex flex-col w-[275px] h-[35.65px] pr-[34px] pl-[25px] gap-[10px] ">
        <img src="./logo.png" />
      </div>
      <div className="flex flex-col w-[275px] h-[498px] py-[10px] pr-[20px] pl-[25px] gap-[10px]">
        <ul>
          {Items.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-[5px] w-full h-[51px] p-[15px] rounded-[10px] ${
                    isActive ? "bg-[#5D5FEF]" : "#fff hover:bg-[#5d5fef1a]"
                  }`}
                >
                  <span className="w-[25px] flex items-start">
                    {React.cloneElement(item.icon, {
                      color: isActive ? "#ffffff" : "#000000",
                    })}
                  </span>
                  <span
                    className={`font-semibold  text-[17px] ${
                      isActive ? "text-[white]" : "text-[#222]"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default TopSidebar;
