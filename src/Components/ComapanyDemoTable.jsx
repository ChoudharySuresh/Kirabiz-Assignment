import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ComapanyDemoTable = ({ tableHead, tableRows }) => {
  return (
    <div>
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
            {tableRows?.map((value, index) => {
              const isLast = index === tableRows.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={index}>
                  <td className={classes}>
                    <Link
                      to={`/companies/${value.name}`}
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-white"
                    >
                      {value.name}
                    </Link>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-white"
                    >
                      {value.country}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-white"
                    >
                      {value.address}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-white w-[15rem]"
                    >
                      {value.website}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-white w-[1rem]"
                    >
                      {value.phone}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ComapanyDemoTable;
