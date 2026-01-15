import { db } from "../config/db.js";

export const AvailabilityModel = {
  getByUser: async (userId) => {
    const [rows] = await db.query(
      "SELECT * FROM availability WHERE user_id = ?",
      [userId]
    );
    return rows;
  }
};
