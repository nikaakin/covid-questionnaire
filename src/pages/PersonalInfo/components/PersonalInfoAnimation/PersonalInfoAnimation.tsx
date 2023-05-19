import { useTransitionClass } from '@/hooks';

export const PersonalInfoAnimation = () => {
  const className = useTransitionClass('personal-info');
  return (
    <div className='basis-[60%] relative '>
      <img
        src='/assets/icons/scan.png'
        alt='scan'
        className='w-full h-auto z-10 relative '
      />

      <img
        src='/assets/icons/rect.png'
        alt='Landing scan'
        className={`block bg-cover  absolute top-40 left-1/2 z-0  max-h-12 -translate-x-1/2 ${className}`}
      />
    </div>
  );
};
