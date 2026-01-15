import express from "express";
import {
  setAvailability,
  getAvailability
} from "../controllers/availabilityController.js";

const router = express.Router();

/**
 * @route   POST /api/availability
 * @desc    Set or update weekly availability
 * @body    { userId, availability[] }
 */
router.post("/", setAvailability);

/**
 * @route   GET /api/availability/:userId
 * @desc    Get availability for a user
 */
router.get("/:userId", getAvailability);

export default router;
