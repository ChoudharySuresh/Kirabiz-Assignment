import { Spinner } from "@material-tailwind/react";

const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Spinner className="h-12 w-12" />
    </div>
  );
};

export default Loader;
