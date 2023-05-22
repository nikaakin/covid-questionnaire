import { useLayout } from './useLayout';
import { Link, Outlet } from 'react-router-dom';
import { FormProvider } from 'react-hook-form';
import { Arrow } from '@/components';

export const Layout: React.FC = () => {
  let { page, previousPage, nextPage, form, handleSubmit, isValid, onSubmit } =
    useLayout();

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='pt-20 px-48 pb-32 min-w-min min-h-screen bg-gray-250 text-neutral-850 relative w-full font-helvetica-neue'
      >
        <header className='flex  justify-between text-4xl font-bold pb-6 border-b-[1.8px] border-neutral-850 items-center font-anonymous-pro'>
          <Link to='/'>
            <img
              src='/assets/icons/redberry.png'
              alt='Redberry Logo'
              className='h-6'
            />
          </Link>
          <span>{page + 1}/4</span>
        </header>

        <section className='flex-1  flex flex-row  justify-between gap-32'>
          <Outlet />
        </section>

        <footer className='w-36  z-20 flex justify-between items-center  absolute bottom-24 left-1/2 -translate-x-1/2 -translate-y-full  '>
          {page > 0 && (
            <button onClick={previousPage}>
              <Arrow className='rotate-180' />
            </button>
          )}
          {page < 3 && (
            <button onClick={nextPage} className='ml-auto ' type='submit'>
              <Arrow color={isValid ? undefined : '#8D8D8D'} />
            </button>
          )}
        </footer>
      </form>
    </FormProvider>
  );
};
