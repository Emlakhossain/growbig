import React from 'react';
import discount from '../../image/discount.jpg';

const ByNow = () => {
    return (
        <div className='my-10'>
            <div className='flex justify-between bg-warning mx-40 p-10 rounded-full'>
                <div className='flex ustify-between gap-2'>
                    <img className='w-10' src={discount} alt="" />
                    <img className='w-10' src={discount} alt="" />

                </div>
                <div className=''>
                    <button className='btn btn-info rounded-full hover:bg-sky-700'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default ByNow;