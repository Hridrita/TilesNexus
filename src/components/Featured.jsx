import { getTrendingTiles } from '@/lib/data';
import React from 'react';
import FeaturedCard from './FeaturedCard';

const Featured = async() => {
    const trendingTiles = await getTrendingTiles();
    console.log(trendingTiles);
    return (
        <div>
            <h2 className='font-bold text-4xl text-center mt-17 text-[#5c4b36] animate__animated animate__fadeInDown animate__delay-3s'>Top-Tier Tiles for Elegant Spaces</h2>

            <div  className=" grid grid-cols-1 md:grid-cols-4 gap-3 mt-8">
                {
                trendingTiles.map(trend => <FeaturedCard key={trend.id} trend={trend}></FeaturedCard>)
            }
            </div>

            
        </div>
    );
};

export default Featured;