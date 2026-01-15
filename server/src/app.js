import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import availabilityRoutes from "./routes/availabilityRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

// 1. Initialize the app first
const app = express();

// 2. Load global middleware
app.use(cors());
app.use(express.json());

// 3. Define routes
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/availability", availabilityRoutes);
app.use("/api/bookings", bookingRoutes);

// 4. Error handler (must be last)
app.use(errorHandler);

export default app;