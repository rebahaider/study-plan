import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AllStudyInfo from "../Pages/Home/StudySection/AllStudyInfo/AllStudyInfo";
import PrivateRoutes from "./PrivateRoutes";
import UserDashboard from "../Layout/UserDashboard";
import Booking from "../Pages/UserDashboard/Booking";
import ErrorPages from "../Pages/ErrorPages/ErrorPages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allStudyInfo/:id',
                element: <PrivateRoutes><AllStudyInfo></AllStudyInfo></PrivateRoutes>
            }

        ]

    },
    {
        path: "userDashboard",
        element: <UserDashboard></UserDashboard>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: "booking",
                element: <Booking></Booking>
            }
        ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]);