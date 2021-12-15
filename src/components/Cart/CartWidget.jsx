import Button from "react-bootstrap/Button"
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom";

function CartWidget() {
    return (
        <div>
            <Link to="/cart">
                <Button variant="warning"> <FaShoppingCart /> </Button>
            </Link>
        </div>
    )
}

export default CartWidget
