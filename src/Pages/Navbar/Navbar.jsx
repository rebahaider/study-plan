import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: "User Log Out Successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            })
            .catch(error => console.log(error))
    }
    const navLinks = <>
        <NavLink to='/'><li className="btn btn-ghost">Home</li></NavLink>
        <NavLink to='/'><li className="btn btn-ghost">Home</li></NavLink>
        <NavLink to='/'><li className="btn btn-ghost">Home</li></NavLink>
    </>
    return (
        <div className="navbar bg-[#5BBF96]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img src="/public/logo.jpeg" className="rounded-full w-10 md:w-20 h-10 md:h-20  border-4 mr-4" alt="website logo" />
                <a className="font-bold md:text-xl">Collaborative Study Platform</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user ?
                            <div className="items-center flex gap-4">
                                <div className="dropdown dropdown-end mr-3">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="User Profile" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                                        <li>Name:{user?.displayName}</li>
                                        <li>Email:{user?.email}</li>
                                    </ul>
                                </div>
                                {/* dashboard button */}
                                <Link to='userDashboard/booking' className="px-1 md:px-5 md:py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">Dashboard</span>
                                </Link>
                                {/* logout button */}
                                <Link to='/login' className="relative inline-flex items-center justify-center inline-block  md:p-4 md:px-5 md:py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                    </span>
                                    {/* <span className="relative text-white">Log in</span> */}

                                    <button onClick={handleLogout} className="relative text-white" >Log Out</button>
                                </Link>

                            </div> :

                            <div className="flex items-center gap-4">
                                {/* sign up button */}
                                <Link to='/register' className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">Sign Up</span>
                                </Link>
                                {/* login button */}
                                <Link to='/login' className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                    </span>
                                    {/* <span className="relative text-white">Log in</span> */}

                                    <button className="relative text-white" >Log In</button>
                                </Link>

                            </div>

                    }

                </div>

            </div >
        </div >
    );
};

export default Navbar;