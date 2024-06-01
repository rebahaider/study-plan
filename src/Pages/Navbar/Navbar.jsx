import { NavLink } from "react-router-dom";


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
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;