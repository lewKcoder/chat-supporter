import { useEffect, useState } from 'react';
import { Chat } from '@/components/chat-line';
import { Component } from './types';

export const ChatContainer: Component = (props) => {
  const { messages } = props;
  const [iconColor, setIconColor] = useState({
    left: '#fff',
    right: '#000',
  });

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    setIconColor({ left: getRandomColor(), right: getRandomColor() });
  }, []);

  return (
    <>
      {messages.map((message) => (
        <Chat
          key={message.content}
          role={message.role}
          content={message.content}
          iconColor={iconColor}
        />
      ))}
    </>
  );
};
