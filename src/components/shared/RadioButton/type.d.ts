export type RadioButtonType = {
  name: string;
  title: string;
  values: { ka: string; en: string }[];
  isRequired?: boolean;
  setOnChange: (key: string, value: string) => void;
};
