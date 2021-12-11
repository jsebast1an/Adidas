import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button"

function CartWidget() {
    return (
        <div>
            <Button variant="warning"> <FaShoppingCart /> </Button>
        </div>
    )
}

export default CartWidget
