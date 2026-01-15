import { db } from "../config/db.js";

/**
 * Set weekly availability for a user
 */
export const setAvailability = async (req, res, next) => {
  try {
    const { userId, availability } = req.body;
    /**
     * availability = [
     *   { day: "Monday", start: "09:00", end: "17:00" }
     * ]
     */

    await db.query("DELETE FROM availability WHERE user_id = ?", [userId]);

    for (const slot of availability) {
      await db.query(
        `INSERT INTO availability (user_id, day_of_week, start_time, end_time)
         VALUES (?, ?, ?, ?)`,
        [userId, slot.day, slot.start, slot.end]
      );
    }

    res.status(201).json({ message: "Availability updated successfully" });
  } catch (error) {
    next(error);
  }
};

/**
 * Get availability for a user
 */
export const getAvailability = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const [rows] = await db.query(
      "SELECT day_of_week, start_time, end_time FROM availability WHERE user_id = ?",
      [userId]
    );

    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    next(error);
  }
};
