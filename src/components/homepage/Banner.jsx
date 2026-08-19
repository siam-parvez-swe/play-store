import React from 'react';
import bannerImg from '../../assets/images/hero.png'
const Banner = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='text-center flex flex-col gap-5'>
                <h1 className='text-5xl font-bold'>We Build</h1>
                <h1 className='text-5xl font-bold'> <span className='text-blue-400'>Productive</span> Apps</h1>
                <p className='text-gray-500'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, <br /> and more exciting.Our goal is to turn your ideas into digital experiences that truly make <br /> an impact.</p>
                <div className='flex justify-center items-center gap-5'>
                    <button className='btn btn-accent'>Google Play</button>
                    <button className='btn btn-accent'>App Store</button>
                </div>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;