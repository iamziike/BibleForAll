import { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { OptionClickContext } from '../Header/Header';

const VOTD = () => {
  const url =
    'https://labs.bible.org/api/?passage=votd&type=json&formatting=para';
  const { data: votd } = useFetch(url);

  const { showVOTD, setShowVOTD, setIsShowOptionsClicked } =
    useContext(OptionClickContext);

  return (
    <div className={`votd ${showVOTD && 'btn--active'}`}>
      <div
        className='votd__control btn'
        onClick={() => {
          setIsShowOptionsClicked(false);
          setShowVOTD((currentValue) => !currentValue);
        }}
      >
        VOTD
      </div>
      {votd && showVOTD && (
        <div className={'votd__content no-visible-scrollbar'}>
          <h2 className='votd__header'>Verse(s) Of The Day</h2>
          <ul className='votd__textlist'>
            {votd.map((passage, index) => {
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
      )}
    </div>
  );
};

export default VOTD;
