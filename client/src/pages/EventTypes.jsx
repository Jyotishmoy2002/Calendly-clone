import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/common/Navbar";

const EventTypes = () => {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    api.get("/events").then((res) => setEvents(res.data));
  }, []);

  const createEvent = async () => {
    if (!name || !duration) return alert("Please fill in all fields");
    
    await api.post("/events", {
      userId: 1,
      name,
      duration,
      slug: name.toLowerCase().replace(/\s+/g, "-")
    });
    window.location.reload();
  };

  return (
    <div className="container">
      <Navbar />

      {/* Header Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '32px' 
      }}>
        <div>
          <h1 style={{ margin: 0 }}>Event Types</h1>
          <p style={{ color: 'var(--text-muted)' }}>Manage your booking links and meeting durations.</p>
        </div>
        <button 
          className="btn-primary" 
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "+ New Event Type"}
        </button>
      </div>

      {/* Create Event Form (Card Style) */}
      {showForm && (
        <div className="card" style={{ marginBottom: '32px', maxWidth: '500px' }}>
          <h3 style={{ marginBottom: '16px' }}>Create New Event</h3>
          <input
            placeholder="Event Name (e.g. 30 Minute Meeting)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Duration (minutes)"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <button className="btn-primary" style={{ width: '100%' }} onClick={createEvent}>
            Create Event Type
          </button>
        </div>
      )}

      {/* Events Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '24px' 
      }}>
        {events.map((event) => (
          <div key={event.id} className="card" style={{ 
            borderTop: `8px solid var(--primary-color)`, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            height: '200px'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '20px', margin: 0 }}>{event.name}</h3>
                <span style={{ fontSize: '18px', cursor: 'pointer', color: 'var(--text-muted)' }}>⚙️</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '8px' }}>
                {event.duration} mins, One-on-One
              </p>
              <a 
                href={`/book/${event.slug}`} 
                style={{ color: 'var(--primary-color)', textDecoration: 'none', fontSize: '14px', fontWeight: '500', display: 'block', marginTop: '12px' }}
              >
                view.booking/me/{event.slug}
              </a>
            </div>

            <div style={{ 
              borderTop: '1px solid var(--border-color)', 
              paddingTop: '16px', 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <button className="btn-outline" style={{ fontSize: '13px', padding: '6px 12px' }}>
                Copy Link
              </button>
              <button style={{ background: 'none', border: 'none', color: 'var(--primary-color)', fontWeight: '600', cursor: 'pointer' }}>
                Share
              </button>
            </div>
          </div>
        ))}

        {/* Empty State / Add New Placeholder */}
        {!showForm && (
          <div 
            className="card" 
            onClick={() => setShowForm(true)}
            style={{ 
              border: '2px dashed var(--border-color)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer',
              color: 'var(--text-muted)',
              height: '200px',
              backgroundColor: 'transparent'
            }}
          >
            + New Event Type
          </div>
        )}
      </div>
    </div>
  );
};

export default EventTypes;