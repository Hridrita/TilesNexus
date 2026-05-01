import TilesCard from '@/components/TilesCard';
import { getAllTiles } from '@/lib/data';
import React from 'react';

const AllTilesPage = async() => {
    const allTiles = await getAllTiles();
    console.log(allTiles);


    return (
        <div>

            <div className='grid grid-cols-1 gap-3 container mx-auto'>
                {
                    allTiles.map(tiles => <TilesCard key={tiles.id} tiles={tiles}></TilesCard>)
                }
            </div>
        </div>
    );
};

export default AllTilesPage;