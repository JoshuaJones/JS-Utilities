function getDates(startDate, stopDate) {
  let dateArray = [];
  let currentDate = startDate;

    while (currentDate <= stopDate) {
        dateArray.push( new Date (currentDate) )
        currentDate = incrementDay(currentDate);
    }
    return dateArray;
}

function incrementDay(date) {
  let day = new Date(date);

  day.setDate(day.getDate() + 1);
  return day;
}