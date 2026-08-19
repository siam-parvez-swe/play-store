import React, { use, useEffect, useState } from 'react';


const appsPromise = fetch('/data.json').then((res) => res.json())

const TrendingApps = () => {
    // const apps = use(appsPromise)
    // console.log(apps)
    const [apps, setApps] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            console.log("Data", data)
            setApps(data)
        };
        fetchData()
    }, [])
    console.log("Apps", apps)
    return (
        <div className='container mx-auto my-10 '>
            <div>
                <h2 className='text-3xl font-semibold text-center text-purple-500 my-5'>Our All Applications</h2>
                <p className='text-gray-500 text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus <br /> reprehenderit id, corrupti doloribus quasi magni perspiciatis distinctio, dicta <br />ipsam, nesciunt nobis magnam blanditiis!</p>
            </div>
            <p>{apps.length}</p>
        </div>
    );
};

export default TrendingApps;