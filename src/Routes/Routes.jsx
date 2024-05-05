import {createBrowserRouter} from "react-router-dom";
import MainLoyout from "../Layout/MainLoyout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLoyout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        },
      ]
    },
  ]);

  export default router;