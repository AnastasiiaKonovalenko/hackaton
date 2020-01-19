import React  from 'react';
import '../src/Main.scss';

const monthNames = [
    { id: 0, nameMonth: "January" },
    { id: 1, nameMonth: "February" },
    { id: 2, nameMonth: "March" },
    { id: 3, nameMonth: "April" },
    { id: 4, nameMonth: "May" },
    { id: 5, nameMonth: "June" },
    { id: 6, nameMonth: "July" },
    { id: 7, nameMonth: "August" },
    { id: 8, nameMonth: "September" },
    { id: 9, nameMonth: "October" },
    { id: 10, nameMonth: "November" },
    { id: 11, nameMonth: "December" }
]

const days = ['mon','tue','wed','thu','fri','sat','sun']


const MonthArr = () => {
    const amount = (month, year) => {
        return new Date(year, month, 0).getDate()
    }
    let date = new Date();
    let year = date.getFullYear();

    
const newTodo=()=> {
   
}
  return (
    
    <div>
      
    <div className='year'>
      {monthNames.map((i)=>
        <div className='calendar'>
            <p className="clip"><i class="thumbtack icon"></i></p>
          <p className='nameMonth'>{i.nameMonth}</p>
          <div className={`month day_${new Date(year,i.id).toString().slice(0,3)}`}>
            {Array.from(Array(amount(i.id,year)), (el, i) => i + 1)
              .map(item => ( <div className='day' onClick={()=>{}}>{item}</div>))}
          </div>
        </div>
      )}
    </div>
  </div>

  )

}

export default MonthArr;
