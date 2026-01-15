import { db } from "../config/db.js";

export const EventModel = {
  create: async ({ userId, name, duration, slug }) => {
    const [result] = await db.query(
      `INSERT INTO events (user_id, name, duration, slug)
       VALUES (?, ?, ?, ?)`,
      [userId, name, duration, slug]
    );
    return result.insertId;
  },

  findBySlug: async (slug) => {
    const [rows] = await db.query(
      "SELECT * FROM events WHERE slug = ?",
      [slug]
    );
    return rows[0];
  },

  findAllByUser: async (userId) => {
    const [rows] = await db.query(
      "SELECT * FROM events WHERE user_id = ?",
      [userId]
    );
    return rows;
  }
};
