import React from 'react';

const Header = ({monthNames, month, year }) => {

  return (
    <div>
    <h1>{year}{}</h1>
      <div>
        {monthNames.map(item => <p>{item}</p>)}
      </div>


    </div>
  );
};

export default Header;
