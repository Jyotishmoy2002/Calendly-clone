import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItemStyle = (path) => ({
    textDecoration: "none",
    color: location.pathname === path ? "var(--primary-color)" : "var(--text-muted)",
    fontWeight: "600",
    fontSize: "15px",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "all 0.2s ease",
    borderBottom: location.pathname === path ? "2px solid var(--primary-color)" : "2px solid transparent"
  });

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "70px",
      backgroundColor: "var(--white)",
      borderBottom: "1px solid var(--border-color)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      zIndex: 1000,
      boxShadow: "0 1px 2px rgba(0,0,0,0.03)"
    }}>
      {/* Brand / Logo */}
      <Link to="/" style={{ 
        textDecoration: "none", 
        display: "flex", 
        alignItems: "center", 
        gap: "10px" 
      }}>
        <div style={{ 
          width: "32px", 
          height: "32px", 
          backgroundColor: "var(--primary-color)", 
          borderRadius: "6px" 
        }}></div>
        <span style={{ 
          fontSize: "20px", 
          fontWeight: "800", 
          color: "var(--text-main)",
          letterSpacing: "-0.5px"
        }}>
          The Schedule<span style={{ color: "var(--primary-color)" }}>.</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={navItemStyle("/")}>Dashboard</Link>
        <Link to="/event-types" style={navItemStyle("/event-types")}>Event Types</Link>
        <Link to="/availability" style={navItemStyle("/availability")}>Availability</Link>
        <Link to="/meetings" style={navItemStyle("/meetings")}>Meetings</Link>
      </div>

      {/* User Profile / Account */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div style={{ 
          width: "36px", 
          height: "36px", 
          borderRadius: "50%", 
          backgroundColor: "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "600",
          color: "var(--text-muted)"
        }}>
          JD
        </div>
        <span style={{ fontSize: "14px", fontWeight: "500", color: "var(--text-main)" }}>Account</span>
      </div>
    </nav>
  );
};

export default Navbar;