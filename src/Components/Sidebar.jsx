import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import {
  MagnifyingGlassIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  CubeIcon,
  BuildingOffice2Icon,
  BookmarkSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Sidebar = ({ onMenuItemClick }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleListItemClick = (page) => {
    onMenuItemClick(page);
  };

  return (
    <Card className="h-[100vh] w-full max-w-[20rem] p-4 bg-black shadow-sm shadow-gray-400">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="white">
          VUJIS
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform text-white ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 text-white"
            >
              <ListItemPrefix>
                <MagnifyingGlassIcon className="h-5 w-5 " />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Search
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 ">
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
          </AccordionBody>
        </Accordion>

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
