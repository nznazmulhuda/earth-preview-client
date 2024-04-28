import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from './PrivateRoute'
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import UpdateTouristSpot from "../Pages/UpdateTouristSpot/UpdateTouristSpot";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/add-tourists-spot",
                element: <PrivateRoute>
                    <AddTouristsSpot />
                </PrivateRoute>
            },
            {
                path: "/update-tourists-spot",
                element: <PrivateRoute>
                    <UpdateTouristSpot />
                </PrivateRoute>
            }
        ]
    }
])

export default Router;