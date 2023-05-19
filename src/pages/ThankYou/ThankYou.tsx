import { useTransitionClass } from '@/hooks';

export const ThankYou = () => {
  const [className, anotherClassName] = useTransitionClass(
    'thank-you',
    'thank-you-another'
  );

  return (
    <div className='bg-neutral-850 w-screen h-screen'>
      <h1 className='absolute text-white font-bold text-6xl  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 letter-spacing '>
        მადლობა
        <img
          src='/assets/icons/star.png'
          alt='star'
          className={`block bg-cover  absolute -top-20 left-20   h-14 w-14 ${className}`}
        />
        <img
          src='/assets/icons/star.png'
          alt='star'
          className={`block bg-cover  absolute -bottom-10 right-10  h-8 w-8 ${anotherClassName}`}
        />
      </h1>
    </div>
  );
};
