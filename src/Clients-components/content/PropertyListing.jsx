import React from "react";

const PropertyListing = () => {
  return (
    <div className="flex min-h-screen bg-[#0827b2] text-white p-6 md:p-12">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="text-yellow-400 text-lg font-bold mb-2">Livyco</div>
        <h1 className="text-3xl font-semibold mb-4">For Property Owners</h1>
        <p className="text-lg mb-6">
          List out your{" "}
          <span className="text-yellow-400 font-semibold">PG</span> for free
          with
          <span className="text-yellow-400 font-semibold"> Livyco</span>
        </p>
        <div className="flex bg-blue-950 p-4 rounded-lg w-fit">
          <div className="mr-6">
            <p className="font-bold">no 1</p>
            <p className="text-sm">Trusted platform</p>
          </div>
          <div className="mr-6">
            <p className="font-bold">n+</p>
            <p className="text-sm">Owners</p>
          </div>
          <div>
            <p className="font-bold">n+</p>
            <p className="text-sm">Tenants</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Let’s set things up!</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-600">
              Are you a registered user?{" "}
              <span className="text-blue-600 cursor-pointer">Login</span>
            </p>
            <button className="w-full bg-yellow-400 text-black p-3 rounded-md font-semibold">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
