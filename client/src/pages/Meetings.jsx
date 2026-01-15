import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/common/Navbar";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [activeTab, setActiveTab] = useState("upcoming");

  useEffect(() => {
    api.get("/bookings").then((res) => setMeetings(res.data));
  }, []);

  return (
    <div className="container">
      <Navbar />

      <div style={{ marginBottom: '32px' }}>
        <h1>Scheduled Events</h1>
        <p style={{ color: 'var(--text-muted)' }}>
          View and manage your upcoming and past bookings.
        </p>
      </div>

      {/* Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        borderBottom: '1px solid var(--border-color)', 
        marginBottom: '24px' 
      }}>
        {['upcoming', 'past'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: 'none',
              border: 'none',
              padding: '12px 0',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '600',
              color: activeTab === tab ? 'var(--primary-color)' : 'var(--text-muted)',
              borderBottom: activeTab === tab ? '2px solid var(--primary-color)' : '2px solid transparent',
              textTransform: 'capitalize',
              transition: 'all 0.2s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Meetings List */}
      <div className="card" style={{ padding: '0' }}>
        {meetings.length > 0 ? (
          meetings.map((meeting, index) => (
            <div 
              key={meeting.id} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                padding: '20px 24px',
                borderBottom: index !== meetings.length - 1 ? '1px solid #f0f0f0' : 'none'
              }}
            >
              {/* Date Column */}
              <div style={{ width: '120px' }}>
                <div style={{ fontWeight: '700', fontSize: '16px' }}>
                  {new Date(meeting.booking_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                  {meeting.booking_time}
                </div>
              </div>

              {/* Status/Color Indicator */}
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--primary-color)', 
                marginRight: '24px' 
              }}></div>

              {/* Invitee Info */}
              <div style={{ flex: '1' }}>
                <div style={{ fontWeight: '600', fontSize: '16px' }}>{meeting.invitee_name}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                  Event: {meeting.event_name || 'One-on-One Meeting'}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn-outline" style={{ fontSize: '13px', padding: '6px 12px' }}>
                  Details
                </button>
                <button style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--primary-color)', 
                  fontWeight: '600', 
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  Cancel
                </button>
              </div>
            </div>
          ))
        ) : (
          <div style={{ padding: '60px', textAlign: 'center', color: 'var(--text-muted)' }}>
            <p>No {activeTab} meetings found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Meetings;