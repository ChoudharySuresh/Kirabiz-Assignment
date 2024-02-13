import { FaShip } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";
import CompanyPieChart from "../CompanyDetails/CompanyPieChart";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";

const Overview = ({ name }) => {
  const [overViewData, setOverViewData] = useState(null);
  const [loading, setLoading] = useState(true);

  // const getOverviewDetails = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://app.vujis.com/api/companies/${name}/overview`,
  //       {
  //         headers: {
  //           Authorization:
  //             "Basic NjlhZjM5MDgtNGM4MC00NDlkLWIxZTAtMzFkMmVkZDcwOTM1Og==",
  //         },
  //       }
  //     );
  //     const json = await response.data;
  //     setOverViewData(json);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   getOverviewDetails();
  // }, [name]);

  if (loading) {
    return <Loader />;
  }

  if (!overViewData) {
    return <div>No data available for this company</div>;
  }

  const importLength = overViewData.imports.length;
  console.log(importLength);
  return (
    <div className="flex items-center gap-5">
      <div className="border-[1px] px-3 py-2 rounded-lg">
        <div className="flex flex-col gap-2">
          <h1>Imports</h1>
          <div className="flex items-center gap-2">
            <FaShip className="text-white" />
            {importLength === null ? (
              <h1>0 shipments</h1>
            ) : (
              <h1>{importLength} shipments</h1>
            )}
            {/* <h1>1 shipments</h1> */}
          </div>
          <div className="flex items-center gap-2">
            <TbMoneybag className="text-white" />
            <h1>$ 0</h1>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-4">
          <div>
            <h1>Suppliers</h1>
            <CompanyPieChart />
          </div>
          <div>
            <h1>Products Bought:</h1>
            <CompanyPieChart />
          </div>
        </div>
      </div>
      <div className="border-[1px] px-3 py-2 rounded-lg">
        <div className="flex flex-col gap-2">
          <h1>Exports</h1>
          <div className="flex items-center gap-2">
            <FaShip className="text-white" />
            <h1>1 shipments</h1>
          </div>
          <div className="flex items-center gap-2">
            <TbMoneybag className="text-white" />
            <h1>$ 0</h1>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-4">
          <div>
            <h1>Buyers:</h1>
            <CompanyPieChart />
          </div>
          <div>
            <h1>Products Sold:</h1>
            <CompanyPieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
