import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ManuItem from '../../Shared/ManuItem/ManuItem';
import useMenu from '../../../hooks/useMenu';

const OurManu = () => {
    const [menu]=useMenu();
    const popular=menu.filter(item=> item.category === 'popular');
    return (
        <section className='lg:mb-12'>
            <SectionTitle
            subHeading='Check it out'
            heading='FROM OUR MENU'
            ></SectionTitle>
            <div className='lg:grid lg:grid-cols-2 gap-4'>
                {
                    popular.map(item=> <ManuItem
                    key={item._id}
                    item={item}
                    ></ManuItem>)
                }
            </div>
            <button className='btn btn-outline border-0 border-b-4 mt-8'>View Our Full Menu</button>
        </section>
    );
};

export default OurManu;