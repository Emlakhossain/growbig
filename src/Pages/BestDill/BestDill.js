import { useEffect, useState } from "react";
import DillProducts from "../DillProducts/DillProducts";


const BestDill = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('flashProducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className=' mx-auto w-4/5'>
            <h2 className='text-2xl'>FlashSale:{products.length}</h2>
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto">
                {products.map(product => <DillProducts
                    key={product.id}
                    product={product}
                ></DillProducts>)}
            </div>
        </div>
    );
};

export default BestDill;