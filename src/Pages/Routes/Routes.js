import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import About from "../About/About";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ProductInfo from "../ProductInfo";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: '/product/:productId',

                loader: async ({ params }) => {
                    return fetch(`http://localhost:3000/product/${params.productId}`)
                },
                element: <ProductInfo></ProductInfo>
            },

            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },


        ]
    },
])

export default router;