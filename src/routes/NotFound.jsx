import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <Link to='/'>
        <div className='location-404'>404</div>
        <div className='location-home'>GO HOME</div>
      </Link>
    </div>
  );
};

export default NotFound;
