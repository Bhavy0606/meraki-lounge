import { Route, Routes } from "react-router-dom";
import "./app.scss";
import HomeLayout from "./layout/homeLayout";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Services from "./pages/services";
import Shop from "./pages/shop";
import StylistsPage from "./pages/stylists";
import Classes from "./pages/classes";
function App() {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/stylists" element={<StylistsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </HomeLayout>
  );
}

export default App;
