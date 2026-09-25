import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Services from "../pages/Service/Service";
import ServiceDetails from "../pages/ServiceDetails/serviceDetails";
import Booking from "../pages/Booking/Booking";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/SIgnup";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import MyCars from "../pages/MyCars/MyCars";
import ServiceHistory from "../pages/ServiceHistory/ServiceHistory";
import Notifications from "../pages/Notifications/Notifications";
import Profile from "../pages/Profile/Profile";
import RoadsideAssistance from "../pages/RoadsideAssistance/RoadsideAssistance";
import Payment from "../pages/Payment/Payment";
import Reviews from "../pages/Reviews/Reviews";
import Bookings from "../pages/Bookings/Bookings";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminBookings from "../pages/AdminBookings/AdminBookings";
import AdminCustomers from "../pages/AdminCustomers/AdminCustomers";
import AdminServices from "../pages/AdminServices/AdminServices";
import AdminMechanics from "../pages/AdminMechanics/AdminMechanics";
import AdminVehicles from "../pages/AdminVehicles/AdminVehicles";
import AdminReviews from "../pages/AdminReviews/AdminReviews";
import AdminRoadside from "../pages/AdminRoadside/AdminRoadside";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Pricing from "../pages/Pricing/Pricing";
import Locations from "../pages/Locations/Locations";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import FAQ from "../pages/FAQ/FAQ";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:serviceId" element={<ServiceDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/my-cars" element={<MyCars />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/service-history" element={<ServiceHistory />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/roadside-assistance" element={<RoadsideAssistance />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/bookings" element={<AdminBookings />} />
      <Route path="/admin/customers" element={<AdminCustomers />} />
      <Route path="/admin/services" element={<AdminServices />} />
      <Route path="/admin/mechanics" element={<AdminMechanics />} />
      <Route path="/admin/vehicles" element={<AdminVehicles />} />
      <Route path="/admin/reviews" element={<AdminReviews />} />
      <Route path="/admin/roadside" element={<AdminRoadside />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}

export default AppRoutes;
