import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'

const Layout = ({ cateList, shop, setSearch }) => {
    return (
        <div className="Wrap">
            <Header cateList={cateList} shop={shop} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout