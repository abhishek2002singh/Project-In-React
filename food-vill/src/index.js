import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Body} from './Componenet/Body';
import { AppRouter } from './Componenet/Body';
import { RouterProvider, } from 'react-router-dom';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>)



 


