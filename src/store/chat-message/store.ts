import { atom, useAtom } from 'jotai';

export const chatMessageStore = atom([
  {
    role: 'assistant',
    content: 'こんにちは！何かサポートできることはありますか？',
  },
]);
