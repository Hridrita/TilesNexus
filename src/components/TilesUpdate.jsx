import { getAllTiles } from '@/lib/data';
import React from 'react';
import Marquee from 'react-fast-marquee';

const TilesUpdate = async() => {
    const tiles = await getAllTiles();
    console.log(tiles);

    return (
        <div className='flex justify-between gap-4 items-center bg-gray-100 py-4 px-2 container mx-auto mt-4'>
            <button className='btn bg-[#f17c13] text-white'>Tiles Update</button>

            
            <Marquee pauseOnHover={true} speed={100} gradient={false}>
                {
                    tiles.map((tile, ind) => (
                        <span key={ind} className="mx-4 font-medium text-[#5c4b36]">
                            New Arrival:{tile.title} <span className="ml-4">|</span> 
                            <span className='mx-4'>{tile.description}</span> <span className="ml-4">|</span>
                        </span>
                    ))
                }
            </Marquee>
            
        </div>
    );
};

export default TilesUpdate;