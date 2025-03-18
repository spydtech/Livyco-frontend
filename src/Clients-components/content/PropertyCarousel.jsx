// import { useRef, useEffect } from "react";
// import { FaHeart, FaShareAlt } from "react-icons/fa";

// const properties = [
//   { id: 1, img: "/property1.jpg", price: "₹4,599", rating: 5 },
//   { id: 2, img: "/property2.jpg", price: "₹4,599", rating: 5 },
//   { id: 3, img: "/property3.jpg", price: "₹4,599", rating: 5 },
//   { id: 4, img: "/property4.jpg", price: "₹4,599", rating: 5 },
//   { id: 5, img: "/property5.jpg", price: "₹4,599", rating: 5 },
//   { id: 6, img: "/property6.jpg", price: "₹4,599", rating: 5 },
// ];
// export default function PropertyCarousel() {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scrollInterval = setInterval(() => {
//       if (scrollRef.current) {
//         scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
//       }
//     }, 2000);

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div className="bg-gray-900 text-white py-8 mt-96">
//       <h2 className="text-center text-2xl font-bold mb-6">
//         Recently Listed Properties
//       </h2>
//       <div
//         ref={scrollRef}
//         className="flex overflow-x-auto cursor-pointer scrollbar-none snap-x space-x-4 px-4 mx-10 scroll-smooth"
//       >
//         {properties.map((property) => (
//           <div
//             key={property.id}
//             className="bg-white text-black p-4 rounded-lg shadow-lg w-80 flex-shrink-0 snap-start"
//           >
//             <div className="relative">
//               <img
//                 src={property.img}
//                 alt="Property"
//                 className="w-full h-40 rounded-lg object-cover"
//               />
//               <div className="absolute top-2 right-2 flex space-x-2">
//                 <FaShareAlt className="text-gray-600 cursor-pointer" />
//                 <FaHeart className="text-gray-600 cursor-pointer" />
//               </div>
//             </div>
//             <h3 className="font-semibold mt-3">
//               Hic doloremque odit sunt nulla et sed.
//             </h3>
//             <p className="text-sm text-gray-500">
//               Address Hic doloremque odit sunt...
//             </p>
//             <p className="text-lg font-bold">{property.price}</p>
//             <div className="flex space-x-1 text-yellow-400">
//               {"★".repeat(property.rating)}
//             </div>
//             <p className="mt-2 text-sm text-gray-600">Amenities</p>
//             <div className="flex space-x-2 mt-1">
//               <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
//               <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
//               <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
//               <span className="text-sm text-gray-500">+5 more</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useRef, useEffect, useState } from "react";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    img: "https://s3-alpha-sig.figma.com/img/c719/d587/b2496382eeb5bdc92c1e2505c667fdb2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b1FkMKhTo66rc61wOfJtbQBzuEVAJdoDp~aTlGrK2IdHOQHUtxymePbdmGsn07qY-YKD8Vku0kpg1-GlK63SeydT-mB9FneSOQvlc0k7GdlAk~R-I8V~DzTpn-T3ikeniAdkpSM7NNKGjQjXvTu8qEIeD5Fd7rVRnt0WcVvclRlsJ1TRFpS9~ZimB9cxWFqAOaX5WdfAs~H~heYmV~t32ulk1K4bCyiHjwoT1l-deI6ifbw0kh~rumO6rZk7SxY15N0SA848S-TMjaHjmd8ZUHhKe-dl9bjpj6Xs55b49py380usfcC5GWq92XZ4dl7cUcaxYSIXx2yVmK9Ibuli1w__",
    price: "₹4,599",
    rating: 5,
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/c719/d587/b2496382eeb5bdc92c1e2505c667fdb2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b1FkMKhTo66rc61wOfJtbQBzuEVAJdoDp~aTlGrK2IdHOQHUtxymePbdmGsn07qY-YKD8Vku0kpg1-GlK63SeydT-mB9FneSOQvlc0k7GdlAk~R-I8V~DzTpn-T3ikeniAdkpSM7NNKGjQjXvTu8qEIeD5Fd7rVRnt0WcVvclRlsJ1TRFpS9~ZimB9cxWFqAOaX5WdfAs~H~heYmV~t32ulk1K4bCyiHjwoT1l-deI6ifbw0kh~rumO6rZk7SxY15N0SA848S-TMjaHjmd8ZUHhKe-dl9bjpj6Xs55b49py380usfcC5GWq92XZ4dl7cUcaxYSIXx2yVmK9Ibuli1w__",
    price: "₹4,599",
    rating: 5,
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/c719/d587/b2496382eeb5bdc92c1e2505c667fdb2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b1FkMKhTo66rc61wOfJtbQBzuEVAJdoDp~aTlGrK2IdHOQHUtxymePbdmGsn07qY-YKD8Vku0kpg1-GlK63SeydT-mB9FneSOQvlc0k7GdlAk~R-I8V~DzTpn-T3ikeniAdkpSM7NNKGjQjXvTu8qEIeD5Fd7rVRnt0WcVvclRlsJ1TRFpS9~ZimB9cxWFqAOaX5WdfAs~H~heYmV~t32ulk1K4bCyiHjwoT1l-deI6ifbw0kh~rumO6rZk7SxY15N0SA848S-TMjaHjmd8ZUHhKe-dl9bjpj6Xs55b49py380usfcC5GWq92XZ4dl7cUcaxYSIXx2yVmK9Ibuli1w__",
    price: "₹4,599",
    rating: 5,
  },
  {
    id: 4,
    img: "https://s3-alpha-sig.figma.com/img/c719/d587/b2496382eeb5bdc92c1e2505c667fdb2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b1FkMKhTo66rc61wOfJtbQBzuEVAJdoDp~aTlGrK2IdHOQHUtxymePbdmGsn07qY-YKD8Vku0kpg1-GlK63SeydT-mB9FneSOQvlc0k7GdlAk~R-I8V~DzTpn-T3ikeniAdkpSM7NNKGjQjXvTu8qEIeD5Fd7rVRnt0WcVvclRlsJ1TRFpS9~ZimB9cxWFqAOaX5WdfAs~H~heYmV~t32ulk1K4bCyiHjwoT1l-deI6ifbw0kh~rumO6rZk7SxY15N0SA848S-TMjaHjmd8ZUHhKe-dl9bjpj6Xs55b49py380usfcC5GWq92XZ4dl7cUcaxYSIXx2yVmK9Ibuli1w__",
    price: "₹4,599",
    rating: 5,
  },
  {
    id: 5,
    img: "https://s3-alpha-sig.figma.com/img/c719/d587/b2496382eeb5bdc92c1e2505c667fdb2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b1FkMKhTo66rc61wOfJtbQBzuEVAJdoDp~aTlGrK2IdHOQHUtxymePbdmGsn07qY-YKD8Vku0kpg1-GlK63SeydT-mB9FneSOQvlc0k7GdlAk~R-I8V~DzTpn-T3ikeniAdkpSM7NNKGjQjXvTu8qEIeD5Fd7rVRnt0WcVvclRlsJ1TRFpS9~ZimB9cxWFqAOaX5WdfAs~H~heYmV~t32ulk1K4bCyiHjwoT1l-deI6ifbw0kh~rumO6rZk7SxY15N0SA848S-TMjaHjmd8ZUHhKe-dl9bjpj6Xs55b49py380usfcC5GWq92XZ4dl7cUcaxYSIXx2yVmK9Ibuli1w__",
    price: "₹4,599",
    rating: 5,
  },
  {
    id: 6,
    img: "https://s3-alpha-sig.figma.com/img/c719/d587/b2496382eeb5bdc92c1e2505c667fdb2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b1FkMKhTo66rc61wOfJtbQBzuEVAJdoDp~aTlGrK2IdHOQHUtxymePbdmGsn07qY-YKD8Vku0kpg1-GlK63SeydT-mB9FneSOQvlc0k7GdlAk~R-I8V~DzTpn-T3ikeniAdkpSM7NNKGjQjXvTu8qEIeD5Fd7rVRnt0WcVvclRlsJ1TRFpS9~ZimB9cxWFqAOaX5WdfAs~H~heYmV~t32ulk1K4bCyiHjwoT1l-deI6ifbw0kh~rumO6rZk7SxY15N0SA848S-TMjaHjmd8ZUHhKe-dl9bjpj6Xs55b49py380usfcC5GWq92XZ4dl7cUcaxYSIXx2yVmK9Ibuli1w__",
    price: "₹4,599",
    rating: 5,
  },
];

