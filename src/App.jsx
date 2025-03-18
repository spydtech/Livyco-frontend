import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLayout from "./Clients-components/main/ClientLayout";

function App() {
  return (
    <Router>
      {/* <Navbar /> Common Navbar Component */}
      <Routes>
        {/* Client Routes */}
        <Route path="/*" element={<ClientLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
