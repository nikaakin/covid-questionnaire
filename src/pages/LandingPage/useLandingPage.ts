import { useEffect, useRef, useState } from 'react';

export const useLandingPage = () => {
  const backgroundRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const [showBg, setShowBg] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [text, setText] = useState(false);

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
  };
};
