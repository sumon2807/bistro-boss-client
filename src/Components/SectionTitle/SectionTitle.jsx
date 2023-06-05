import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=' max-w-md mx-auto text-center my-10'>
            <p className='text-yellow-500 pb-2'>---{subHeading}---</p>
            <h3 className='text-4xl font-bold uppercase border-y-4 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;