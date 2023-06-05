import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageCover from '../../Shared/PageCover/PageCover';
import menuImage from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu]=useMenu();
    const desserts=menu.filter(item=> item.category === 'dessert');
    const soup=menu.filter(item=> item.category === 'soup');
    const pizza=menu.filter(item=> item.category === 'pizza');
    const salad=menu.filter(item=> item.category === 'salad');
    const offered=menu.filter(item=> item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            {/* main cover */}
            <PageCover img={menuImage} title="Our Menu" ></PageCover>
            {/* offered menu items */}
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert section */}
            <MenuCategory items={desserts} title={'dessert'} img={desertImg}></MenuCategory>
            {/* pizza items */}
            <MenuCategory items={pizza}  title={'pizza'} img={pizzaImg}></MenuCategory>
            {/* soup items */}
            <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
            {/* salad items */}
            <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
        </div>
    );
};

export default Menu;