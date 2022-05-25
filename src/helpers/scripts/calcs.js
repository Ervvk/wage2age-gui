export const countDays = (date) => {
  const currentDate = new Date(Date.now());
  const argDate = new Date(date);

  if (currentDate < argDate) return -1;
  const timeDifference = currentDate.getTime() - argDate.getTime();

  return (timeDifference / (1000 * 3600 * 24)).toFixed(0);
};
