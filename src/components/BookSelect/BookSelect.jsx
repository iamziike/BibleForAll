import { useContext } from 'react';
import { BookDataContext } from '../App/App';
import { OptionClickContext } from '../Header/Header';
import BookOptions from './BookOptions/BookOptions';

const BookSelect = () => {
  const { displayedBookData } = useContext(BookDataContext);

  const { setShowVOTD, isShowOptionsClicked, setIsShowOptionsClicked } =
    useContext(OptionClickContext);

  return (
    <div className='book-select'>
      <div className='book-select__controls'>
        <div
          className={`book-select__name-control btn ${
            isShowOptionsClicked ? 'btn--active' : ''
          }`}
          onClick={() => {
            setShowVOTD(false);
            setIsShowOptionsClicked((currentValue) => !currentValue);
          }}
        >
          {displayedBookData?.name}
        </div>
        <div className='book-select__chapter-control'>
          {displayedBookData?.currentChapter}
        </div>
      </div>
      <BookOptions />
    </div>
  );
};

export default BookSelect;
