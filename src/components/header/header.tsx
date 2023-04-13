import Link from 'next/link';
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

export const Header: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.link}>
        ChatGPT Helper
      </Link>
    </div>
  );
};
