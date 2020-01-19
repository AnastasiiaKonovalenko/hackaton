import React, { useState } from 'react';
import ActiveVue from '../activeVue/ActiveVue';
import { iconLanguage } from '../../icons';
import './dateDrapdown.scss';
import MonthArr from '../../monthArray';
import OneMonth from '../oneMoth/oneMonth';
import OneWeek from '../oneWeek/OneWeek';
//import MonthArr from '../../monthArray';

const DateDropdown = () => {
  const [isActiveSelector, setIsActiveSelector] = useState(false);
  const [activeVue, setActiveVue] = useState('Year');

  const renderSwitch = (activeVue) => {
    switch(activeVue) {
      case 'Month':
        return (<OneMonth />);
      case 'Week':
        return (<OneWeek />);
      case 'Day':
        return 'kug';
      default:
        return (<MonthArr />)
    }
  };

  const handleSelector = () => {
    setIsActiveSelector(!isActiveSelector);
  };

  return (
    <>
      {!isActiveSelector ? (
        <div
          className="footer__language language"
          onClick={handleSelector}
        >
          <div className="language__icon">{iconLanguage}</div>
          {activeVue}
          <svg
            className="language__arrowDown"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.4175 0L0 1.34583L7 8L14 1.34583L12.5825 0L7 5.30417L1.4175 0Z" fill="white" />
          </svg>
        </div>
      ) : (
        <div>
          <div
            onClick={handleSelector}
            className="footer__language language"
          >
            <div className="language__icon">{iconLanguage}</div>
            {activeVue}
            <svg
              className="language__arrowDown"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* eslint-disable-next-line max-len */}
              <path d="M1.4175 0L0 1.34583L7 8L14 1.34583L12.5825 0L7 5.30417L1.4175 0Z" fill="white" />
            </svg>
          </div>

          <ActiveVue
            activeVue={activeVue}
            setActiveVue={setActiveVue}
            setIsActiveSelector={setIsActiveSelector}
          />
        </div>
      )}
      {renderSwitch(activeVue)}
    </>
  );
};

export default DateDropdown;

