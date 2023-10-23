import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout/Layout";
import About from "../pages/About";
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
            }
        ]
    }
])

export default router