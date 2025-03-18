import React from "react";

const WhyChooseLivyco = () => {
  return (
    <div
      className="relative flex items-center justify-center h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/6613/9d4b/c176117523b10713cf860a100a43b3fe?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lHPKIg4NcRU5G1z8s6Z9h8UhyQYGanpRSHmsEJqZJa~JmaG8PcIDGZtFEmAjfKv46Kx6n0ULnXiz0bYvSowvZE8MVI5njQL0ReHwuR8Bp5AilRdA0xDW2JH5OwsbzMCqXLd3bvRTlAO9JlK9lVmRXgPnudDNzELHvgYe7eP~v8aACMouzzrgFlaOSudRgNWbLJH0jYiRgsPibp~JS0fj0SHQ5zQl5nDPc-xunZyTGrl~YCZyVmHXKsoD3aDNMAuPHGz47VF~o85J84edE~MI5GJsInVCiHhI~4v2aFkWfFEdOIhuZevIZcH9jDfgXjv9-A0pKSzm2iHAaiJhworjTA__')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div
        id="card"
        className="absolute h-full bottom-[-20rem] bg-white shadow-lg rounded-2xl p-8 w-full max-w-5xl text-center"
      >
        <h2 className="text-xl font-semibold text-gray-800">
          Why Choose <span className="text-blue-600 font-bold">Livyco</span>?
        </h2>
        {/* Add additional content here */}
      </div>
    </div>
  );
};

export default WhyChooseLivyco;
