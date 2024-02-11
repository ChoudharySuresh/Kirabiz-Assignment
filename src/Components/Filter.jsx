import { useDispatch } from "react-redux";
import { setSearchBy, setQuery } from "../Store/SearchSlice";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const Filter = () => {
  const HsCode = [
    "1001 - Wheat and meslin",
    "1002 - Rye:",
    "1003 - Barley:",
    "1004 - Oats:",
    "1005 - Corn (Maize):",
    "1006 - Rice:",
    "1007 - Grain sorghum:",
    "1008",
    "1102",
    "1103",
    "1104",
    "1105",
    "1106",
    "1107",
    "1108",
  ];
  const [selectInput, setSelectInput] = useState(false);
  const dispatch = useDispatch();

  const onSearchByChangeHandler = (event) => {
    const selectedOption = event.target.value;
    dispatch(setSearchBy(selectedOption));
    setSelectInput(selectedOption === "company");
  };
  const onHSCodeChangeHandler = (event) => {
    dispatch(setQuery(event.target.value));
  };
  return (
    <div className="flex items-center gap-4">
      <div>
        <select
          onChange={onSearchByChangeHandler}
          className="bg-black border-[1px] px-2 py-2"
        >
          <option value="hs_code">Product</option>
          <option value="company">Company</option>
        </select>
      </div>
      <div>
        {selectInput ? (
          <input
            type="text"
            className="bg-black px-2 py-1 border-[1px]"
            placeholder="Enter Company Name"
          />
        ) : (
          <select
            className="bg-black border-[1px] px-2 py-2"
            onChange={onHSCodeChangeHandler}
          >
            {HsCode.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        )}
      </div>
      <button className="bg-gray-200 px-2 py-2 rounded-md">
        <MagnifyingGlassIcon className="h-5 w-5 text-black" />
      </button>
    </div>
  );
};

export default Filter;
