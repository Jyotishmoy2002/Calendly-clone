import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <Navbar />

      {/* Header Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '40px',
        padding: '20px 0',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div>
          <h1 style={{ margin: 0 }}>Dashboard</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
            Welcome back! Here’s what’s happening with your schedule.
          </p>
        </div>
        <Link to="/event-types" className="btn-primary" style={{ textDecoration: 'none' }}>
          + Create Event
        </Link>
      </div>

      {/* Quick Stats / Overview Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px' 
      }}>
        
        {/* Card 1: Availability Quick Link */}
        <div className="card">
          <div style={{ fontSize: '24px', marginBottom: '16px' }}>📅</div>
          <h3>Availability</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>
            Configure your working hours and buffer times.
          </p>
          <Link to="/availability" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Edit Schedule
          </Link>
        </div>

        {/* Card 2: Event Types Quick Link */}
        <div className="card">
          <div style={{ fontSize: '24px', marginBottom: '16px' }}>🔗</div>
          <h3>Event Types</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>
            Manage your one-on-one and group meeting types.
          </p>
          <Link to="/event-types" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>
            View Events
          </Link>
        </div>

        {/* Card 3: Meetings Quick Link */}
        <div className="card">
          <div style={{ fontSize: '24px', marginBottom: '16px' }}>👥</div>
          <h3>Upcoming Meetings</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>
            Check your schedule for today and the coming week.
          </p>
          <Link to="/meetings" className="btn-outline" style={{ textDecoration: 'none', display: 'inline-block' }}>
            View Calendar
          </Link>
        </div>

      </div>

      {/* Recent Activity Section placeholder */}
      <div style={{ marginTop: '60px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Recent Activity</h2>
        <div className="card" style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
          <p>No recent bookings to show. Share your link to get started!</p>
          <button className="btn-outline" style={{ marginTop: '16px' }}>Copy Global Link</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;