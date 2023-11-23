import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout/Layout";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Eduction from "../pages/Eduction";
const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'projects',
                element:<Projects/>
            },
            {
                path:'eduction',
                element:<Eduction/>
            }
        ]
    }
])

export default router