import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export const SingleItem = ({ _id, image, name, artist, idPath }) => {

  return (
    <Link to={`/${idPath}/${_id}`} className={styles['single-item__2lines']}>
      <div className={styles['single-item']}>
        <div className={styles['single-item__div-image-button']}>
          <div className={styles['single-item__div-image']}>
            <img
              className={styles['single-item__image']}
              src={image}
              alt="Imagem do Artista X"
            />
          </div>
          <FontAwesomeIcon
            className={styles['single-item__icon']}
            icon={faCirclePlay}
          />
        </div>

        <div className={styles['single-item__texts']}>
          <p className={styles['single-item__title']}>{name}</p>
          <p className={styles['single-item_text']}>{artist ?? 'Artista'}</p>
        </div>
      </div>
    </Link>
  );
};
