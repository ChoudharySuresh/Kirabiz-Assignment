import {
  ArrowLeftIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Overview from "../Components/Tabs/Overview";
import Emails from "../Components/Tabs/Emails";
import Imports from "../Components/Tabs/Imports";
import Exports from "../Components/Tabs/Exports";
import { useEffect, useState } from "react";
import axios from "axios";

const CompanyPage = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [toggelState, setToggleState] = useState(1);
  const [companyHeaderInfo, setCompanyHeaderInfo] = useState(null);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handleBack = () => {
    navigate(-1);
  };

  const currentPathname = location.pathname;

  console.log(currentPathname.substring("/companies".length + 1));

  const companyName = currentPathname.substring("/companies".length + 1);

  const displayCompanyName = decodeURIComponent(
    currentPathname.substring("/companies".length + 1)
  );

  console.log(displayCompanyName);
  const getCompanyHeaderDetails = async () => {
    try {
      const response = await axios.get(
        `https://app.vujis.com/api/companies/${companyName}`,
        {
          headers: {
            Authorization:
              "Basic NjlhZjM5MDgtNGM4MC00NDlkLWIxZTAtMzFkMmVkZDcwOTM1Og==",
          },
        }
      );
      const json = await response.data;
      setCompanyHeaderInfo(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCompanyHeaderDetails();
  }, [companyName]);

  return (
    <div className="my-8 mx-4">
      <ArrowLeftIcon
        strokeWidth={3}
        className="h-5 w-10"
        onClick={handleBack}
      />
      <div className="w-[90%] mx-auto">
        <div className="flex items-center gap-6 mt-4">
          <BuildingOfficeIcon strokeWidth={3} className="h-10 w-10" />
          <div>
            <h1 className="text-xl">{displayCompanyName}</h1>
            <p className="mt-2">{companyHeaderInfo?.country}</p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="my-4 flex flex-col gap-3">
          <div>
            <h1>{companyHeaderInfo?.address}</h1>
          </div>
          <div className="flex items-center gap-3">
            <GlobeAltIcon strokeWidth={3} className="h-7 w-10" />
            <Link to="#">{companyHeaderInfo?.website}</Link>
          </div>
          <div>
            {companyHeaderInfo?.phone === null ? (
              <h1></h1>
            ) : (
              <h1>{companyHeaderInfo?.phone}</h1>
            )}
          </div>
        </div>
        {/* <div className="flex gap-3 my-2">
          <Button
            onClick={() => toggleTab(1)}
            className={`${
              toggelState === 1
                ? "border-[1px] bg-[#202020]"
                : "border-none bg-transparent"
            }`}
          >
            Overview
          </Button>
          <Button
            onClick={() => toggleTab(2)}
            className={`${
              toggelState === 2
                ? "border-[1px] bg-[#202020]"
                : "border-none bg-transparent"
            }`}
          >
            Emails
          </Button>
          <Button
            onClick={() => toggleTab(3)}
            className={`${
              toggelState === 3
                ? "border-[1px] bg-[#202020]"
                : "border-none bg-transparent"
            }`}
          >
            Imports
          </Button>
          <Button
            onClick={() => toggleTab(4)}
            className={`${
              toggelState === 4
                ? "border-[1px] bg-[#202020]"
                : "border-none bg-transparent"
            }`}
          >
            Exports
          </Button>
        </div> */}
        {/* <hr className="my-4" /> */}
        {/* <div>
          <div className={`${toggelState === 1 ? "block" : "hidden"}`}>
            <Overview name={companyName} />
          </div>
          <div className={`${toggelState === 2 ? "block" : "hidden"}`}>
            <Emails />
          </div>
          <div className={`${toggelState === 3 ? "block" : "hidden"}`}>
            <Imports />
          </div>
          <div className={`${toggelState === 4 ? "block" : "hidden"}`}>
            <Exports />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CompanyPage;
