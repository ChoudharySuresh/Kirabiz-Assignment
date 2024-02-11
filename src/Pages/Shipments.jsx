import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Components/Table";
import Loader from "../Components/Loader";

const Shipments = () => {
  const TABLE_HEAD = [
    "Date",
    "Importer",
    "Destination",
    "HS Code",
    "Product",
    "Exporter",
    "Origin",
    "Quantity",
    "Weight",
  ];
  const [page, setPage] = useState(1);
  const [tableRows, setTableRows] = useState([]);

  const options = [];

  for (let i = 1; i <= 100; i++) {
    options.push(i);
  }

  const onChangeHandler = (event) => {
    setPage(event.target.value);
  };

  const getShipmentsData = async () => {
    try {
      const response = await axios.get(
        `https://app.vujis.com/api/search/shipments?page=${page}`,
        {
          headers: {
            Authorization:
              "Basic NzE5OTE3NTQtOTk2OS00MzU5LTkyOGQtYWY0MDQ2YTU5NWFlOg==",
          },
        }
      );
      const jsonResponse = await response.data;
      setTableRows(jsonResponse?.rows);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getShipmentsData();
  }, [page]);

  return (
    <div>
      <h1>Shipment Page</h1>
      {tableRows.length === 0 ? (
        <Loader />
      ) : (
        <Table tableHead={TABLE_HEAD} tableRows={tableRows} />
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

export default Shipments;
