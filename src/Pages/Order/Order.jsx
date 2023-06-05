import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageCover from '../Shared/PageCover/PageCover';
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../Shared/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories=['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category}=useParams();
    const initialIndex=categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    console.log(category);

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <PageCover img={orderImg} title={'Order Food'}></PageCover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='lg:grid lg:grid-cols-3 gap-4 mt-8'>
                        {
                            salad.map(item=> <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='lg:grid lg:grid-cols-3 gap-4 mt-8'>
                        {
                            pizza.map(item=> <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='lg:grid lg:grid-cols-3 gap-4 mt-8'>
                        {
                            soup.map(item=> <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='lg:grid lg:grid-cols-3 gap-4 mt-8'>
                        {
                            desserts.map(item=> <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='lg:grid lg:grid-cols-3 gap-4 mt-8'>
                        {
                            drinks.map(item=> <FoodCard
                            key={item._id}
                            item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;