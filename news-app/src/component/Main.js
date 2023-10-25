import Nav from "./Nav"
import Body from "./Body"
import {createBrowserRouter ,Outlet} from 'react-router-dom'
import Entertainment from './Entertainment'
import General from "./General"



export const Main=()=>{
    return(
        <div>

            <Nav />
            {/* <Body /> */}
            <Outlet />
           
            

        </div>
    )
}

export const AppRouter=createBrowserRouter([
    {
      path:"/",
      element:<Main />,
  
      children : [
          {
              path:"/",
              element:<Body category="sports"/>,
          },
  
          {
              path:"/Entertainment",
              element:<Body category="Entertainment" />,
          },
          {
            path:"/General",
            element: <Body category="General" />,
          },
          {
            path:"/Business",
            element: <Body category="Business" />,
          },
          {
            path:"/Health",
            element: <Body category="Health" />,
          },
          {
            path:"/Science",
            element: <Body category="Science" />,
          },
          {
            path:"/Sports",
            element: <Body category="Sports" />,
          },
          {
            path:"/Technology",
            element: <Body category="Technology" />,
          },
          // {
          //   path: "/Home",
          //   element: <Home />
          // }

        //   {
        //       path:"/Content",
        //       element:<Content />,
        //   },
        //   {
        //     path:"/Restaurants/:resid",
        //     element:<RestaurantMenu />,
        // },
      ],
      
    },
  
  
  ])
  