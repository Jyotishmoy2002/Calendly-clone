export const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0];
};

export const getDayName = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long"
  });
};

export const addMinutes = (time, minutes) => {
  const [hours, mins] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, mins + minutes);

  return date.toTimeString().slice(0, 5);
};
