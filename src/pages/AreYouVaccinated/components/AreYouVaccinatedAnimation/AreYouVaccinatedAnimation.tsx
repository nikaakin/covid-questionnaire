import { useTransitionClass } from '@/hooks';

export const AreYouVaccinatedAnimation = () => {
  const className = useTransitionClass('are-you-vaccinated');
  return (
    <div className='relative basis-[60%]'>
      <div className=' fixed '>
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
    </div>
  );
};
