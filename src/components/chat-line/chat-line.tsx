import { Component } from './types';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';

export const Chat: Component = (props) => {
  const { role, content } = props;
  // const [color, setColor] = useState({
  //   left: '#fff',
  //   right: '#000',
  // });

  // function getRandomColor() {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  // useEffect(() => {
  //   setColor({ left: getRandomColor(), right: getRandomColor() });
  // }, []);

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

      {/* <style jsx>{`
        .user {
          background: linear-gradient(to right, ${color.left}, ${color.right});
        }
      `}</style> */}
    </div>
  );
};
