import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Projects from './components/Projects';
import Technologies from './components/Technologies.jsx';
import AboutMe from './components/Aboutme.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path:"/",element:<App />},
  {path:"/projects",element:<Projects></Projects>},
  {path:"/technologies",element:<Technologies></Technologies>},
  {path:"/aboutme",element:<AboutMe></AboutMe>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
