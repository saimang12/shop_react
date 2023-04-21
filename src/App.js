import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./component/Main";
import { useEffect, useState } from "react";
import axios from "axios";
import CateList from "./component/CateList";
import Detail from "./component/Detail";
import Cart from "./component/Cart";

const App = () => {

    const url = 'https://desipossa.github.io/shop_cra/assets/data.json';
    const [num, setNum] = useState(1)
    const [shop, setShop] = useState([]);
    const [cart, setCart] = useState([])

    const getData = async () => {
        const r = await axios.get(url);
        setShop(r.data);
    }

    useEffect(() => {
        getData()
    }, []);

    const cateAll = shop.map(it => it.category);
    const filterItm = cateAll.filter(Boolean);
    const cateList = [...new Set(filterItm)]


    return (
        <>
            <Routes>
                <Route path={`/`} element={<Layout cateList={cateList} />} >
                    <Route path={`/`} element={<Main shop={shop} />} />
                    <Route path={`/:cate`} element={<CateList shop={shop} cateList={cateList} />} />
                    <Route path={`/detali/:id`} element={<Detail shop={shop} cart={cart} setCart={setCart} num={num} setNum={setNum} />} />
                    <Route path={`/cart`} element={<Cart cart={cart} setCart={setCart} num={num} setNum={setNum} />} />
                </Route>

            </Routes>

        </>

    )
}

export default App;