import React from 'react';

export const PersonalInfoAnimation = () => {
  return (
    <div className='basis-1/2'>
      <img src='/assets/icons/scan.png' alt='scan' />
      <CSSTransition
        nodeRef={backgroundRef}
        in={showBg}
        timeout={500}
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
          className='bg-cover w-screen h-screen  hidden '
        />
      </CSSTransition>
    </div>
  );
};
