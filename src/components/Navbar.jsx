import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'border-b-2 border-lime-500 text-xl px-4 py-2 text-lime-500 hover:bg-lime-500 hover:text-white hover:rounded-xl' : 'text-xl px-4 py-2 hover:bg-lime-500 hover:text-white hover:rounded-xl'}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'border-b-2 border-lime-500 text-xl px-4 py-2 text-lime-500 hover:bg-lime-500 hover:text-white hover:rounded-xl' : 'text-xl px-4 py-2 hover:bg-lime-500 hover:text-white hover:rounded-xl'}>User Profile</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'border-b-2 border-lime-500 text-xl px-4 py-2 text-lime-500 hover:bg-lime-500 hover:text-white hover:rounded-xl' : 'text-xl px-4 py-2 hover:bg-lime-500 hover:text-white hover:rounded-xl'}>Update Profile</NavLink></li>
    </>

    return (
        <div className="navbar bg-gray-100 my-5 lg:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 w-52">
                        <li>Home</li>
                        <li>User Profile</li>
                        <li>Update Profile</li>
                    </ul>
                </div>
                <h2 className="text-2xl font-bold">Skyline Estate</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-accent">Login</a>
            </div>
        </div>
    );
};

export default Navbar;