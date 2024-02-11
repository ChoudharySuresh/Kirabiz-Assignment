import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut } from "firebase/auth";
import { auth } from "../Firebaseconfig";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl">Account</h1>
        <button
          onClick={handleLogOut}
          className="bg-gray-200 text-black px-4 py-1 text-xl rounded-md flex items-center gap-2"
        >
          <ArrowLeftStartOnRectangleIcon class="h-6 w-6 " />
          Log Out
        </button>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Account;
