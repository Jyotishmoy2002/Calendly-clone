export const createBooking = async (req, res) => {
  const { eventId, date, time, name, email } = req.body;

  const [existing] = await db.query(
    "SELECT * FROM bookings WHERE event_id=? AND date=? AND time=?",
    [eventId, date, time]
  );

  if (existing.length > 0) {
    return res.status(400).json({ message: "Slot already booked" });
  }

  await db.query(
    "INSERT INTO bookings (event_id, date, time, name, email) VALUES (?, ?, ?, ?, ?)",
    [eventId, date, time, name, email]
  );

  res.status(201).json({ message: "Booking confirmed" });
};
