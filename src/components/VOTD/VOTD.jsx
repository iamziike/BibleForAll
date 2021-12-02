import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const VOTD = () => {
  const url =
    'https://labs.bible.org/api/?passage=votd&type=json&formatting=para';
  const { data: votd } = useFetch(url);
  const [showVOTD, setShowVOTD] = useState(false);

  return (
    <div className={`votd ${showVOTD && 'btn--active'}`}>
      <div
        className='votd__control btn'
        onClick={() => {
          setShowVOTD((currentValue) => !currentValue);
        }}
      >
        VOTD
      </div>
      {votd && (
        <div
          className={`votd__content no-visible-scrollbar ${
            !showVOTD && 'no-height'
          }`}
        >
          <h2 className='votd__header'>Verse(s) Of The Day</h2>
          <ul className='votd__textlist'>
            {votd &&
              votd.map((passage, index) => {
                return (
                  <li className='votd__text' key={index}>
                    <div className='votd__passage' key={index}>
                      <span>{passage.bookname}</span>
                      <span>{passage.chapter}:</span>
                      <span>{passage.verse}</span>
                    </div>
                    <div
                      className='votd__passage-msg'
                      dangerouslySetInnerHTML={{ __html: passage.text }}
                    ></div>
                  </li>
                );
              })}
          </ul>
        </div>
      )}{' '}
    </div>
  );
};

export default VOTD;
