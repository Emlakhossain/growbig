import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductInfo = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            <h2>This is product info page</h2>
        </div>
    );
};

export default ProductInfo;