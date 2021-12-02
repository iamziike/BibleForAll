import BookSelect from '../BookSelect/BookSelect';
import VOTD from '../VOTD/VOTD';

const Header = () => {
  return (
    <div className='header'>
      <BookSelect />
      <div>
        <VOTD />
      </div>
    </div>
  );
};

export default Header;
