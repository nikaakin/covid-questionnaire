import { usePageContext } from '@/context';
import { useEffect, useState } from 'react';

export const useTransitionClass = (name: string, secondName?: string) => {
  const { forwardAnimation, show, setShowValue } = usePageContext();
  const [initialLoad, setInitialLoad] = useState(false);

  const style = (className: string) => {
    if (className === '') return;
    if (forwardAnimation) {
      if (!initialLoad) {
        return `${className}-enter`;
      } else {
        if (show) {
          return `${className}-enter-active`;
        } else {
          return `${className}-exit-active`;
        }
      }
    } else {
      if (!initialLoad) {
        return `${className}-exit-active`;
      } else {
        if (show) {
          return `${className}-enter-active`;
        } else {
          return `${className}-enter`;
        }
      }
    }
  };

  useEffect(() => {
    setShowValue(true);
    setInitialLoad(true);
  }, []);

  return [style(name), style(secondName || '')];
};
