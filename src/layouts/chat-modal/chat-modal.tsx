import { FormEvent, useState, ChangeEvent, useRef, useEffect } from 'react';
import { useAtom } from 'jotai';
import { Form } from '@/components/form';
import { ChatContainer } from '@/components/chat-container';
import { chatMessageStore } from '@/store/chat-message';
import { roleStore } from '@/store/role';
import styles from './styles.module.scss';
import { createPortal } from 'react-dom';

export const LayoutChatModal: any = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return createPortal(<div>div</div>, document.body);
};
