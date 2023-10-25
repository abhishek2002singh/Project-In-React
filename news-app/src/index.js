import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Main} from './component/Main';
import { AppRouter } from './component/Main';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <Main />

// );

root.render(<RouterProvider router={AppRouter} />)


