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

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/covid-politics',
    element: <CovidPolitics />,
  },
  {
    path: '/covid-state',
    element: <CovidState />,
  },
  {
    path: '/are-you-vaccinated',
    element: <AreYouVaccinated />,
  },
  {
    path: '/personal-info',
    element: <PersonalInfo />,
  },
  {
    path: '/thank-you',
    element: <ThankYou />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
