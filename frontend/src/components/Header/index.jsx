import styles from './styles.module.css';

import { Link } from 'react-router-dom';
import logoSpotify from '../../assets/logo/spotify-logo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>
      <h1>
        <Link to="/" className="header__link">
          Spotify
        </Link>
      </h1>
    </header>
  );
};
