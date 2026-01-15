import { EventModel } from "../models/eventModel.js";

export const getEvents = async (req, res, next) => {
  try {
    const userId = 1; // Demo User ID
    const events = await EventModel.findAllByUser(userId);
    res.json(events);
  } catch (error) {
    next(error); // Passes to your global errorHandler
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const { name, duration, slug } = req.body;
    const userId = 1; 

    const eventId = await EventModel.create({ userId, name, duration, slug });
    res.status(201).json({ success: true, eventId });
  } catch (error) {
    next(error);
  }
};