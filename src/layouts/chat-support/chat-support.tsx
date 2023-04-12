import { FormEvent, useState, ChangeEvent } from 'react';
import { Form } from '@/components/form';
import { ChatContainer } from '@/components/chat-container';
import styles from './styles.module.scss';

export const LayoutChat: any = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello, I'm ChatGPT! Ask me anything!",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [role, setRole] = useState(true);

  const handleFormSubmit = async function (e: FormEvent) {
    e.preventDefault();

    const newMessage = {
      role: role ? 'user' : 'assistant',
      content: inputValue,
    };
    setRole((prev) => !prev);
    setInputValue('');

    const chatMessage = [...messages, newMessage];
    setMessages(chatMessage);

    await processMessageToChatGPT(chatMessage);
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
        setMessages([
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
    <div className={styles.container}>
      <ChatContainer messages={messages} />
      <Form value={inputValue} onChange={handleInputChange} onSubmit={handleFormSubmit} />
    </div>
  );
};
