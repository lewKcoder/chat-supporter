import { FunctionComponent } from 'react';
import { Props as Prop } from '@/components/chat-line/types';

type Props = {
  messages: Prop[];
};

export type Component = FunctionComponent<Props>;
