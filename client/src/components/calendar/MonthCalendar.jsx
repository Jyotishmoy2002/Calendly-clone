import { useEffect, useState } from "react";
import api from "../../api/axios";

const MonthCalendar = ({ eventSlug }) => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const today = new Date();
    const next14Days = [];

    for (let i = 0; i < 14; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      next14Days.push(d.toISOString().split("T")[0]);
    }

    setDates(next14Days);
  }, []);

  return (
    <div>
      <h3>Select a Date</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
          >
            {date}
          </button>
        ))}
      </div>

      {selectedDate && (
        <p>Selected Date: {selectedDate}</p>
      )}
    </div>
  );
};

export default MonthCalendar;
