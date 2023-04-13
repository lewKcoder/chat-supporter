import { atom, useAtom, useSetAtom } from 'jotai';
import { chatMessageStore } from '@/store/chat-message';
import { roleStore } from '@/store/role';

export const useFetchChatGPTMessage = async () => {
  const [chatMessage, setChatMessages] = useAtom(chatMessageStore);
  const setRole = useSetAtom(roleStore);

  let responce;

  try {
    responce = await fetch(process.env.NEXT_PUBLIC_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: chatMessage,
      }),
    });
    const json = await responce.json();

    await setChatMessages([
      ...chatMessage,
      {
        role: 'assistant',
        content: json.choices[0].message.content,
      },
    ]);
    await setRole((prev) => !prev);
  } catch (error) {
    throw new Error('error');
  }
};
