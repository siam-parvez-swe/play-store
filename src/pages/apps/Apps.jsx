import React, { useEffect, useState } from 'react';
import AppCard from '../../components/ui/AppCard';
import { PacmanLoader } from 'react-spinners';
import useApps from '../../hooks/useApps';

const Apps = () => {
    const {apps, loading} = useApps()
    // console.log("Obj", obj)
    // const [apps, setApps] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('/data.json');
    //         const data = await res.json();
    //         // console.log("Data", data)
    //         // setTimeout(() => {
    //             setApps(data)
    //             setLoading(false)
    //         // }, 5000)
    //     };
    //     fetchData()
    // }, [])
    
    return (
        <div className='container mx-auto my-10'>
            <div className='text-center'>
                <h1 className='text-4xl'>Our All Applications</h1>
                <p className='text-gray-400 my-3 text-lg'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div>
                {loading ?
                    (
                        <div className='flex justify-center items-center my-20'>
                            <PacmanLoader color="#1ed2ac"></PacmanLoader>
                        </div>
                    ) :
                    (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10'>
                        {
                            apps.map((app, ind) => {
                                return (
                                    <AppCard key={ind} app={app}></AppCard>
                                )

                            })
                        }
                    </div>)}
            </div>

        </div>
    );
};

export default Apps;