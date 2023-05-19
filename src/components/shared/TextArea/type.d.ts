import { UseFormRegisterReturn } from 'react-hook-form';

export type TextAreaType = {
  register: UseFormRegisterReturn<string>;
  name: string;
  title?: string;
  placeholder?: string;
  value?: string;
};
