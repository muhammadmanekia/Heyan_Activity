const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekDayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const weekDayAbbr = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var weekDates = [];
var weekMonths = [];

function WeekDates() {
  const today = new Date();
  const thisDate = today.getDate();
  const thisMonth = today.getMonth();
  const thisDay = today.getDay();

  for (var i = 1; i < 8; i++) {
    today.setDate(thisDate - thisDay + i);
    weekDates.push(today.getDate());
    weekMonths.push(today.getMonth());
  }

  console.log(weekDates);
}

function generateMatrix() {
  const thisDate = new Date();
  var matrix = [];
  matrix[0] = weekDayAbbr;

  var year = thisDate.getFullYear();
  var month = thisDate.getMonth();

  var firstDay = new Date(year, month, 1).getDay();

  var maxDays = nDays[month];
  if (month == 1) {
    // February
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      maxDays += 1;
    }
  }

  var counter = 1;
  for (var row = 1; row < 7; row++) {
    matrix[row] = [];
    for (var col = 0; col < 7; col++) {
      matrix[row][col] = -1;
      if (row == 1 && col >= firstDay) {
        // Fill in rows only after the first day of the month
        matrix[row][col] = counter++;
      } else if (row > 1 && counter <= maxDays) {
        // Fill in rows only if the counter's not greater than
        // the number of days in the month
        matrix[row][col] = counter++;
      }
    }
  }

  return matrix;
}
const matrix = generateMatrix();
WeekDates();

export {weekDates, weekMonths, weekDayNames, monthNames, nDays, matrix};
