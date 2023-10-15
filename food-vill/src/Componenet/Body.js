import React from 'react'
import Nav from './Nav'
import Main from './Main'
import About from './About'
import RestaurantMenu from './RestaurantMenu'
import Content from './Content'
import Error from './Error'
import { createBrowserRouter , Outlet } from 'react-router-dom'

export const Body = () => {
  return (
    <div>
           <Nav />
           {/* <Main /> */}
           <Outlet />
    </div>
  )
}

export const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body />,

    children : [
        {
            path:"/",
            element:<Main />,
        },

        {
            path:"/About",
            element:<About />,
        },
        {
            path:"/Content",
            element:<Content />,
        },
        {
          path:"/Restaurants/:resid",
          element:<RestaurantMenu />,
      },
    ],
    errorElement:<Error />
  }

])

