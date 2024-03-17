import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import './index.css'  // This doesn't exist yet

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <Error />,
      children: [
         {
            index: true,
            element: <About />,
         },
         {
            path: '/Portfolio',
            element: <Portfolio />,
         },
         {
            path: '/Contact',
            element: <Contact />,
         },
         {
            path: '/Resume',
            element: <Resume />,
         },
         {
            path: '/*',
            element: <About />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
);
