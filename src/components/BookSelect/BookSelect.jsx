import { createContext, useContext, useState } from 'react';
import { BookDataContext } from '../App/App';
import BookOptions from './BookOptions/BookOptions';

export const PassageClickContext = createContext();

const BookSelect = () => {
  const { displayedBookData } = useContext(BookDataContext);

  const [isSelectNameClicked, setIsSelectNameClicked] = useState(false);
  const [isSelectChapterClicked, setIsSelectChapterClicked] = useState(false);

  return (
    <div className='book-select'>
      <div className='book-select__controls'>
        <div
          className={`book-select__name-control btn ${
            isSelectNameClicked ? 'btn--active' : ''
          }`}
          onClick={() => {
            setIsSelectNameClicked((currentValue) => !currentValue);
          }}
        >
          {displayedBookData && displayedBookData.name}
        </div>
        <div
          className={`book-select__chapter-control btn ${
            isSelectChapterClicked ? 'btn--active' : ''
          }`}
          onClick={() => {
            setIsSelectChapterClicked((currentValue) => !currentValue);
          }}
        >
          {displayedBookData && displayedBookData.currentChapter}
        </div>
      </div>
      <PassageClickContext.Provider
        value={{
          isSelectNameClicked,
          setIsSelectNameClicked,
          isSelectChapterClicked,
          setIsSelectChapterClicked,
        }}
      >
        <BookOptions />
      </PassageClickContext.Provider>
    </div>
  );
};

export default BookSelect;
