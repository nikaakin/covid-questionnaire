import { pageContext } from '@/context';
import { routes } from '@/routes';
import { useContext, useEffect, useState } from 'react';

export const useTransitionClass = () => {
  const { forwardAnimation, show, setShowValue, page } =
    useContext(pageContext);
  const [initialLoad, setInitialLoad] = useState(false);
  const name = routes[page];

  const style = () => {
    if (forwardAnimation) {
      if (!initialLoad) {
        return `${name}-enter`;
      } else {
        if (show) {
          return `${name}-enter-active`;
        } else {
          return `${name}-exit-active`;
        }
      }
    } else {
      if (!initialLoad) {
        return `${name}-exit-active`;
      } else {
        if (show) {
          return `${name}-enter-active`;
        } else {
          return `${name}-enter`;
        }
      }
    }
  };

  useEffect(() => {
    setShowValue(true);
    setInitialLoad(true);
  }, []);

  return style();
};
