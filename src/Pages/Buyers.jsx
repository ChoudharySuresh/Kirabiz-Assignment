import axios from "axios";
import { useEffect, useState } from "react";
import BuyersTable from "../Components/BuyersTable";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import ReactFlagsSelect from "react-flags-select";
import { IoFilterOutline } from "react-icons/io5";

const Buyers = () => {
  const TABLE_HEAD = [
    "Last Traded",
    "Company",
    "Country",
    "HS Code",
    "Product",
  ];
  const [page, setPage] = useState(1);
  const [tableRows, setTableRows] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [selectedImportedCountry, setSelectedImportedCountry] = useState("");
  const [SelectedExportedCountry, setSelectedExportedCountry] = useState("");
  const [companySuggestion, setCompanySuggestion] = useState([]);

  const options = [];

  for (let i = 1; i <= 100; i++) {
    options.push(i);
  }

  const onChangeHandler = (event) => {
    setPage(event.target.value);
  };

  const [searchBy, setSearchBy] = useState("hs_code");
  const [query, setQuery] = useState("");
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSearchByHandler = (event) => {
    setSearchBy(event.target.value);
    setSelectedOption(event.target.value);
  };
  const handleQueryHandler = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    setButtonClicked(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isButtonClicked) {
          const response = await axios.get(
            `https://app.vujis.com/api/search/buyers?search_by=${searchBy}&query=${query}&page=${page}`,
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
        } else {
          const defaultResponse = await axios.get(
            `https://app.vujis.com/api/search/buyers?page=${page}`,
            {
              headers: {
                Authorization:
                  "Basic NjlhZjM5MDgtNGM4MC00NDlkLWIxZTAtMzFkMmVkZDcwOTM1Og==",
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

  const handleFilterSearch = async () => {
    try {
      const response = await axios.get(
        `https://app.vujis.com/api/search/buyers?search_by=${searchBy}&query=${query}&destination=${selectedImportedCountry}&origin=${SelectedExportedCountry}&page=${page}`,
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

    handleOpen();
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [productSuggestion, setProductSuggestion] = useState([]);

  const handleDropdownSelect = (selectedValue) => {
    setQuery(selectedValue);
    setDropdownVisible(false);
  };

  const handleCompanyDropdownSelect = (selectedValue) => {
    setQuery(selectedValue);
    setDropdownVisible(false);
  };

  const getSuggestions = async () => {
    if (selectedOption === "company") {
      try {
        const response = await axios.get(
          `https://app.vujis.com/api/search/suggestions/companies?query=${query}`,
          {
            headers: {
              Authorization:
                "Basic NjlhZjM5MDgtNGM4MC00NDlkLWIxZTAtMzFkMmVkZDcwOTM1Og==",
            },
          }
        );
        const jsonData = await response.data;
        setCompanySuggestion(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.get(
          `https://app.vujis.com/api/search/suggestions/products?query=${query}`,
          {
            headers: {
              Authorization:
                "Basic NjlhZjM5MDgtNGM4MC00NDlkLWIxZTAtMzFkMmVkZDcwOTM1Og==",
            },
          }
        );
        const jsonData = await response.data;
        setProductSuggestion(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      getSuggestions();
      setDropdownVisible(query.length >= 2);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownVisible &&
        !document.getElementById("dropdown-container").contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownVisible]);
  return (
    <div>
      <h1>Buyers</h1>
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
          <input
            type="text"
            value={query}
            onChange={handleQueryHandler}
            className="bg-black text-white px-2 py-1 border-[1px] w-[15rem]"
            placeholder="Enter the Product & HS Code"
          />
          {dropdownVisible && (
            <div
              id="dropdown-container"
              className="bg-black absolute z-20 my-2 w-[15rem] h-[15rem] overflow-y-scroll rounded-lg shadow-2xl border border-gray-200 "
            >
              {selectedOption === "company" ? (
                <ul className="my-4">
                  {companySuggestion.map((curr, index) => {
                    return (
                      <li
                        className="px-3 py-2 flex gap-4 hover:cursor-pointer"
                        key={index}
                        onClick={() => handleCompanyDropdownSelect(curr)}
                      >
                        {curr}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul className="my-4">
                  {productSuggestion.map((curr, index) => {
                    return (
                      <li
                        className="px-3 py-2 flex gap-4 hover:cursor-pointer"
                        key={index}
                        onClick={() => handleDropdownSelect(curr.code)}
                      >
                        {`${curr.code} - ${curr.description}`}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}
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
                Exporting From
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

export default Buyers;
