import { atom, useAtom } from 'jotai';

export const chatMessageStore = atom([
  {
    role: 'assistant',
    content: "Hello, I'm ChatGPT! Ask me anything!",
  },
]);
