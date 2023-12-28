import React, { lazy ,Suspense} from 'react'
import Nav from './Nav'
import Main from './Main'
// import About from './About'
import RestaurantMenu from './RestaurantMenu'
// import Content from './Content'
import Error from './Error'
import { createBrowserRouter , Outlet } from 'react-router-dom'
// import Glosery from './Glosery'
import { Provider } from 'react-redux'
import appStore from '../Utils/appStore'

//lazy loading
//ondemand Loading
//chucking
//dynamic bundlind
//code splitting
// dynamic import

const Glosery=lazy(()=>import('./Glosery'));
const About=lazy(()=>import('./About'));
const Content=lazy(()=>import('./Content'))

export const Body = () => {
  return (

    <Provider store={appStore}>
    <div>
     
         <Nav />
           {/* <Main /> */}
           <Outlet />
    
          
    </div>
    </Provider>
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
            element:<Suspense fallback={<h1>Loading.....</h1>}><About /></Suspense>,
        },
        {
            path:"/Content",
            element:<Suspense fallback={<h1>Loading.......</h1>}><Content /></Suspense>,
        },
        {
          path:"/glosery",
          element: <Suspense fallback={<h1>Loading.....</h1>}>< Glosery /></Suspense>
        },
        {
          path:"/Restaurants/:resid",
          element:<RestaurantMenu />,
      },
    ],
    errorElement:<Error />
  }

])

