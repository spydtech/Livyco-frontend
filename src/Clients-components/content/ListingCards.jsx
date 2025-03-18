import React from "react";
import img1 from "../../assets/client/1.png";
import img2 from "../../assets/client/2.png";
import img3 from "../../assets/client/3.png";
function ListingCards() {
  const data = [
    {
      id: 1,
      image: img1,
      heading: "Provide property details",
      description:
        "Share the Location, Photos, Videos, and Key Details of Your Property",
    },
    {
      id: 2,
      image: img2,
      heading: "Choose your Plan",
      description: "Specify your rent expectations and pick a plan.",
    },
    {
      id: 3,
      image: img3,
      heading: "Enjoy Hassle free check-ins",
      description: "Effortless check-ins for your tenants, no hassle involved.",
    },
  ];

  return (
    <div className=" text-black p-6 flex flex-col items-center h-screen justify-center">
      <h2 className="text-2xl font-semibold mb-6">
        List your property for free in just 3 easy steps
      </h2>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 w-full max-w-4xl">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-[#bcbcbc] p-6 rounded-lg text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-[#727070] rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-400">
                {item.id}
              </span>
            </div>

            <p className="mt-4 text-lg font-bold">{item.heading}</p>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center mt-10  ">
        <div className="flex-1  border-t  border-gray-600"></div>
        <span className="px-4 text-gray-400">OR</span>
        <div className="flex-1 border-t border-gray-600"></div>
      </div>

      <button className="bg-blue-400 text-black font-semibold py-3 mt-10 px-6 rounded-lg shadow-md">
        Get help from us by giving a call on{" "}
        <span className="font-bold">+91 0000000000</span>
      </button>
    </div>
  );
}

export default ListingCards;
