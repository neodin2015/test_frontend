import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/router';
import { ThemeProvider } from './providers';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
