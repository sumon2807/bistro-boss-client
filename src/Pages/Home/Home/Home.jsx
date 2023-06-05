import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import OurManu from '../OurManu/OurManu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <OurManu></OurManu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;