import React from 'react';
import Banner from '../../components/homepage/Banner';
import Stats from '../../components/homepage/Stats';
import TrendingApps from '../../components/homepage/TrendingApps';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    // const data = useLoaderData()
    // console.log('data', data)
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default HomePage;