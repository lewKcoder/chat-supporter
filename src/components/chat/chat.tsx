import { Component } from './types';
import styles from './styles.module.scss';

export const Chat: Component = (props) => {
  const { role, content } = props;

  return (
    <div className={`${styles.container}  ${role}`}>
      <p className={styles.content}>{content}</p>

      <style jsx>{`
        .user {
          background-color: #444654;
        }

        .assistant {
          background-color: #343541;
        }
      `}</style>
    </div>
  );
};
