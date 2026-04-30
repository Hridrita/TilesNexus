import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import TilesUpdate from '@/components/TilesUpdate';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <NavBar></NavBar>
            <TilesUpdate></TilesUpdate>
            {children}
            <Footer></Footer>
        </>
    );
};

export default MainLayout;