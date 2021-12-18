import Button from "react-bootstrap/Button"
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function CartWidget() {

    const {cartSpan} = useCartContext()

    return (
        <div>
            <Link to="/cart">
                <Button variant="warning"> <FaShoppingCart /> {cartSpan} </Button>
            </Link>
        </div>
    )
}

export default CartWidget
