import { Card, Typography } from "@material-tailwind/react";
import {
  truncateText,
  formatDate,
  formatQuantity,
  formateWeight,
} from "../Utils/helperFunction";

const Table = ({ tableHead, tableRows }) => {
  console.log(tableHead);
  console.log(tableRows);
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
          {tableRows.map((value, index) => {
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
                    {value.date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal w-[10rem] text-white"
                  >
                    {value.importer}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-white"
                  >
                    {value.destination}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-white"
                  >
                    {value.hs_code}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-white w-[5rem]"
                  >
                    {value.product}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal w-[10rem] text-white"
                  >
                    {value.exporter}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-white"
                  >
                    {value.origin}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-white"
                  >
                    {value.quantity}
                    {value.quantity_unit}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal w-[5rem] text-white"
                  >
                    {value.weight}
                    {value.weight_unit}
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

export default Table;
