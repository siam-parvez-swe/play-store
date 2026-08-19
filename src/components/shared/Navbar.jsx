import React from 'react';
import logoImg from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div className='bg-gray-900 sticky'>
            <nav className='container mx-auto py-5 flex justify-between items-center '>
                <Link to={'/'} className='flex justify-start items-center gap-3'>
                    <img src={logoImg} alt="Logo" className='w-10' />
                    <p className='text-gradi'>HERO.IO</p>
                </Link>
                <ul className='flex justify-center items-center gap-4'>
                    <li>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "text-blue-600" : 'text-white'}`}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/apps'} className={({ isActive }) => `${isActive ? "text-blue-600" : 'text-white'}`}>Apps</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/installApps'} className={({ isActive }) => `${isActive ? "text-blue-600" : 'text-white'}`}>Installation</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard'} className={({ isActive }) => `${isActive ? "text-blue-600" : 'text-white'}`}>Dashboard</NavLink>
                    </li>
                </ul>
                <div>
                    <button className='btn btn-primary flex justify-between items-center gap-2'><FaGithub></FaGithub> Contribute</button>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;