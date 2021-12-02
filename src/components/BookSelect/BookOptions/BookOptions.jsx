import { useContext, useEffect, useState } from 'react';
import { BookDataContext, PassagePendingContext } from '../../App/App';
import { PassageClickContext } from '../BookSelect';

const BookOptions = () => {
  const {
    isSelectNameClicked,
    setIsSelectNameClicked,
    isSelectChapterClicked,
    setIsSelectChapterClicked,
  } = useContext(PassageClickContext);

  function* getSelectOptionChapters(range) {
    for (let current = 1; current <= range; current++) yield current;
  }

  const { setIsPassagePending } = useContext(PassagePendingContext);
  const { bookList, displayedBookData, setDisplayedBookData } =
    useContext(BookDataContext);
  const { books } = bookList;
  const [selectBookOption, setSelectBookOption] = useState();

  useEffect(() => {
    setSelectBookOption({
      name: displayedBookData.name,
      chaptersCount: displayedBookData.chaptersCount,
    });
  }, [displayedBookData]);

  const isAnyControlClicked = isSelectNameClicked || isSelectChapterClicked;

  return (
    <>
      {isAnyControlClicked && (
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
                    setIsSelectChapterClicked(true);
                  }}
                >
                  {book.passage}
                </div>
              );
            })}
          </div>
          <div className='book-select__chapter-options no-visible-scrollbar'>
            {isSelectChapterClicked &&
              [...getSelectOptionChapters(selectBookOption.chaptersCount)].map(
                (chapter) => {
                  return (
                    <div
                      className='btn book-select__chapter-option'
                      key={chapter}
                      data-chapter={chapter}
                      onClick={(event) => {
                        let target = event.target;
                        let newBook = {};
                        bookList.books.forEach((book, index) => {
                          if (book.passage === selectBookOption.name) {
                            newBook = {
                              currentChapter: parseInt(target.dataset.chapter),
                              name: book.passage,
                              bookIndex: index + 1,
                              chaptersCount: book.chapters.length,
                            };
                            return true;
                          }
                        });
                        setDisplayedBookData(newBook);
                        setIsPassagePending(true);
                        setIsSelectNameClicked(false);
                        setIsSelectChapterClicked(false);
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
