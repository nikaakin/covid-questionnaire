import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  AreYouVaccinated,
  CovidPolitics,
  CovidState,
  LandingPage,
  PersonalInfo,
  ThankYou,
} from '@/pages';
import {
  PageContext,
  PersonalInfoContextProvider,
  CovidStateProvider,
  CovidPoliticsProvider,
} from '@/context';
import { Layout } from '@/components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/personal-info',
        element: <PersonalInfo />,
      },
      {
        path: '/covid-state',
        element: <CovidState />,
      },
      {
        path: '/covid-politics',
        element: <CovidPolitics />,
      },
      {
        path: '/are-you-vaccinated',
        element: <AreYouVaccinated />,
      },
    ],
  },
  {
    path: '/thank-you',
    element: <ThankYou />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageContext>
      <PersonalInfoContextProvider>
        <CovidStateProvider>
          <CovidPoliticsProvider>
            <RouterProvider router={router} />
          </CovidPoliticsProvider>
        </CovidStateProvider>
      </PersonalInfoContextProvider>
    </PageContext>
  </React.StrictMode>
);
