import React, { useEffect, useRef } from 'react';
import MonthArr from '../../monthArray';


const vueOptions = [
  {
    key: 'Year', text: 'Year', value: 'Year',
  },
  {
    key: 'Month', text: 'Month', value: 'Month',
  },
  {
    key: 'Week', text: 'Week', value: 'Week',
  },
  {
    key: 'Day', text: 'Day', value: 'Day',
  },
];

const ActiveVue
  = ({ activeVue, setActiveVue, setIsActiveSelector }) => {
    const node = useRef(null);

    const useOutsideClick = (ref, callback) => {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          callback();
        }
      };

      useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
          document.removeEventListener('click', handleClick);
        };
      });
    };

    useOutsideClick(node, () => {
      setIsActiveSelector(false);
    });

    return (

      <div>
        <div
          ref={node}
          className="footer__language language language--active"
        >
          <ul className="language__list">
            {vueOptions
              .filter(lan => lan.text !== activeVue)
              .map(item => (
                <li
                  key={item.id}
                  className="language__item"
                >
                  <button
                    className="language__link"
                    onClick={() => {
                      setIsActiveSelector(false);
                      setActiveVue(item.text);
                    }}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  };

export default ActiveVue;
