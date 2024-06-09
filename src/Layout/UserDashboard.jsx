import { NavLink, Outlet } from "react-router-dom";

const UserDashboard = () => {
    return (
        <div className="md:flex">
            
            <div className="md:w-64 md:min-h-screen bg-blue-400 p-4 font-bold">
                <ul className=" flex md:menu gap-4">
                    <li><NavLink to="/userDashboard/booking">Booking Session</NavLink></li>
                    <li><NavLink to="/userDashboard/createNote">Create Note</NavLink></li>
                    <li><NavLink to="/userDashboard/personalNotes">Manage Personal Notes</NavLink></li>
                    <li><NavLink to="/userDashboard/studyMaterials">View Study Materials</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 m-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserDashboard;