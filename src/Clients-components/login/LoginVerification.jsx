import { useState } from "react";
import otpimg from "../../assets/client/otp.png";
const LoginVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input field
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 4) {
      setError("Please enter a valid 4-digit OTP");
    } else {
      setError("");
      alert("OTP Verified!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0827b2]">
      <div className="flex items-center justify-center w-full  p-6">
        <div className="w-[40%] hidden md:flex items-center justify-center p-6">
          <img
            src={otpimg}
            alt="Reception Area"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="bg-white p-10 rounded-lg shadow-lg w-[35%] text-center">
          <h2 className="text-2xl text-start font-semibold mb-6">
            Welcome Back!
          </h2>
          <p className="text-lg font-medium">OTP Verification</p>
          <p className="text-sm text-gray-600 mb-5">
            Enter 4-digit OTP sent to +91 9999999999
            <span className="text-blue-500 cursor-pointer ml-2">✎</span>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-3 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-12 h-12 text-center border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <p className="text-xs mb-3">
              By signing up, you agree to our
              <span className="text-blue-500 cursor-pointer">
                {" "}
                Terms of Use{" "}
              </span>
              and
              <span className="text-blue-500 cursor-pointer">
                {" "}
                Privacy Policy
              </span>
            </p>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-3xl font-semibold"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginVerification;
