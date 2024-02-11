import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebaseconfig";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/register");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <div className=" flex justify-center w-[100vw] h-[100vh] items-center">
          <form
            className=" w-[27%] flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center">VUJIS</h1>
            <div>
              <label htmlFor="email" className="block my-3 text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[100%] bg-transparent px-2 py-1 border-[2px] border-[#696969] rounded-md"
              />
            </div>
            <div>
              <div className="flex items-center justify-between text-gray-400">
                <label htmlFor="password" className="block my-3 ">
                  Password
                </label>
                <p className="text-sm">Forgot</p>
              </div>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[100%] bg-transparent px-2 py-1 border-[2px] border-[#696969] rounded-md"
              />
            </div>

            <div>
              <button
                type="submit"
                className="text-center font-bold w-full px-4 py-1  hover:bg-white text-white hover:text-black border-[1px] mt-3"
              >
                Login
              </button>
            </div>
            <p className="text-center text-sm text-gray-400">Or</p>
            <div>
              <button
                onClick={handleSignUp}
                className="text-center font-bold w-full px-4 py-1  bg-white text-black hover:bg-black hover:text-white border-[1px]"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
