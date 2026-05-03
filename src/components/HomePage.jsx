import React from 'react';
import TilesUpdate from './TilesUpdate';
import Image from 'next/image';
import BannerImg from "@/assests/textured-stone-wall-with-warm-accent-lighting.jpg"
import Link from 'next/link';
import Featured from './Featured';

const HomaPage = () => {
    return (
        <div className='container mx-auto max-w-7xl'>
            
            
            <div className='relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl mt-8'>
                <Image 
                    src={BannerImg} 
                    alt="banner" 
                    fill 
                    className='object-cover object-center' 
                    priority 
                />
                <div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6'>
                    <h1 className='text-white text-3xl md:text-5xl font-bold drop-shadow-lg animate__animated animate__fadeInDown'>
                        Discover Your Perfect Aesthetic
                    </h1>
                    <p className='text-gray-200 mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md animate__animated animate__fadeInDown animate__delay-1s'>
                        Explore our premium collection of textured stones and ceramic tiles at TilesNexus.
                    </p>
                    <Link href={"/AllTiles"} className='mt-8 px-6 py-3 bg-[#f17c13] text-white rounded-full font-semibold hover:bg-[#f37c66] transition-all animate__animated animate__fadeInDown animate__delay-2s'>
                        Browse Now
                    </Link>
                </div>
            </div>
            <TilesUpdate></TilesUpdate>
            <Featured></Featured>
        </div>
    );
};

export default HomaPage;