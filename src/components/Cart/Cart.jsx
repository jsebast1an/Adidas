import Table from "react-bootstrap/Table";
import { useCartContext } from '../../context/CartContext';
import Button from "react-bootstrap/Button";
import { BsTrashFill } from "react-icons/bs";


function Cart() { 

    const {cartList, removeItem} = useCartContext()
    
    return (
        <div className="text-center container mt-4">

            <div data-aos="fade-left"> 
                <Table striped bordered hover variant="light" className="m-1">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>YEAR</th>
                            <th>PRICE</th>
                            <th>-</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            cartList.map(prod => 
                                    
                                        <tr key={prod.id}>
                                        <td>{prod.cantidad}</td>
                                        <td>{prod.nombre}</td>
                                        <td>{prod.year}</td>
                                        <td>{prod.cantidad * prod.precio}</td>
                                        <td><Button variant="danger" onClick={() => {removeItem(prod);}} > <BsTrashFill /></Button></td>
                                        </tr>
                                    )
                        }
                        </tbody>
                </Table>
            </div>
            
        </div>
    )
}

export default Cart
