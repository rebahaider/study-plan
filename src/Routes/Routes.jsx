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
import CreateNotes from "../Pages/UserDashboard/CreateNotes";
import ManageNotes from "../Pages/UserDashboard/ManageNotes";
import UpdateNote from "../Pages/UserDashboard/UpdateNote";
import Payment from "../Pages/UserDashboard/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPages></ErrorPages>,
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
        children: [
            {
                path: "booking",
                element: <Booking></Booking>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path: "notes",
                element: <CreateNotes></CreateNotes>
            },
            {
                path: "manageNotes",
                element: <ManageNotes></ManageNotes>
            },
            {
                path: "updateNote/:id",
                element: <UpdateNote></UpdateNote>,
                loader: ({ params }) => fetch(`https://assignment-12-server-one-flax.vercel.app/notes/${params.id}`)
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