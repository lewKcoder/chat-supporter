import { useRef, KeyboardEvent } from 'react';
import { Component } from './types';
import styles from './styles.module.scss';

export const Form: Component = (props) => {
  const { value, onSubmit, onChange } = props;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.input}
          placeholder="Send a messege ..."
          value={value}
          onChange={onChange}
        />
        <input type="submit" className={styles.button} />
      </form>
    </div>
  );
};
