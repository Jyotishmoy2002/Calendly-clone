import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "15px" }}>
      <Link to="/">Dashboard</Link>
      <Link to="/events">Event Types</Link>
      <Link to="/availability">Availability</Link>
      <Link to="/meetings">Meetings</Link>
    </nav>
  );
};

export default Navbar;
