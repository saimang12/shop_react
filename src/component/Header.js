import { Link } from "react-router-dom";
import Nav from "./Nav";
import { BsFillCartFill } from 'react-icons/bs';

const Header = ({ cateList }) => {
    return (
        <header className="header">
            <div className="inner">
                <h1>
                    <Link to={`/`}>
                        LogoImg
                    </Link>
                </h1>
                <Nav cateList={cateList} />
                <div className="cart">
                    <Link to={`/cart`}>
                        <BsFillCartFill />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;