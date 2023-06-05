import React from 'react';
import ManuItem from '../../Shared/ManuItem/ManuItem';
import PageCover from '../../Shared/PageCover/PageCover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title }) => {
    return (
        <div className='my-10'>
            {title && <PageCover img={img} title={title} ></PageCover>}
            <div className='lg:grid lg:grid-cols-2 gap-4'>
                {
                    items.map(item => <ManuItem
                        key={item._id}
                        item={item}
                    ></ManuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4 mt-4'>ORDER YOUR FAVOURITE FOOD</button></Link>
        </div>
    );
};

export default MenuCategory;