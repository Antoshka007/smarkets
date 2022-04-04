const MONTHS_MAP: Record<number, string> = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

const getTimeWithLeadZero = (n: number): string => {
  return n > 9 ? n.toString() : `0${n}`;
};

export const getFormattedDate = (
  datetime: string,
  options?: { withoutTime: boolean }
) => {
  const now = new Date();
  const [nowDay, nowMonth, nowYear] = [
    now.getDate(),
    now.getMonth(),
    now.getFullYear(),
  ];
  const date = new Date(datetime);
  const [day, month, year] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];
  const monthStr = MONTHS_MAP[month];
  const time = options?.withoutTime
    ? ''
    : ` at ${getTimeWithLeadZero(date.getHours())}:${getTimeWithLeadZero(
        date.getMinutes()
      )}`;

  if (year !== nowYear) {
    return `${day} ${monthStr} ${year}`;
  }

  if (month !== nowMonth || day !== nowDay) {
    return `${day} ${monthStr} ${year}${time}`;
  }

  return `Today${time}`;
};
