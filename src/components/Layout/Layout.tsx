import { Arrow } from '@/assets/Arrow';
import { useLayout } from './useLayout';
import { Link, Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export const Layout: React.FC = () => {
  let { page, previousPage, nextPage, name, nodeRef, show } = useLayout();

  return (
    <main className='pt-20 px-48 pb-24  min-w-max min-h-screen bg-gray-250 text-neutral-850 flex flex-col '>
      <header className='flex justify-between text-4xl font-bold pb-6 border-b-[1.8px] border-neutral-850 items-center font-anonymous-pro'>
        <Link to='/'>
          <img
            src='/assets/icons/redberry.png'
            alt='Redberry Logo'
            className='h-6'
          />
        </Link>
        <span>{page + 1}/4</span>
      </header>
      <section className='flex-1 flex flex-row  justify-between gap-24'>
        {/* <CSSTransition
          key={name}
          nodeRef={nodeRef}
          timeout={500}
          in={show}
          classNames={name}
          unmountOnExit
          mountOnEnter
        > */}
        <Outlet context={nodeRef} />
        {/* </CSSTransition> */}
      </section>
      <footer className='w-36 flex justify-between items-center  self-center'>
        {page > 0 && (
          <button onClick={previousPage}>
            <Arrow rotate />
          </button>
        )}
        {page < 3 && (
          <button onClick={nextPage} className='ml-auto '>
            <Arrow color={true ? undefined : '#8D8D8D'} />
          </button>
        )}
      </footer>
    </main>
  );
};
