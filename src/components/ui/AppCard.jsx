import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa6';

const AppCard = ({app}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm border-1 p-5 rounded-2xl">
            <figure>
                <img
                    src={app.image}
                    alt={app.title}
                    className='w-50' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
                <div className='flex justify-between items-center'>
                    <span className='flex justify-start items-center gap-2'><FaDownload className='text-green-500'></FaDownload>{app.downloads}</span>
                    <div className='flex justify-start items-center gap-2 bg-yellow-300 p-2 rounded-lg text-black'><FaStar></FaStar>{app.ratingAvg}</div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;