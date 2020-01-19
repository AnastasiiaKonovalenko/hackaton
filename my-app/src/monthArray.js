import React from 'react';
import '../src/App.css';
const days = {
  1: "mon",
  2: "tue",
  3: "wed",
  4: "thu",
  5: "fri" ,
  6: "sat",
  7: "sun",
};

const  monthNames = [
  {id:1,nameMonth:"January"},
  {id:2,nameMonth:"February"},
  {id:3,nameMonth:"March"},
  {id:4,nameMonth:"April"},
  {id:5,nameMonth:"May"},
  {id:6,nameMonth:"June"},
  {id:7,nameMonth:"July"},
  {id:8,nameMonth:"August"},
  {id:9,nameMonth:"September"},
  {id:10,nameMonth:"October"},
  {id:11,nameMonth:"November"},
  {id:12,nameMonth:"December"}
];


const MonthArr = () => {
  const amount = (year, month) =>{
    return new Date(year, month, 0).getDate()}
  let d = new Date();
  let x = d.getFullYear();

  // const day  = new Date(x, d.getMonth(), 1).getDay();
  // let count;
  //
  // if (new Date(x, d.getMonth(), 1).getDay() === 0) {
  //   count = 6;
  // }
  // count = new Date(x, d.getMonth(), 1).getDay() - 1;
  return (
    <>
    <div>
      <div className='year'>
        {monthNames.map((i)=>
          <div>
            <p>{i.nameMonth}</p>
            <div className='calendar'>

            </div>
            <div className='calendar'>
              {[...Array.from(Array((new Date(x, i.id-1, 1).getDay() === 0)
                ? 6
                : (new Date(x, i.id-1, 1).getDay() - 1)), (_, index) => new Date(x, i.id, 0).getDate() - index).reverse(),
                ...Array.from(Array(amount(x, i.id)), (el, i) => i+1),
                ...Array.from(Array((new Date(x, i.id-1, 1).getDay() === 0)
                ? 6
                : (new Date(x, i.id-1, 1).getDay() - 1)), (_, index) => new Date(x, i.id, 1).getDate() + index)
                  ]
                .map(item => ( <div className="calendar__day">{item}</div>))}
            </div>
          </div>
        )}
      </div>
    </div>
      </>
  );
}

export default MonthArr;

