import { useTransitionClass } from '@/hooks';

export const CovidPoliticsAnimation = () => {
  const [className] = useTransitionClass('covid-politics');
  return (
    <div className='basis-[60%] relative mt-6 '>
      <img
        src='/assets/icons/doctor.png'
        alt='scan'
        className='w-full h-auto z-10 relative block '
      />

      <img
        src='/assets/icons/big-star.png'
        alt='Landing scan'
        className={`block bg-cover  absolute top-[0%] left-[7%] z-0    ${className}`}
      />
    </div>
  );
};
