import { useTransitionClass } from '@/hooks/useTransitionClass';

export const CovidPoliticsAnimation = () => {
  const className = useTransitionClass();
  return (
    <div className='basis-[60%] relative '>
      <img
        src='/assets/icons/doctor.png'
        alt='scan'
        className='w-full h-auto z-10 relative block '
      />

      <img
        src='/assets/icons/big-star.png'
        alt='Landing scan'
        className={`block bg-cover  absolute top-2 left-8 z-0  h-56 w-56 ${className}`}
      />
    </div>
  );
};
