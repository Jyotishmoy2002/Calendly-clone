import { db } from "../config/db.js";

export const UserModel = {
  findById: async (id) => {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    return rows[0];
  }
};
