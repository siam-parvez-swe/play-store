import React from 'react';
import logoImg from '../../assets/images/logo.png'
import { Link } from 'react-router';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-1'>
                    <img src={logoImg} alt="" className='w-8' />
                    <h1>HERO .IO</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1>Social Links</h1>
                    <div className='flex  items-center gap-2 text-lg'>
                        <Link className=''><FaFacebook></FaFacebook></Link>
                        <Link className=''><FaLinkedin></FaLinkedin></Link>
                        <Link className=''><FaTwitter></FaTwitter></Link>
                    </div>
                </div>

            </div>
            <div className='border-b my-10 border-dashed text-gray-500'></div>
            <div>
                <p className='text-2xl text-center text-gray-500'>Copyright @ 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;