const BookingConfirmation = ({ details }) => {
  return (
    <div>
      <h2>Booking Confirmed</h2>
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
      <p>Date: {details.date}</p>
      <p>Time: {details.time}</p>
    </div>
  );
};

export default BookingConfirmation;
