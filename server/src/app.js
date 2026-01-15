import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import availabilityRoutes from "./routes/availabilityRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

app.use("/api/availability", availabilityRoutes);
app.use("/api/bookings", bookingRoutes);
app.use(errorHandler);


const app = express();

app.use(cors());
app.use(express.json());

export default app;
