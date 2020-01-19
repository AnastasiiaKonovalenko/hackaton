import React from 'react';

const MonthDates = ({ month, year,
  monthNames,
  daysInMonth,
  firstOfMonth,
  startDay,
  onSelect,
  weekNumbers,
  disablePast,
  minDate }) => {

  // let  datesInMoth = Array.from(Array(daysInMonth(year, month)), (el, i) => i+1);


  return (
    <div>
      {monthNames.map((item, i) => <div>{Array.from(Array(daysInMonth(year, i)), (el, i) => i+1)}</div>)}
    </div>
  );
};

export default MonthDates;
