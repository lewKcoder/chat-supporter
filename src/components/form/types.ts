import { FormEvent, useState, ChangeEvent, FunctionComponent } from 'react';

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
};

export type Component = FunctionComponent<Props>;
