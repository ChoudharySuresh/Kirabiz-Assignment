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

  const HsCode = [
    "1001",
    "1002",
    "1003",
    "1004",
    "1005",
    "1006",
    "1007",
    "1008",
    "1102",
    "1103",
    "1104",
    "1105",
    "1106",
    "1107",
    "1108",
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
  const [searchBy, setSearchBy] = useState("hs_code");
  const [hsCode, setHsCode] = useState("1001");
  const [isButtonClicked, setButtonClicked] = useState(false);
  const handleSearchByHandler = (event) => {
    setSearchBy(event.target.value);
  };
  const handleHsCodeHandler = (event) => {
    setHsCode(event.target.value);
  };

  const handleSearchClick = () => {
    setButtonClicked(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isButtonClicked) {
          const response = await axios.get(
            `https://app.vujis.com/api/search/suppliers?search_by=${searchBy}&query=${hsCode}&page=${page}`,
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
        } else {
          const defaultResponse = await axios.get(
            `https://app.vujis.com/api/search/suppliers?page=${page}`,
            {
              headers: {
                Authorization:
                  "Basic NzE5OTE3NTQtOTk2OS00MzU5LTkyOGQtYWY0MDQ2YTU5NWFlOg==",
              },
            }
          );
          const defaultJsonResponse = await defaultResponse.data;
          setTableRows(defaultJsonResponse?.rows);
          console.log(defaultJsonResponse);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    setButtonClicked(false);
  }, [page, isButtonClicked]);

  return (
    <div>
      <h1>Suppliers</h1>
      <div className="flex items-center gap-4">
        <div>
          <select
            className="bg-black px-2 py-1 border-[1px]"
            onChange={handleSearchByHandler}
          >
            <option value="hs_code">Product</option>
            <option value="company">Company</option>
          </select>
        </div>
        <div>
          <select
            className="bg-black px-2 py-1 border-[1px]"
            onChange={handleHsCodeHandler}
          >
            {HsCode.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <button
          onClick={handleSearchClick}
          className="bg-gray-200 px-2 py-2 text-black"
        >
          Search
        </button>
      </div>
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
