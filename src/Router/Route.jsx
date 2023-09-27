import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donations from "../pages/Donations/Donations";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Category from "../pages/Categroy/Category";





const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:() =>fetch('/categories.json')
            },
            {
                path: "/donations",
                element: <Donations></Donations>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader:() =>fetch('/categories.json')
            },
            {
                path: "/categoris/:id",
                element: <Category></Category>,
                loader: () => fetch('/categories.json')
            }
        ]
    }
])

export default myCreatedRoute;