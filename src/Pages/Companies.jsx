import axios from "axios";
import { useEffect, useState } from "react";
import CompanyTable from "../Components/CompanyTable";

const Companies = () => {
  const TABLE_HEAD = ["Name", "Country", "Address", "Website", "Phone"];
  const [tableRows, setTableRows] = useState();
  const getCompaniesData = async () => {
    try {
      const response = await axios.get("https://app.vujis.com/api/companies", {
        headers: {
          Authorization:
            "Basic NzE5OTE3NTQtOTk2OS00MzU5LTkyOGQtYWY0MDQ2YTU5NWFlOg==",
        },
      });
      const jsonResponse = await response.data;
      setTableRows(jsonResponse?.rows);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCompaniesData();
  }, []);

  return (
    <div>
      <h1>Company</h1>
      <CompanyTable tableHead={TABLE_HEAD} tableRows={tableRows} />
    </div>
  );
};

export default Companies;
