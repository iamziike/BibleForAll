import { useContext, useEffect, useState } from 'react';
import { BookDataContext, PassagePendingContext } from '../../App/App';
import { OptionClickContext } from '../../Header/Header';

const BookOptions = () => {
  function* getSelectOptionChapters(range) {
    for (let current = 1; current <= range; current++) yield current;
  }

  const { isShowOptionsClicked, setIsShowOptionsClicked } =
    useContext(OptionClickContext);
  const { setIsPassagePending } = useContext(PassagePendingContext);
  const { books, displayedBookData, setDisplayedBookData } =
    useContext(BookDataContext);
  const [selectBookOption, setSelectBookOption] = useState();

  useEffect(() => {
    setSelectBookOption({
      name: displayedBookData.name,
      chaptersCount: displayedBookData.chaptersCount,
    });
  }, [displayedBookData]);

  return (
    <>
      {isShowOptionsClicked && (
        <div className='book-select__options'>
          <div className='book-select__name-options no-visible-scrollbar'>
            {books?.map((book, index) => {
              return (
                <div
                  className={`btn ${
                    book.passage === selectBookOption.name ? 'btn--active' : ''
                  } book-select__name-option`}
                  key={index}
                  data-name={book.passage}
                  data-chapter-count={book.chapters.length}
                  onClick={(event) => {
                    const target = event.target;
                    if (target.classList.contains('book-select__name-option'))
                      setSelectBookOption?.({
                        name: target.dataset.name,
                        chaptersCount: target.dataset.chapterCount,
                      });
                  }}
                >
                  {book.passage}
                </div>
              );
            })}
          </div>
          <div className='book-select__chapter-options no-visible-scrollbar'>
            {[...getSelectOptionChapters(selectBookOption.chaptersCount)].map(
              (chapter) => {
                return (
                  <div
                    className='btn book-select__chapter-option'
                    key={chapter}
                    data-chapter={chapter}
                    onClick={(event) => {
                      let target = event.target;
                      let newBook = {};
                      books.forEach((book, index) => {
                        if (book.passage === selectBookOption.name) {
                          newBook = {
                            currentChapter: parseInt(target.dataset.chapter),
                            name: book.passage,
                            bookIndex: index,
                            chaptersCount: book.chapters.length,
                          };
                          return true;
                        }
                      });
                      setDisplayedBookData(newBook);
                      setIsPassagePending(true);
                      setIsShowOptionsClicked(false);
                    }}
                  >
                    {chapter}
                  </div>
                );
              },
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BookOptions;
