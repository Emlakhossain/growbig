import React from 'react';
import mart from '../../image/mart.jpg';

const Group = () => {
    return (
        <div>
            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto justify-items-center mb-2'>
                <div className='flex gap-2 items-center hover:border hover:rounded-full hover:px-2 hover:cursor-pointer'>
                    <p>
                        <img className='w-10 rounded-full' src={mart} alt="" />
                    </p>
                    <h2 className='font-bold'>MART</h2>

                </div>
                <div className='flex gap-2 items-center hover:border hover:rounded-full hover:px-2 hover:cursor-pointer' >
                    <p>
                        <img className='w-10 rounded-full' src={mart} alt="" />
                    </p>
                    <h2 className='font-bold'>beauty & Glamor</h2>

                </div>
                <div className='flex gap-2 items-center hover:border hover:rounded-full hover:px-2 hover:cursor-pointer'>
                    <p>
                        <img className='w-10 rounded-full' src={mart} alt="" />
                    </p>
                    <h2 className='font-bold'>Fashion</h2>

                </div>
                <div className='flex gap-2 items-center hover:border hover:rounded-full hover:px-2 hover:cursor-pointer'>
                    <p>
                        <img className='w-10 rounded-full' src={mart} alt="" />
                    </p>
                    <h2 className='font-bold'>House Makeovers</h2>

                </div>
            </div>
        </div>
    );
};

export default Group;