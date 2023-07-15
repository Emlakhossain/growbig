import React, { useEffect, useState } from 'react';

const BestDill = () => {

    const [products, useProducts] = useState();

    useEffect(() => {
        fetch('/flashProducts.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className=' mx-auto w-4/5'>
            <h2 className='text-2xl'>FlashSale</h2>
            <div>
                <h2>this is {products}</h2>
            </div>
        </div>
    );
};

export default BestDill;