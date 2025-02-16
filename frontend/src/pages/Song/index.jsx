import styles from './styles.module.css';

import { Link, useParams } from 'react-router-dom';
import { Player } from '../../components/Player';
import { songsArray } from '../../assets/database/songs';
import { artistArray } from '../../assets/database/artists';

export const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className={styles.song}>
      <div className={styles['song__container']}>
        <div className="song__image--container">
          <img src={image} alt={`Imagem da Música ${name}`} />
        </div>
      </div>
      <div className={styles['song__bar']}>
        <Link
          to={`/artist/${artistObj._id}`}
          className={styles['song__artist-image']}
        >
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artistObj.name}`}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className={styles['song__name']}>{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};
