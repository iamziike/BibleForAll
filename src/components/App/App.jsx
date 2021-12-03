import { createContext, useState } from 'react';
import AppLogic from './AppLogic';
import Header from '../Header/Header';
import ScriptureView from '../ScriptureView/ScriptureView';
import '../../css/App.css';

export const BookDataContext = createContext();
export const PassagePendingContext = createContext();
export const SelectedTestContext = createContext();

const App = () => {
  const [isPassagePending, setIsPassagePending] = useState(true);
  const { displayedBookData, setDisplayedBookData, books, API_KEY, bibleId } =
    AppLogic();

  return (
    <>
      {displayedBookData && books && (
        <PassagePendingContext.Provider
          value={{ isPassagePending, setIsPassagePending }}
        >
          <BookDataContext.Provider
            value={{
              displayedBookData,
              setDisplayedBookData,
              books,
              API_KEY,
              bibleId,
            }}
          >
            <Header />
            <ScriptureView />
          </BookDataContext.Provider>
        </PassagePendingContext.Provider>
      )}
      {isPassagePending && <div className='pending'></div>}
    </>
  );
};

export default App;
