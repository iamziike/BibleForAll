import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createContext, useState } from 'react';
import AppLogic from './AppLogic';
import Header from '../Header/Header';
import ScriptureView from '../ScriptureView/ScriptureView';
import '../../css/App.css';
import NotFound from '../../routes/NotFound';

export const BookDataContext = createContext();
export const PassagePendingContext = createContext();

const App = () => {
  const [isPassagePending, setIsPassagePending] = useState(true);
  const {
    displayedBookData,
    setDisplayedBookData,
    bookList,
    API_KEY,
    bibleId,
  } = AppLogic();

  return (
    <>
      {displayedBookData && bookList && (
        <PassagePendingContext.Provider
          value={{ isPassagePending, setIsPassagePending }}
        >
          <BookDataContext.Provider
            value={{
              displayedBookData,
              setDisplayedBookData,
              bookList,
              API_KEY,
              bibleId,
            }}
          >
            <Router>
              <Switch>
                <Route exact path='/'>
                  <Header />
                  {isPassagePending && <div className='pending'></div>}
                  <ScriptureView />
                </Route>
                <Route path='/*'>
                  <NotFound />
                </Route>
              </Switch>
            </Router>
          </BookDataContext.Provider>
        </PassagePendingContext.Provider>
      )}
    </>
  );
};

export default App;
