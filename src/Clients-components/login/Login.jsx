import { useState } from "react";
import login from "../../assets/client/loginimg.png";
import logo from "../../assets/client/google.png";
const Login = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const validateInput = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!value) {
      setError("Email or Mobile Number is required");
      return false;
    } else if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      setError("Enter a valid email or 10-digit mobile number");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput(input)) {
      alert("OTP Sent!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-around bg-[#0827b2]">
      <div className="flex items-center justify-center w-full  p-6">
        {/* Left Side Image */}
        <div className="w-[40%] hidden md:flex items-center justify-center p-6">
          <img
            src={login}
            alt="Reception Area"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-[35%]  p-10  bg-white rounded-lg shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-5 text-start">
            Welcome Back!
          </h2>
          <form onSubmit={handleSubmit} className="w-full">
            <label className="block pl-1 py-2">Email / Mobile Number</label>
            <input
              type="text"
              placeholder="Enter here .."
              value={input}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <p className="text-xs mt-2 text-center">
              By signing up, you agree to our{" "}
              <a href="#" className="text-blue-500">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
            </p>
            <button
              type="submit"
              className="w-full mt-4 bg-yellow-400 text-black py-3 rounded-3xl font-semibold disabled:opacity-50"
              disabled={!input || error}
            >
              SEND OTP
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-1 border-t"></div>
            <p className="mx-4 text-gray-500">OR</p>
            <div className="flex-1 border-t"></div>
          </div>
          <button className="w-full bg-[#727070] text-white py-3 rounded-3xl flex items-center justify-center">
            <img
              src={logo}
              alt="Google Logo"
              className="w-5 rounded-full h-5 mr-2"
            />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
