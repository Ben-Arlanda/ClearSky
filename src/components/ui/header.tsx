import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div>
        <Link to={'/'}>
          ClearSky
          <img src="/cloudy.png" alt="ClearSky logo" className="h-10" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
