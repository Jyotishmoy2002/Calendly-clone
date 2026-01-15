import { useState } from "react";
import api from "../api/axios";
import Navbar from "../components/common/Navbar";

const Availability = () => {
  const [availability, setAvailability] = useState([
    { day: "Monday", start: "09:00", end: "17:00" },
    { day: "Tuesday", start: "09:00", end: "17:00" },
    { day: "Wednesday", start: "09:00", end: "17:00" }
  ]);

  const updateField = (index, field, value) => {
    const updated = [...availability];
    updated[index][field] = value;
    setAvailability(updated);
  };

  const saveAvailability = async () => {
    try {
      await api.post("/availability", {
        userId: 1,
        availability
      });
      alert("Availability saved successfully!");
    } catch (error) {
      console.error("Error saving availability:", error);
    }
  };

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="container" style={{ maxWidth: '700px' }}>
      <Navbar />
      
      <div style={{ marginBottom: '32px' }}>
        <h1>Availability</h1>
        <h2 style={{ fontSize: '16px', fontWeight: '400' }}>
          Set your default hours so people know when you are free.
        </h2>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Weekly Hours</h3>
        
        {availability.map((slot, index) => (
          <div 
            key={index} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px', 
              padding: '16px 0', 
              borderBottom: index !== availability.length - 1 ? '1px solid #f0f0f0' : 'none' 
            }}
          >
            {/* Day Selector */}
            <div style={{ flex: '1' }}>
              <select
                value={slot.day}
                onChange={(e) => updateField(index, "day", e.target.value)}
                style={{ margin: 0 }}
              >
                {daysOfWeek.map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>

            {/* Time Inputs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '2' }}>
              <input
                type="time"
                value={slot.start}
                onChange={(e) => updateField(index, "start", e.target.value)}
                style={{ margin: 0, width: '140px' }}
              />
              <span style={{ color: 'var(--text-muted)' }}>–</span>
              <input
                type="time"
                value={slot.end}
                onChange={(e) => updateField(index, "end", e.target.value)}
                style={{ margin: 0, width: '140px' }}
              />
            </div>

            {/* Action Button */}
            <button 
              style={{ background: 'none', border: 'none', color: '#ff4d4f', cursor: 'pointer', fontSize: '20px' }}
              onClick={() => {
                const updated = availability.filter((_, i) => i !== index);
                setAvailability(updated);
              }}
            >
              ×
            </button>
          </div>
        ))}

        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button 
            className="btn-outline" 
            onClick={() => setAvailability([...availability, { day: "Monday", start: "09:00", end: "17:00" }])}
          >
            + Add New Slot
          </button>
          
          <button className="btn-primary" onClick={saveAvailability}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Availability;