import React from 'react';
import { useLayout } from './useLayout';

export const Layout: React.FC = () => {
  const { outlet, page, previousPage, nextPage } = useLayout();

  return (
    <main className='pt-20 px-48 pb-24  min-w-max min-h-screen bg-gray-250 text-neutral-850 flex flex-col '>
      <header className='flex justify-between text-4xl font-bold pb-6 border-b-[1.8px] border-neutral-850 items-center font-anonymous-pro'>
        <img
          src='/assets/icons/redberry.png'
          alt='Redberry Logo'
          className='h-6'
        />
        <span>{page + 1}/4</span>
      </header>
      <section className='flex-1 flex flex-row  justify-between gap-24'>
        {outlet}
      </section>
      <footer className='w-36 flex justify-between items-center  self-center'>
        {/* //TODO some styling if form is not yet validated */}
        {page > 0 && (
          <button onClick={previousPage}>
            <img
              src='/assets/icons/arrow.png'
              alt='Back'
              className='rotate-180 w-3 h-5 '
            />
          </button>
        )}
        {page < 3 && (
          <button onClick={nextPage} className='ml-auto'>
            <img
              src='/assets/icons/arrow.png'
              alt='Next'
              className='w-3 h-5 '
            />
          </button>
        )}
      </footer>
    </main>
  );
};
