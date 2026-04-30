import React from 'react';
import Marquee from 'react-fast-marquee';

const TilesUpdate = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-100 py-4 px-2 container mx-auto'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={100}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quae nemo quasi eligendi exercitationem excepturi ab est cumque, ut in natus. Quasi, iure magnam sunt unde dolorem obcaecati autem voluptates?
            </Marquee>
        </div>
    );
};

export default TilesUpdate;