import React from 'react';
const days = Array.from(Array(31), (el, i) => i+1);
const  monthNames = [
  {id:0,nameMonth:"January"},
  {id:1,nameMonth:"February"},
  {id:2,nameMonth:"March"},
  {id:3,nameMonth:"April"},
  {id:4,nameMonth:"May"},
  {id:5,nameMonth:"June"},
  {id:6,nameMonth:"July"},
  {id:7,nameMonth:"August"},
  {id:8,nameMonth:"September"},
  {id:9,nameMonth:"October"},
  {id:10,nameMonth:"November"},
  {id:11,nameMonth:"December"}
];

// const days = {
//   "sun": 0,
//   "mon": 1,
//   "tue": 2,
//   "wed": 3,
//   "thu": 4,
//   "fri": 5,
//   "sat": 6,
// };

const OneMonth = () => {

  const amount = (month, year) =>{
    return new Date(year, month, 0).getDate();
  };
  let d = new Date();
  let x = d.getFullYear();

  const lastdayOfPrevMonth  = new Date(x, d.getMonth(), 0).getDate();
  const day  = new Date(x, d.getMonth(), 1).getDay();
  let count;

  if (day === 0) {
    count = 6;
  }
  count = day - 1;

  const appendedDays = Array.from(Array(count), (_, i) => lastdayOfPrevMonth - i).reverse();


  
  const daysFromNextMonth = []
  return (
    <div>
      <h2>{monthNames.find(item => d.getMonth() === item.id).nameMonth}</h2>
      <div className="calendar calendar-30 calendar-sun">
        {[...appendedDays, ...days, ...daysFromNextMonth].map(day => <div className="day calendar__day">{day}</div>)}
      </div>
    </div>
  );

}

export default OneMonth;
