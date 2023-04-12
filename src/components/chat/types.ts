import { FunctionComponent } from 'react';

export type Props = {
  role: string;
  content: string;
};

export type Component = FunctionComponent<Props>;
