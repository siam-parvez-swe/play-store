import React, { useEffect, useState } from 'react';

import AppCard from '../ui/AppCard';
import { Link } from 'react-router';
import useApps from '../../hooks/useApps';


// const appsPromise = fetch('/data.json').then((res) => res.json())

const TrendingApps = () => {
    // const apps = use(appsPromise)
    // console.log(apps)
    const {apps, loading} = useApps()
    // const [apps, setApps] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('/data.json');
    //         const data = await res.json();
    //         // console.log("Data", data)
    //         // setTimeout(() => {
    //         setApps(data)
    //         setLoading(false)
    //         // }, 5000)
    //     };
    //     fetchData()
    // }, [])
    // console.log("Apps", apps)
    return (
        <div className='container mx-auto my-10 '>
            <div>
                <h2 className='text-3xl font-semibold text-center text-purple-500 my-5'>Our All Applications</h2>
                <p className='text-gray-500 text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus <br /> reprehenderit id, corrupti doloribus quasi magni perspiciatis distinctio, dicta <br />ipsam, nesciunt nobis magnam blanditiis!</p>
            </div>
            {loading ?
                (<progress className="progress text-center mt-10"></progress>) :
                (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10'>
                    {
                        apps.slice(0, 9).map((app, ind) => {
                            return (
                                <AppCard key={ind} app={app}></AppCard>
                            )

                        })
                    }
                </div>)}
            <div className='text-center'>
                <Link to={"/apps"}>
                    <button className='btn btn-active text-lg px-7 py-3'>View All</button>
                </Link>
            </div>

        </div>
    );
};

export default TrendingApps;