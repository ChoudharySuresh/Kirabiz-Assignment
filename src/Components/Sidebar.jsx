import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";

import Logo from "../Image/companyLogo.jpeg";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import {
  BuildingStorefrontIcon,
  ClockIcon,
  CubeIcon,
  BuildingOffice2Icon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Sidebar = ({ onMenuItemClick }) => {
  // const [open, setOpen] = useState(0);

  // const handleOpen = (value, page) => {
  //   setOpen(open === value ? 0 : value);
  //   onMenuItemClick(page);
  // };

  const handleListItemClick = (page) => {
    onMenuItemClick(page);
  };

  return (
    <Card className="h-[100vh] w-full max-w-[20rem] p-4 bg-black shadow-sm shadow-gray-400">
      <div className="mb-2 p-4">
        <img src={Logo} alt="companyLogo" />
      </div>
      <List>
        <List className="p-0 text-white">
          <ListItem onClick={() => handleListItemClick("shipments")}>
            <ListItemPrefix>
              <BuildingStorefrontIcon strokeWidth={3} className="h-4 w-5" />
            </ListItemPrefix>
            Shipments
          </ListItem>
          <ListItem onClick={() => handleListItemClick("buyers")}>
            <ListItemPrefix>
              <ClockIcon strokeWidth={3} className="h-4 w-5" />
            </ListItemPrefix>
            Buyers
          </ListItem>
          <ListItem onClick={() => handleListItemClick("suppliers")}>
            <ListItemPrefix>
              <CubeIcon strokeWidth={3} className="h-4 w-5" />
            </ListItemPrefix>
            Suppliers
          </ListItem>
        </List>

        <ListItem
          className="text-white"
          onClick={() => handleListItemClick("companies")}
        >
          <ListItemPrefix>
            <BuildingOffice2Icon className="h-5 w-5" />
          </ListItemPrefix>
          Companies
        </ListItem>
        <ListItem
          className="text-white"
          onClick={() => handleListItemClick("saved")}
        >
          <ListItemPrefix>
            <BookmarkSquareIcon className="h-5 w-5" />
          </ListItemPrefix>
          Saved
        </ListItem>
        <hr className="my-2 border-white-50" />
        <ListItem
          className="text-white"
          onClick={() => handleListItemClick("account")}
        >
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Account
        </ListItem>
      </List>
    </Card>
  );
};

export default Sidebar;
