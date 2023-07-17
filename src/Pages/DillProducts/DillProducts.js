import React from 'react';
import { Link } from 'react-router-dom';

const DillProducts = ({ product }) => {
    const { name, imgUrl, price, stock, id } = product;
    return (
        <>
            <Link to={`product/${id}`}>
                <div className="card w-68 bg-base-100 shadow-xl mt-5">
                    <figure><img src={imgUrl} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-secondary">new</div>
                        </h2>
                        <p>Price: {price} TK</p>
                        <p>Stock: {stock}</p>
                    </div>

                </div>
            </Link>
        </>
    );
};

export default DillProducts;