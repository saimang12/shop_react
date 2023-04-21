import React from 'react';


import MainSlide from './MainSlide';
import AllList from './AllList';


const Main = ({ shop }) => {

    return (
        <main>
            <MainSlide shop={shop} />
            <AllList shop={shop} />
        </main>
    )
}

export default Main