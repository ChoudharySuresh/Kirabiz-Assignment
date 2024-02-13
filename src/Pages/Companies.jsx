import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import CompanyTable from "../Components/CompanyTable";
// import ComapanyDemoTable from "../Components/ComapanyDemoTable";

const Companies = () => {
  const TABLE_HEAD = ["Name", "Country", "Address", "Website", "Phone"];
  const [tableRows, setTableRows] = useState();
  const options = [];

  for (let i = 1; i <= 100; i++) {
    options.push(i);
  }
  const [page, setPage] = useState(1);

  const onChangeHandler = (event) => {
    setPage(event.target.value);
    getCompaniesData();
  };

  const getCompaniesData = async () => {
    try {
      const response = await axios.get(
        `https://app.vujis.com/api/companies?page=${page}&page_size=15`,
        {
          headers: {
            Authorization:
              "Basic NjlhZjM5MDgtNGM4MC00NDlkLWIxZTAtMzFkMmVkZDcwOTM1Og==",
          },
        }
      );
      const jsonResponse = await response.data;
      setTableRows(jsonResponse?.rows);
      console.log(jsonResponse);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCompaniesData();
  }, [page]);

  console.log(page);
  return (
    <div>
      <h1>Company</h1>
      <CompanyTable tableHead={TABLE_HEAD} tableRows={tableRows} />
      <select className="bg-black" onChange={onChangeHandler}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Companies;
