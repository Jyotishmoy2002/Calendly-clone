import { BookingModel } from "../models/bookingModel.js";

export const createBooking = async (req, res, next) => {
  try {
    const { eventId, date, time, name, email } = req.body;

    // 1. Check for conflicts using the model
    const alreadyBooked = await BookingModel.isSlotBooked(eventId, date, time);
    if (alreadyBooked) {
      return res.status(400).json({ message: "This slot is already taken." });
    }

    // 2. Create the booking
    const bookingId = await BookingModel.create({ eventId, date, time, name, email });

    res.status(201).json({ 
      success: true, 
      message: "Booking confirmed!", 
      bookingId 
    });
  } catch (error) {
    next(error); // Sends to global errorHandler
  }
};

export const getUpcomingMeetings = async (req, res, next) => {
  try {
    const meetings = await BookingModel.getUpcoming();
    res.json({ success: true, data: meetings });
  } catch (error) {
    next(error);
  }
};