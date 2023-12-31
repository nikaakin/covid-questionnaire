import { useLandingPage } from './useLandingPage';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export const LandingPage = () => {
  const {
    backgroundRef,
    logoRef,
    setShowBg,
    setShowLogo,
    setText,
    showBg,
    showLogo,
    text,
    textRef,
    setCurrentPage,
  } = useLandingPage();

  return (
    <div className='w-screen h-screen bg-gray-250 overflow-hidden relative'>
      <CSSTransition
        nodeRef={backgroundRef}
        in={showBg}
        timeout={800}
        classNames='background'
        unmountOnExit
        mountOnEnter
        onEntering={() => setShowLogo(true)}
        onEntered={() => setShowBg(false)}
      >
        <img
          ref={backgroundRef}
          src='/assets/icons/landing-bg.png'
          alt='Landing background'
          className='bg-cover absolute scale-150 hidden '
        />
      </CSSTransition>

      <CSSTransition
        nodeRef={logoRef}
        in={showLogo}
        timeout={1200}
        classNames='logo'
        unmountOnExit
        mountOnEnter
        onEntered={() => setText(true)}
      >
        <img
          ref={logoRef}
          src='/assets/icons/landing-logo.png'
          alt='Landing background'
          className=' absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 '
        />
      </CSSTransition>

      <CSSTransition
        nodeRef={textRef}
        in={text}
        timeout={1500}
        classNames='text'
        unmountOnExit
        mountOnEnter
        onEntered={() => setText(true)}
      >
        <Link
          ref={textRef}
          to='/personal-info'
          className='block font-bold text-3xl lowercase  
            text-neutral-850  text-center absolute top-1/2 left-1/2 -translate-x-1/2
            text-shadow overflow-hidden px-2 transition-all duration-100 ease-in-out
            '
          onClick={() => {
            setCurrentPage(0);
          }}
        >
          <span className='block'>კითხვარის</span>
          <span className='block'>დაწყება</span>
        </Link>
      </CSSTransition>
    </div>
  );
};
