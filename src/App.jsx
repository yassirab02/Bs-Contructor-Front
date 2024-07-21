import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './main';
// import { useTranslation } from 'react-i18next';

function App() {
  // const { t } = useTranslation();

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
