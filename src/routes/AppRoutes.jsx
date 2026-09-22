import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Services from "../pages/Service/Service";
import ServiceDetails from "../pages/ServiceDetails/serviceDetails";
import Booking from "../pages/Booking/Booking";
function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route path="/services" element={<Services />} />

      <Route path="/services/:serviceId" element={<ServiceDetails />} />

      {/* Pages will be added here */}

      <Route path="/booking" element={<Booking />} />
      {/* 
      <Route path="/login" element={<Login />} />
      */}
    </Routes>
  );
}

export default AppRoutes;
