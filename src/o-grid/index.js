/**
 * o-grid
 */

import styles from './index.scss';

export const container = ({ children }) => (
  <div className={styles['o-grid-container']}>
    {children}
  </div>
);

export const row = ({ children }) => (
  <div className={styles['o-grid-row']}>
    {children}
  </div>
);

export const column = ({ children, colspan }) => (
  <div data-o-grid-colspan={colspan}>
    {children}
  </div>
);

export default {
  container,
  row,
  column,
};
