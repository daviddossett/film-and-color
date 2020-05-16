const currentWeekday = new Date().getDay();
const currentDayOfMonth = new Date().getDate().toString();
const currentMonth = new Date().getMonth()
const currentYear = new Date().getFullYear().toString()

const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const currentDate = `${weekday[currentWeekday]} ${month[currentMonth]} ${currentDayOfMonth} ${currentYear}`;
