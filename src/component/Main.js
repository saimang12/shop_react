import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainSlide from './MainSlide';
import AllList from './AllList';
import Detail from './Detail';

const Main = ({ shop }) => {
    console.log(shop)
    return (
        <main>
            <MainSlide shop={shop} />
            <AllList shop={shop} />
        </main>
    )
}

export default Main