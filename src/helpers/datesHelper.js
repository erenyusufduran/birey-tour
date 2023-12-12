const months = Object.freeze({
  OCAK: 1,
  ŞUBAT: 2,
  MART: 3,
  NİSAN: 4,
  MAYIS: 5,
  HAZİRAN: 6,
  TEMMUZ: 7,
  AĞUSTOS: 8,
  EYLÜL: 9,
  EKİM: 10,
  KASIM: 11,
  ARALIK: 12,
});

const analyzeDate = (_date) => {
  const date = _date.toUpperCase().split(' ');
  date[1] = months[date[1]];
  const newDate = `${date[1]}/${date[0]}/${date[2]}`;

  const currentDate = Date.now();
  const tourDate = new Date(newDate);

  if (currentDate > tourDate) {
    return false;
  }
  return true;
};

/*
 * @param: dates is an array with this format (17 ARALIK 2023)
 */
export const filterDates = (_dates) => {
  const dates = _dates.filter((date) => analyzeDate(date));
  return dates;
};
