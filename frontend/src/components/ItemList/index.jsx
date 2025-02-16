import styles from './styles.module.css';

import { Link, useLocation } from 'react-router-dom';
import { SingleItem } from '../SingleItem';

export const ItemList = ({ title, itemQtd, itemListElement, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const finalItems = isHome ? itemQtd : Infinity;

  return (
    <section className={styles['item-list']}>
      <div className={styles['item-list__header']}>
        <h2>{title}</h2>
        {isHome ? (
          <Link to={path} className={styles['item-list__link']}>
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className={styles['item-list__container']}>
        {itemListElement
          .filter((item, index) => index < finalItems)
          .map((itemObj) => {
            return (
              <SingleItem key={itemObj._id} {...itemObj} idPath={idPath} />
            );
          })}
      </div>
    </section>
  );
};
