import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout/Layout";
const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>
    }
])

export default router