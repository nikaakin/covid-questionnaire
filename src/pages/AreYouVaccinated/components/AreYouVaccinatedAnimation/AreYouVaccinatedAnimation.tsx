import { useTransitionClass } from '@/hooks/useTransitionClass';

export const AreYouVaccinateAnimation = () => {
  const className = useTransitionClass();
  return (
    <div className='basis-[60%] relative '>
      <img
        src='/assets/icons/bike.png'
        alt='scan'
        className='w-full h-auto z-10 relative'
      />

      <img
        src='/assets/icons/heart.png'
        alt='Landing scan'
        className={`block bg-cover  absolute top-14 left-44 z-0 ${className}  `}
      />
    </div>
  );
};
