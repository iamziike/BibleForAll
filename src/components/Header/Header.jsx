import { createContext, useState } from 'react';
import BookSelect from '../BookSelect/BookSelect';
import VOTD from '../VOTD/VOTD';

export const OptionClickContext = createContext();

const Header = () => {
  const [isShowOptionsClicked, setIsShowOptionsClicked] = useState(false);
  const [showVOTD, setShowVOTD] = useState(false);

  return (
    <div className='header'>
      <OptionClickContext.Provider
        value={{
          showVOTD,
          setShowVOTD,
          isShowOptionsClicked,
          setIsShowOptionsClicked,
        }}
      >
        <BookSelect />
        <div>
          <VOTD />
        </div>
      </OptionClickContext.Provider>
    </div>
  );
};

export default Header;
