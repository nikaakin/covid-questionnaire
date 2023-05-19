import { useTransitionClass } from '@/hooks';

export const CovidStateAnimation = () => {
  const className = useTransitionClass('covid-state');
  return (
    <div className='basis-[60%] relative '>
      <img
        src='/assets/icons/vaccinate.png'
        alt='scan'
        className='w-full h-auto z-10 relative '
      />

      <img
        src='/assets/icons/circle.png'
        alt='Landing scan'
        className={`block bg-cover  absolute top-44 left-16 z-0  w-36 h-36 ${className}`}
      />
    </div>
  );
};
