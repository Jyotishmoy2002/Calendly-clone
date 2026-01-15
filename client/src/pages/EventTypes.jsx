import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/common/Navbar";

const EventTypes = () => {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    api.get("/events").then((res) => setEvents(res.data));
  }, []);

  const createEvent = async () => {
    await api.post("/events", {
      userId: 1,
      name,
      duration,
      slug: name.toLowerCase().replace(/\s+/g, "-")
    });
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <h1>Event Types</h1>

      <input
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Duration (minutes)"
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <button onClick={createEvent}>Create Event</button>

      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name} ({event.duration} mins)
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventTypes;
