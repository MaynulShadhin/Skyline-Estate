import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Firebase Provider/FirebaseProvider";

const Navbar = () => {

    const { logout, user } = useContext(AuthContext)

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'border-b-2 border-lime-500 text-xl px-4 py-2 text-lime-500 hover:bg-lime-500 hover:text-white' : 'text-xl px-4 py-2 hover:bg-lime-500 hover:text-white'}>Home</NavLink></li>
        <li><NavLink to="/service" className={({ isActive }) => isActive ? 'border-b-2 border-lime-500 text-xl px-4 py-2 text-lime-500 hover:bg-lime-500 hover:text-white ' : 'text-xl px-4 py-2 hover:bg-lime-500 hover:text-white'}>Our Services</NavLink></li>
        {
            user && <li><NavLink to="/updateProfile" className={({ isActive }) => isActive ? 'border-b-2 border-lime-500 text-xl px-4 py-2 text-lime-500 hover:bg-lime-500 hover:text-white' : 'text-xl px-4 py-2 hover:bg-lime-500 hover:text-white'}>Update Profile</NavLink></li>
        }
    </>

    return (
        <div className="navbar bg-gray-100 my-5 lg:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 w-52">
                        {navLinks}
                    </ul>
                </div>
                <h2 className="text-2xl font-bold">Skyline Estate</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex items-center gap-2">
                        <div className="w-11 h-11">
                            <img title={user?.displayName
                            } className="w-full rounded-full h-full" src={user?.photoURL || "https://i.ibb.co/Wyry2pC/user.png"} alt="" />
                        </div>
                        <div>
                            <button onClick={logout} className="btn btn-error">Logout</button>
                        </div>
                    </div> :
                        <Link to="/login"><button className="btn px-8 bg-lime-500 outline-none border-none text-white hover:bg-lime-600">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;