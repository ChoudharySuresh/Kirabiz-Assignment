import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Components/Table";
import Loader from "../Components/Loader";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import ReactFlagsSelect from "react-flags-select";
import { IoFilterOutline } from "react-icons/io5";

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
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [selectedImportedCountry, setSelectedImportedCountry] = useState("");
  const [SelectedExportedCountry, setSelectedExportedCountry] = useState("");

  console.log(selectedImportedCountry);
  console.log(SelectedExportedCountry);
  const options = [];

  for (let i = 1; i <= 100; i++) {
    options.push(i);
  }

  const onChangeHandler = (event) => {
    setPage(event.target.value);
  };

  const HsCode = [
    "1001 - Wheat,meslin",
    "1002",
    "1004",
    "0804 - Dates, figs, pineapples, avocados, guavas, mangoes and mangosteens, fresh or dried:",
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (isButtonClicked) {
  //         const response = await axios.get(
  //           `https://app.vujis.com/api/search/shipments?search_by=${searchBy}&query=${hsCode}&page=${page}`,
  //           {
  //             headers: {
  //               Authorization:
  //                 "Basic NjlhZjM5MDgtNGM4MC00NDlkLWIxZTAtMzFkMmVkZDcwOTM1Og==",
  //             },
  //           }
  //         );
  //         const jsonResponse = await response.data;
  //         setTableRows(jsonResponse?.rows);
  //         console.log(jsonResponse);
  //       } else {
  //         const defaultResponse = await axios.get(
  //           `https://app.vujis.com/api/search/shipments?page=${page}`,
  //           {
  //             headers: {
  //               Authorization:
  //                 "Basic NjlhZjM5MDgtNGM4MC00NDlkLWIxZTAtMzFkMmVkZDcwOTM1Og==",
  //             },
  //           }
  //         );
  //         const defaultJsonResponse = await defaultResponse.data;
  //         setTableRows(defaultJsonResponse?.rows);
  //         // console.log(defaultJsonResponse);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  //   setButtonClicked(false);
  // }, [page, isButtonClicked]);

  const handleFilterSearch = async () => {
    try {
      const response = await axios.get(
        `https://app.vujis.com/api/search/shipments?search_by=${searchBy}&query=${hsCode}&destination=${selectedImportedCountry}&origin=${SelectedExportedCountry}&page=${page}`,
        {
          headers: {
            Authorization:
              "Basic NjlhZjM5MDgtNGM4MC00NDlkLWIxZTAtMzFkMmVkZDcwOTM1Og==",
          },
        }
      );

      const jsonResponse = await response.data;
      console.log(jsonResponse);
      setTableRows(jsonResponse?.rows);
    } catch (err) {
      console.log(err);
    }

    handleOpen(); // Close the filter dialog after making the API call
  };
  return (
    <div>
      <h1>Shipment Page</h1>
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
            className="bg-black px-2 py-1 border-[1px] w-[5rem]"
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
      <hr className="my-2" />
      <div className="my-4">
        <button
          onClick={handleOpen}
          className="px-4 py-2 text-white rounded-md flex items-center gap-2"
        >
          <IoFilterOutline class="h-6 w-6" />
          Filters
        </button>
        <Dialog open={open} size="xs" handler={handleOpen}>
          <DialogBody>
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Filters
              </Typography>
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Importing to
              </Typography>
              <ReactFlagsSelect
                selected={selectedImportedCountry}
                onSelect={(code) => setSelectedImportedCountry(code)}
              />
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Exporting to
              </Typography>
              <ReactFlagsSelect
                selected={SelectedExportedCountry}
                onSelect={(code) => setSelectedExportedCountry(code)}
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
              Close
            </Button>
            <Button
              variant="gradient"
              color="gray"
              onClick={handleFilterSearch}
            >
              Search
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <hr className="my-2" />
      {tableRows.length === 0 ? (
        <h1>0 Results</h1>
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
