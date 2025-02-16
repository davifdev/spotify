import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import { Link, useParams } from 'react-router-dom';
import { SongList } from '../../components/SongList';
import { artistArray } from '../../assets/database/artists';
import { songsArray } from '../../assets/database/songs';

export const Artist = () => {
  const { id } = useParams();

  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj._id === id
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

  return (
    <div className={styles.artist}>
      <div
        className={styles['artist__header']}
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`,
        }}
      >
        <h2 className={styles['artist__title']}>{name}</h2>
      </div>

      <div className={styles['artist__body']}>
        <h2>Populares</h2>

        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};
