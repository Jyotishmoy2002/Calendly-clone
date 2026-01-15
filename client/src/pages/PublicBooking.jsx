import { useParams } from "react-router-dom";
import MonthCalendar from "../components/calendar/MonthCalendar";
import BookingForm from "../components/booking/BookingForm";

const PublicBooking = () => {
  const { slug } = useParams();

  return (
    <div>
      <h2>Book a Meeting</h2>
      <MonthCalendar eventSlug={slug} />
      <BookingForm eventSlug={slug} />
    </div>
  );
};

export default PublicBooking;
