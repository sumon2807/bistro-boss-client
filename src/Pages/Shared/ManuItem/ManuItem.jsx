import React from 'react';

const ManuItem = ({item}) => {
    const {name,recipe,image,price}=item;
    return (
        <div className='lg:flex justify-center items-centerflex space-x-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px] h-[100px]' src={image} alt="" />
            <div>
                <h3 className=' uppercase font-semibold'>{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default ManuItem;