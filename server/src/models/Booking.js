import { db } from "../config/db.js";

export const BookingModel = {
  create: async ({ eventId, date, time, name, email }) => {
    const [result] = await db.query(
      `INSERT INTO bookings
       (event_id, booking_date, booking_time, invitee_name, invitee_email)
       VALUES (?, ?, ?, ?, ?)`,
      [eventId, date, time, name, email]
    );
    return result.insertId;
  },

  isSlotBooked: async (eventId, date, time) => {
    const [rows] = await db.query(
      `SELECT id FROM bookings
       WHERE event_id = ? AND booking_date = ? AND booking_time = ?`,
      [eventId, date, time]
    );
    return rows.length > 0;
  },

  getUpcoming: async () => {
    const [rows] = await db.query(
      `SELECT * FROM bookings
       WHERE booking_date >= CURDATE()
       ORDER BY booking_date, booking_time`
    );
    return rows;
  }
};
