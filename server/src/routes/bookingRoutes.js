import express from "express";
import { createBooking } from "../controllers/bookingController.js";

const router = express.Router();

/**
 * @route   POST /api/bookings
 * @desc    Create a booking (public endpoint)
 * @body    { eventId, date, time, name, email }
 */
router.post("/", createBooking);

export default router;