export default function PropertyCarousel() {
  const scrollRef = useRef(null);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      const contentWidth = scrollRef.current.scrollWidth;
      setMaxScrollWidth(containerWidth - contentWidth);
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white mt-96 py-8">
      <h2 className="text-center text-2xl font-bold mb-6">
        Recently Listed Properties
      </h2>
      <div className="overflow-hidden px-4">
        <motion.div
          ref={scrollRef}
          className="flex cursor-grab space-x-4"
          drag="x"
          dragConstraints={{ left: maxScrollWidth, right: 0 }}
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              className="bg-white text-black p-4 rounded-lg shadow-lg w-80 flex-shrink-0"
            >
              <div className="relative">
                <img
                  src={property.img}
                  alt="Property"
                  className="w-full h-40 rounded-lg object-cover"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <FaShareAlt className="text-gray-600 cursor-pointer" />
                  <FaHeart className="text-gray-600 cursor-pointer" />
                </div>
              </div>
              <h3 className="font-semibold mt-3">
                Hic doloremque odit sunt nulla et sed.
              </h3>
              <p className="text-sm text-gray-500">
                Address Hic doloremque odit sunt...
              </p>
              <p className="text-lg font-bold">{property.price}</p>
              <div className="flex space-x-1 text-yellow-400">
                {"★".repeat(property.rating)}
              </div>
              <p className="mt-2 text-sm text-gray-600">Amenities</p>
              <div className="flex space-x-10 mt-1">
                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                <span className="text-sm text-gray-500">+5 more</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
