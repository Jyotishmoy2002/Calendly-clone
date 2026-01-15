import { useState } from "react";
import api from "../api/axios";
import Navbar from "../components/common/Navbar";

const Availability = () => {
  const [availability, setAvailability] = useState([
    { day: "Monday", start: "09:00", end: "17:00" }
  ]);

  const saveAvailability = async () => {
    await api.post("/availability", {
      userId: 1,
      availability
    });

    alert("Availability saved");
  };

  return (
    <>
      <Navbar />
      <h1>Availability</h1>

      {availability.map((slot, index) => (
        <div key={index}>
          <select
            value={slot.day}
            onChange={(e) => {
              const updated = [...availability];
              updated[index].day = e.target.value;
              setAvailability(updated);
            }}
          >
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ].map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>

          <input
            type="time"
            value={slot.start}
            onChange={(e) => {
              const updated = [...availability];
              updated[index].start = e.target.value;
              setAvailability(updated);
            }}
          />

          <input
            type="time"
            value={slot.end}
            onChange={(e) => {
              const updated = [...availability];
              updated[index].end = e.target.value;
              setAvailability(updated);
            }}
          />
        </div>
      ))}

      <button onClick={saveAvailability}>Save</button>
    </>
  );
};

export default Availability;
