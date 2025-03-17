import { Routes, Route } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Home from "../pages/client/Home";
// import About from "../pages/client/About";
// import Contact from "../pages/client/Contact";
// import NotFound from "../pages/NotFound";
// import PropertyListing from "./PropertyListing"
import Clientmain from "./Clientmain";

const ClientLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Clientmain />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
        
      </Routes>
    </div>
  );
};

export default ClientLayout;
