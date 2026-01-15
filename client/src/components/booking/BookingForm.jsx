import { useState } from "react";
import api from "../../api/axios";

const BookingForm = ({ eventSlug }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/bookings", {
      eventId: 1,
      date: form.date,
      time: form.time,
      name: form.name,
      email: form.email
    });

    alert("Booking Confirmed");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter Details</h3>

      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        onChange={handleChange}
        required
      />

      <input
        name="date"
        type="date"
        onChange={handleChange}
        required
      />

      <input
        name="time"
        type="time"
        onChange={handleChange}
        required
      />

      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
