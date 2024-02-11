import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { auth } from "../Firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exists, setExists] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = "service_eki15tl";
    const templateId = "template_v58i0hd";
    const publicKey = "yA1U8uvqM_IA17jw3";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        to_email: email,
      },
    };

    try {
      const res = await axios.post(
        `https://api.emailjs.com/api/v1.0/email/send`,
        data
      );

      await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.data);
      setExists(false);
      navigate("/verification");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setExists(true);
        navigate("/");
      } else {
        alert(error.code);
      }
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const handleLoginBtn = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <div className=" flex justify-center w-[100vw] h-[100vh] items-center">
          <form
            className=" w-[27%] flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center my-4">VUJIS</h1>
            <div className="flex justify-between">
              <div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First Name"
                  required
                  className="bg-transparent px-2 py-1 border-[2px] border-[#696969] rounded-md"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Last Name"
                  required
                  className="bg-transparent px-2 py-1 border-[2px] border-[#696969] rounded-md"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                required
                name="email"
                className="w-[100%] bg-transparent px-2 py-1 border-[2px] border-[#696969] rounded-md"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                required
                className="w-[100%] bg-transparent px-2 py-1 border-[2px] border-[#696969] rounded-md"
              />
            </div>

            <div>
              <button
                type="submit"
                className="text-center font-bold w-full px-4 py-1  bg-white text-black hover:bg-black hover:text-white border-[1px]"
              >
                Sign Up
              </button>
            </div>
            <p className="text-center text-sm text-gray-400">Or</p>
            <div>
              <button
                onClick={handleLoginBtn}
                className="text-center font-bold w-full px-4 py-1  hover:bg-white text-white hover:text-black border-[1px] "
              >
                Login
              </button>
            </div>
          </form>
          {exists && (
            <p className="text-center text-red-500 mt-2">
              User already exists. Please login.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
