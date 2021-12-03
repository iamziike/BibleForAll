import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';

const AppLogic = () => {
  const API_KEY = 'fd37d8f28e95d3be8cb4fbc37e15e18e';
  const bibleId = 'LEB';
  const bookListUrl = `https://api.biblia.com/v1/bible/contents/${bibleId}?key=${API_KEY}`;

  const { data: bookList } = useFetch(bookListUrl);
  const [displayedBookData, setDisplayedBookData] = useState();

  useEffect(() => {
    // sets the initial book to Genesis onload
    const index = 0;
    if (!bookList) return;
    const { books } = bookList;
    const genesis = books[index];

    setDisplayedBookData({
      currentChapter: 1,
      name: genesis.passage,
      bookIndex: index,
      chaptersCount: genesis.chapters.length,
    });
  }, [bookList]);

  return {
    displayedBookData,
    setDisplayedBookData,
    books: bookList?.books,
    API_KEY,
    bibleId,
  };
};

export default AppLogic;
