import styles from './styles.module.css';

import { ItemList } from '../ItemList';
import { artistArray } from '../../assets/database/artists';
import { songsArray } from '../../assets/database/songs';

export const Main = ({ type }) => {
  return (
    <main className={styles.main}>
      {type === 'artists' || type === undefined ? (
        <ItemList
          title="Artistas Populares"
          itemQtd={10}
          itemListElement={artistArray}
          path="artists"
          idPath='artist'
        />
      ) : (
        <></>
      )}

      {type === 'songs' || type === undefined ? (
        <ItemList
          title="Músicas Populares"
          itemQtd={20}
          itemListElement={songsArray}
          path="songs"
          idPath='song'
        />
      ) : (
        <></>
      )}
    </main>
  );
};
