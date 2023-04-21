import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'
import CartNav from './component/CartNav'

const Layout = ({ cateList, shop, setSearch }) => {
    return (
        <div className="Wrap">
            <Header cateList={cateList} shop={shop} setSearch={setSearch} />
            <Outlet />
            <Footer />
            <CartNav />
        </div>
    )
}

export default Layout