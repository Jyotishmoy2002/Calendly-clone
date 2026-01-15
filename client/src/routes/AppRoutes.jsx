import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import EventTypes from "../pages/EventTypes";
import Availability from "../pages/Availability";
import Meetings from "../pages/Meetings";
import PublicBooking from "../pages/PublicBooking";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/events" element={<EventTypes />} />
      <Route path="/availability" element={<Availability />} />
      <Route path="/meetings" element={<Meetings />} />
      <Route path="/book/:slug" element={<PublicBooking />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
