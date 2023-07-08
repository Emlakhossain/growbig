import React from 'react';
import Baner from '../Baner/Baner';
import ByNow from '../ByNow/ByNow';
import Group from '../Group/Group';
import BestDill from '../BestDill/BestDill';

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <ByNow></ByNow>
            <Group></Group>
            <BestDill></BestDill>
        </div>
    );
};

export default Home;