import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
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
                <img src="/public/logo.jpeg" className="rounded-full w-20 h-20 border-4 mr-4" alt="website logo" />
                <a className="font-bold text-xl">Collaborative Study Platform</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* sign up button */}
                <Link to='/register' className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Sign Up</span>
                </Link>
                {/* login button */}
                <Link to='/login' className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                    </span>
                    <span className="relative text-white">Log in</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;