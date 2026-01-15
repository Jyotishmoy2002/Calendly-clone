import { db } from "../config/db.js";

export const createEvent = async (req, res) => {
  const { name, duration, slug } = req.body;

  await db.query(
    "INSERT INTO events (name, duration, slug) VALUES (?, ?, ?)",
    [name, duration, slug]
  );

  res.status(201).json({ message: "Event created" });
};

export const getEvents = async (req, res) => {
  const [events] = await db.query("SELECT * FROM events");
  res.json(events);
};

export const deleteEvent = async (req, res) => {
  await db.query("DELETE FROM events WHERE id=?", [req.params.id]);
  res.json({ message: "Event deleted" });
};
