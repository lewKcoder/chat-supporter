import { Component } from './types';
import styles from './styles.module.scss';

export const Chat: Component = (props) => {
  const { role, content, iconColor } = props;

  return (
    <div
      className={`${styles.container} ${
        role === 'user' ? styles.role_user : styles.role_assistant
      }`}
    >
      <p className={styles.content}>
        <span className={`${styles.icon} ${role}`} />
        {content}
      </p>

      <style jsx>{`
        .user {
          background: linear-gradient(to right, ${iconColor.left}, ${iconColor.right});
        }
      `}</style>
    </div>
  );
};
