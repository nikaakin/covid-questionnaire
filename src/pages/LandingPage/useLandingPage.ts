import { pageContext } from '@/context';
import { useContext, useEffect, useRef, useState } from 'react';

export const useLandingPage = () => {
  const backgroundRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const [showBg, setShowBg] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [text, setText] = useState(false);
  const { setCurrentPage } = useContext(pageContext);

  useEffect(() => {
    setShowBg(true);
  }, []);

  return {
    backgroundRef,
    logoRef,
    textRef,
    showBg,
    showLogo,
    text,
    setShowBg,
    setShowLogo,
    setText,
    setCurrentPage,
  };
};
