import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CartNav = () => {
    return (
        <div className="ToCart">
            <Link to={`/cart`}>
                <BsCart3 />
            </Link>
        </div>
    )
}

export default CartNav