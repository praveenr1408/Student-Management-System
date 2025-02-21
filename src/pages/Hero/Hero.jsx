import React, { useState } from 'react';
import { FaBuilding } from "react-icons/fa";

import MenuCard from '../../components/MenuCard/MenuCard';
import Footer from '../../components/Footer/Footer';
import { DialogDefault } from '../../components/DialogDefault/DialogDefault';

function Hero() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState(""); // Track selected menu item 

    const collegeName = 'Pioneer Kumaraswamy College';

    const menuCardProps = [
        { icon: <FaBuilding />, title: 'Department', color: 'blue' },
    ];

    function handleMenuClick(title) {
        setSelectedTitle(title);
        setIsDialogOpen(true);
    }

    return (
        <section className='w-full flex flex-col items-center justify-center'>
            {/* Header section */}
            <header className='bg-black shadow-md w-full py-[20px] flex flex-col justify-center items-center font-bold sticky top-0 z-10'>
                <h1 className='text-[18px] text-white md:text-2xl'>{collegeName.toUpperCase()}</h1>
            </header>

            {/* Main section */}
            <main className='mt-[20px] w-[90%] flex flex-col items-center py-5'>

                {/* Student management title section */}
                <section className='w-full h-[50px] flex justify-center'>
                    <p className='text-[14px] font-semibold'>Student Management System</p>
                </section>

                {/* Menu cards section */}
                <section className='w-full flex flex-row flex-wrap justify-center gap-5'>
                    {menuCardProps.map((properties) => (
                        <MenuCard 
                            key={properties.title}  
                            onClick={() => handleMenuClick(properties.title)} 
                            menuCardProps={properties} 
                        />
                    ))}
                </section>

                {/* Dialog Component */}
                {isDialogOpen && <DialogDefault title={selectedTitle} open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />}

            </main>


            <footer>
                <Footer />
            </footer>
        </section>
    );
}

export default Hero;
