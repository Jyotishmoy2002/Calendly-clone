const TimeSlots = ({ slots, onSelect }) => {
  return (
    <div>
      <h4>Available Time Slots</h4>
      {slots.length === 0 && <p>No slots available</p>}

      {slots.map((time) => (
        <button
          key={time}
          onClick={() => onSelect(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSlots;
