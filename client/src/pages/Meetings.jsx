import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/common/Navbar";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    api.get("/bookings").then((res) => setMeetings(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <h1>Upcoming Meetings</h1>

      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            {meeting.booking_date} at {meeting.booking_time} –{" "}
            {meeting.invitee_name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Meetings;
