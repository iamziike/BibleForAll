import { useContext, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { BookDataContext } from '../App/App';
import { PassagePendingContext } from '../App/App';

const ScriptureViewLogic = (currentViewingPassageWrapper) => {
  const { isPassagePending, setIsPassagePending } = useContext(
    PassagePendingContext,
  );

  const {
    bookList,
    displayedBookData,
    setDisplayedBookData,
    API_KEY,
    bibleId,
  } = useContext(BookDataContext);

  const {
    name: currentBookName,
    currentChapter,
    chaptersCount,
  } = displayedBookData;

  const scrollTop = (scriptureView) => {
    scriptureView.scrollTop = 0;
  };

  const handlePassageChange = (event) => {
    let { bookIndex } = displayedBookData;
    let bookLen = bookList.length;
    const target = event.target;

    if (!target.classList.contains('view-direction')) return false;

    setIsPassagePending(true);
    if (isPassagePending) return; // used to prevent the prev button from moving to a different book before the pending ends

    if (target.classList.contains('next')) {
      if (bookIndex === bookLen - 1 && currentChapter === chaptersCount) {
        return setIsPassagePending(false);
      }
      nextPassage(displayedBookData, bookList.books);
    } else if (target.classList.contains('prev')) {
      if (bookIndex === 0 && currentChapter === 1) {
        return setIsPassagePending(false);
      }
      prevPassage(displayedBookData, bookList.books);
    }
  };

  const nextPassage = (displayedBookData, books) => {
    let { bookIndex } = displayedBookData;
    let newBook = { ...displayedBookData };

    if (currentChapter < chaptersCount) {
      newBook = { ...newBook, currentChapter: currentChapter + 1 };
    } else if (bookIndex < books.length - 1) {
      newBook = {
        ...newBook,
        bookIndex: bookIndex + 1,
        name: books[bookIndex + 1].passage,
        currentChapter: 1,
        chaptersCount: books[bookIndex + 1].chapters.length,
      };
    }

    setDisplayedBookData(newBook);
  };

  const prevPassage = (displayedBookData, books) => {
    let { bookIndex } = displayedBookData;
    let newBook = { ...displayedBookData };

    if (bookIndex === 0)
      if (currentChapter > 1) {
        newBook = { ...newBook, currentChapter: currentChapter - 1 };
      } else if (bookIndex > 0) {
        newBook = {
          ...newBook,
          bookIndex: bookIndex - 1,
          name: books[bookIndex - 1].passage,
          currentChapter: books[bookIndex - 1].chapters.length,
          chaptersCount: books[bookIndex - 1].chapters.length,
        };
      }
    setDisplayedBookData(newBook);
  };

  const url = `https://api.biblia.com/v1/bible/content/${bibleId}.html.json?passage=${currentBookName}${currentChapter}&style=fullyFormatted&key=${API_KEY}`;
  const { data: passageToShow, isPending } = useFetch(url);

  useEffect(() => {
    if (!passageToShow) return;
    setIsPassagePending(false);

    if (!currentViewingPassageWrapper.current) return;
    scrollTop(currentViewingPassageWrapper.current);
  }, [passageToShow]);

  return {
    passageToShow,
    isPending,
    nextPassage,
    prevPassage,
    scrollTop,
    displayedBookData,
    isPassagePending,
    setIsPassagePending,
    handlePassageChange,
  };
};

export default ScriptureViewLogic;
