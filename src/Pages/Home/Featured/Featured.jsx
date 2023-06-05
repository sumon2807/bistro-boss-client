import React from 'react';
import moment from 'moment';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import feturedImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className='featured-item pt-8 my-20 bg-fixed'>
            <SectionTitle subHeading="Check it out" heading="FROM OUR MENU"></SectionTitle>
            <div className='lg:flex justify-center items-center gap-8 pb-20 pt-12 px-36 text-white'>
                <div>
                    <img className='rounded-xl' src={feturedImg} alt="" />
                </div>
                <div>
                    <p>{moment().format('MMMM Do YYYY')}</p>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-8'>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;