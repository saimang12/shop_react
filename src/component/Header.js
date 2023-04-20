import { Link } from "react-router-dom";
import Nav from "./Nav";

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
                    cart
                </div>
            </div>
        </header>
    )
}

export default Header;