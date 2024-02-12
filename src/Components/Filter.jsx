import { useDispatch } from "react-redux";
import { setSearchBy, setQuery, setButtonClick } from "../Store/SearchSlice";

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

  const [selectedSearchBy, setSelectedSearchBy] = useState("product");
  const [selectedHsCode, setSelectedHsCode] = useState("");

  const dispatch = useDispatch();
  const handleSearchByChange = (event) => {
    setSelectedSearchBy(event.target.value);
  };

  const handleHsCodeChange = (event) => {
    setSelectedHsCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchBy(selectedSearchBy));
    dispatch(setQuery(selectedHsCode));
    dispatch(setButtonClick(true));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <select
            className="bg-black"
            onChange={handleSearchByChange}
            value={selectedSearchBy}
          >
            <option value="hs_code">Product</option>
            <option value="product">Company</option>
          </select>
        </div>
        <div>
          <select
            className="bg-black"
            value={selectedHsCode}
            onChange={handleHsCodeChange}
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
        <button type="submit" className="bg-gray-300 text-black">
          <MagnifyingGlassIcon className="h-5 w-5 " />
        </button>
      </form>
    </div>
  );
};

export default Filter;
