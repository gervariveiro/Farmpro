import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createHashRouter, RouterProvider } from 'react-router-dom';


import './assets/App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contacto";

const router = createHashRouter([
  {path:'/',
   element:<Home />},

   {path:'/About',
   element:<About />},

   
   {path:'/Products',
   element:<Products />},

   
   {path:'/Contact',
   element:<Contact />},
]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

