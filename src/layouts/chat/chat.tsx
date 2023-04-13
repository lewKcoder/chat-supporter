import { FormEvent, useState, ChangeEvent } from 'react';
import { useAtom } from 'jotai';
import { Form } from '@/components/form';
import { ChatContainer } from '@/components/chat-container';
import { chatMessageStore } from '@/store/chat-message';
import { roleStore } from '@/store/role';
import styles from './styles.module.scss';

export const LayoutChat: any = () => {
  const [chatMessage, setChatMessages] = useAtom(chatMessageStore);
  const [role, setRole] = useAtom(roleStore);
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = async function (e: FormEvent) {
    e.preventDefault();

    const newMessage = {
      role: role ? 'user' : 'assistant',
      content: inputValue,
    };
    setRole((prev) => !prev);
    setInputValue('');

    const messages = [...chatMessage, newMessage];
    setChatMessages(messages);

    await processMessageToChatGPT(messages);
  };

  async function processMessageToChatGPT(chatMessage: any) {
    await fetch(process.env.NEXT_PUBLIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: chatMessage,
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setChatMessages([
          ...chatMessage,
          {
            role: 'assistant',
            content: data.choices[0].message.content,
          },
        ]);
        setRole((prev) => !prev);
      });
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <ChatContainer messages={chatMessage} />
      <div className={styles.form}>
        <Form value={inputValue} onChange={handleInputChange} onSubmit={handleFormSubmit} />
      </div>
    </>
  );
};
