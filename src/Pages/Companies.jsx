import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import CompanyTable from "../Components/CompanyTable";
// import ComapanyDemoTable from "../Components/ComapanyDemoTable";

const Companies = () => {
  const TABLE_HEAD = ["Name", "Country", "Address", "Website", "Phone"];
  const [tableRows, setTableRows] = useState();
  // const getCompaniesData = async () => {
  //   try {
  //     const response = await axios.get("https://app.vujis.com/api/companies", {
  //       headers: {
  //         Authorization:
  //           "Basic NjlhZjM5MDgtNGM4MC00NDlkLWIxZTAtMzFkMmVkZDcwOTM1Og==",
  //       },
  //     });
  //     const jsonResponse = await response.data;
  //     setTableRows(jsonResponse?.rows);
  //     console.log(jsonResponse);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getCompaniesData();
  // }, []);
  const [page, setPage] = useState(1);

  const handleIncrement = () => {
    setPage(page + 1);
  };
  const handleDecrement = () => {
    setPage(page - 1);
  };
  console.log(tableRows);
  return (
    <div>
      <h1>Company</h1>
      <CompanyTable tableHead={TABLE_HEAD} tableRows={tableRows} />
      {/* <ComapanyDemoTable tableHead={TABLE_HEAD} tableRows={tableRows} /> */}
      <div className="flex items-center gap-1 justify-between border-[1px] w-[5em]">
        <button
          onClick={handleDecrement}
          className={`border-r-[1px] px-1 py-1 ${
            page === 1 ? "disabled:" : "enabled:"
          }`}
          disabled={page === 1}
        >
          <ChevronLeftIcon className="text-white h-4 w-5" />
        </button>
        <p>{page}</p>
        <button onClick={handleIncrement} className="border-l-[1px] px-1 py-1">
          <ChevronRightIcon className="text-white h-4 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Companies;
