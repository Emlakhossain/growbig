import React from 'react';
import banner1 from '../../image/banner.jpg';

const Baner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src={banner1} class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={banner1} class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={banner1} class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src={banner1} class="w-full" />
                </div>
            </div>

        </div>
    );
};

export default Baner;