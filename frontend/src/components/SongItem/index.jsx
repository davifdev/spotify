import styles from './styles.module.css';

import { Link } from 'react-router-dom';

export const SongItem = ({ image, name, duration, audio, _id }) => {
  return (
    <Link to={`/song/${_id}`} className={styles['song-item']}>
      <div className={styles['song-item__number-album']}>
        <p>1</p>

        <div className={styles['song-item__album']}>
          <img
            src={image}
            className={styles['song-item__image']}
            alt={`Imagem da Música ${name}`}
          />
          
          <p className={styles['song-item__name']}>{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};
