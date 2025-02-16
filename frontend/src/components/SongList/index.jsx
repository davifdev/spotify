import styles from './styles.module.css';

import { SongItem } from '../SongItem';
import { useState } from 'react';

export const SongList = ({ songsArray }) => {
  const [item, setItem] = useState(5);

  return (
    <div className={styles['song-list']}>
      {songsArray
        .filter((currentValue, index) => index < item)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} key={index} />
        ))}

      <p className={styles['song-list__see-more']} onClick={() => setItem(item + 5)}>
        Ver mais
      </p>
    </div>
  );
};
