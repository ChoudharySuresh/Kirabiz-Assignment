import axios from "axios";
import { useEffect, useState } from "react";
import BuyersTable from "../Components/BuyersTable";
import Loader from "../Components/Loader";

const Suppliers = () => {
  const TABLE_HEAD = [
    "Last Traded",
    "Company",
    "Country",
    "HS Code",
    "Product",
  ];

  const options = [];
  for (let i = 1; i <= 100; i++) {
    options.push(i);
  }

  const [page, setPage] = useState(1);
  const onChangeHandler = (event) => {
    setPage(event.target.value);
  };

  const [tableRows, setTableRows] = useState([]);
  const getSuppliersData = async () => {
    try {
      const response = await axios.get(
        `https://app.vujis.com/api/search/suppliers?page=${page}`,
        {
          headers: {
            Authorization:
              "Basic NzE5OTE3NTQtOTk2OS00MzU5LTkyOGQtYWY0MDQ2YTU5NWFlOg==",
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
    getSuppliersData();
  }, [page]);
  return (
    <div>
      <h1>Suppliers</h1>
      {tableRows.length === 0 ? (
        <Loader />
      ) : (
        <BuyersTable tableHead={TABLE_HEAD} tableRows={tableRows} />
      )}

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

export default Suppliers;
