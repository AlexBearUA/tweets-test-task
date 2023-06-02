import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import css from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={css.Container}>
      <AppBar />
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 1000,
        }}
      />
    </div>
  );
};
