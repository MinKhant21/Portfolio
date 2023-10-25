import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout/Layout";
import About from "../pages/About";
import Projects from "../pages/Projects";
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
            }
        ]
    }
])

export default router