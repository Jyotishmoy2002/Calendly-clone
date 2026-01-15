import { AvailabilityModel } from "../models/availabilityModel.js";

export const getAvailability = async (req, res, next) => {
  try {
    const { userId } = req.params;
    
    // Using the model to fetch rows
    const rows = await AvailabilityModel.getByUser(userId);

    // Return the data to the frontend
    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    next(error); // Sends error to your global errorHandler
  }
};