import { useEffect, useState } from "react";
import CompanyEmail from "./CompanyEmail";
import axios from "axios";

const Emails = () => {
  const [emailsData, setEmailsData] = useState();
  // const getEmailsData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://app.vujis.com/api/emails?website=http%3A%2F%2Fwww.nucor.com`,
  //       {
  //         headers: {
  //           Authorization:
  //             "Basic NjlhZjM5MDgtNGM4MC00NDlkLWIxZTAtMzFkMmVkZDcwOTM1Og==",
  //         },
  //       }
  //     );
  //     const data = await response.data;
  //     setEmailsData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getEmailsData();
  // }, []);
  return (
    <div>
      {emailsData.map((value, index) => {
        return <CompanyEmail key={index} emailValues={value} />;
      })}
    </div>
  );
};

export default Emails;
