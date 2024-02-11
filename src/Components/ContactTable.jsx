import { Card, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
const ContactTable = () => {
  const tableHead = ["Email", "Company Name", "Company Phone", "Country"];

  const tableRows = useSelector((state) => state.contact);
  const rows = tableRows.contact;
  console.log(rows);
  return (
    <Card className="w-full">
      <table className="w-full min-w-max table-auto text-left bg-black ">
        <thead>
          <tr>
            {tableHead.map((head) => (
              <th key={head} className="border-b border-blue-gray-100  p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 text-white"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((value, index) => {
            const isLast = index === tableRows.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-white"
                  >
                    {value.email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal w-[10rem] text-white"
                  >
                    {value.companyName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-white"
                  >
                    {value.phoneNo}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-white"
                  >
                    {value.selectedCountry}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default ContactTable;
