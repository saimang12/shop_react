import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { BsFillCartFill } from 'react-icons/bs';
import { useState } from "react";

const Header = ({ cateList, shop, setSearch }) => {
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    const r = shop.filter(it => it.name.includes(input)
        || it.category?.includes(input)
        || it.brand?.includes(input)
        || it.product_type?.includes(input)
    );



    const searchHandler = (e) => {
        e.preventDefault();
        if (input.length < 2) {
            alert('두글자 이상 입력해주세요');

        } else {
            setSearch(r)
            navigate(`/search/${input}`)
            console.log(r)
        }

    };
    return (
        <header className="header">
            <div className="inner">
                <div className="top">
                    <h1>
                        <Link to={`/`}>
                            <img src={process.env.PUBLIC_URL + `/img/grafflogo.png`} alt="로고이미지" />
                        </Link>
                    </h1>
                    <div className="search">
                        <form action="" onSubmit={searchHandler}>
                            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
                            <button onClick={searchHandler}>검색</button>
                        </form>
                    </div>
                    <div className="cart">
                        <Link to={`/cart`}>
                            <BsFillCartFill />
                        </Link>
                    </div>
                </div>
                <Nav cateList={cateList} />
            </div>
        </header>
    )
}

export default Header;