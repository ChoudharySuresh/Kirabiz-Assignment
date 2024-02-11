import { PlusIcon } from "@heroicons/react/24/outline";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import ReactFlagsSelect from "react-flags-select";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setContact } from "../Store/ContactSlice";
import ContactTable from "../Components/ContactTable";
const Saved = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmailValue] = useState("");
  const [companyName, setCompanyNameValue] = useState("");
  const [phoneNo, setPhoneNoValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleOpen = () => setOpen(!open);

  const dispatch = useDispatch();

  const handleAddBuyer = () => {
    const data = {
      email: email,
      companyName: companyName,
      phoneNo: phoneNo,
      selectedCountry: selectedCountry,
    };

    dispatch(setContact(data));
    // console.log(data);

    setEmailValue("");
    setCompanyNameValue("");
    setPhoneNoValue("");
    setSelectedCountry("");
    handleOpen();
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl">Saved Contacts</h1>
        <button
          onClick={handleOpen}
          className="px-4 py-2 bg-gray-200 text-black rounded-md flex items-center gap-2"
        >
          <PlusIcon class="h-6 w-6" />
          Add
        </button>
        <Dialog open={open} size="xs" handler={handleOpen}>
          <DialogBody>
            <form>
              <div className="grid gap-6">
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
                <Input
                  label="Comapany Name"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyNameValue(e.target.value)}
                />
                <PhoneInput
                  country={"us"}
                  value={phoneNo}
                  onChange={(value) => setPhoneNoValue("+" + value)}
                />
                <ReactFlagsSelect
                  selected={selectedCountry}
                  onSelect={(code) => setSelectedCountry(code)}
                />
              </div>
            </form>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button
              type="submit"
              variant="text"
              color="gray"
              onClick={handleOpen}
            >
              cancel
            </Button>
            <Button onClick={handleAddBuyer} variant="gradient" color="gray">
              Add Buyer
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <hr className="my-2" />
      <ContactTable />
    </div>
  );
};

export default Saved;
