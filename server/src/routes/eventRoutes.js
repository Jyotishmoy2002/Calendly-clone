import { db } from "../config/db.js";

/**
 * FETCH all events for the dashboard
 */
export const getEvents = async (req, res) => {
  try {
    const [events] = await db.query("SELECT * FROM events");
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * CREATE a new meeting type
 */
export const createEvent = async (req, res) => {
  try {
    const { name, duration, slug } = req.body;
    const userId = 1; // Default ID from your SQL 'users' insert

    await db.query(
      "INSERT INTO events (user_id, name, duration, slug) VALUES (?, ?, ?, ?)",
      [userId, name, duration, slug]
    );

    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * DELETE an event type
 */
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM events WHERE id = ?", [id]);
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};