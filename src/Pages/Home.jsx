import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Shipments from "./Shipments";
import Buyers from "./Buyers";
import Suppliers from "./Suppliers";
import Companies from "./Companies";
import Saved from "./Saved";
import Account from "./Account";
const Home = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };
  return (
    <div className="flex">
      <Sidebar onMenuItemClick={handleMenuItemClick} />

      <div className="flex-1 p-4">
        {/* Content for each menu item */}
        {selectedMenuItem === "shipments" && <Shipments />}
        {selectedMenuItem === "buyers" && <Buyers />}
        {selectedMenuItem === "suppliers" && <Suppliers />}
        {selectedMenuItem === "companies" && <Companies />}
        {selectedMenuItem === "saved" && <Saved />}
        {selectedMenuItem === "account" && <Account />}
      </div>
    </div>
  );
};

export default Home;
