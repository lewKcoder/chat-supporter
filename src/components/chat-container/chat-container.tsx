import { Chat } from '@/components/chat';
import { Component } from './types';

export const ChatContainer: Component = (props) => {
  const { messages } = props;

  return (
    <>
      {messages.map((message) => (
        <Chat key={message.content} role={message.role} content={message.content} />
      ))}
    </>
  );
};
