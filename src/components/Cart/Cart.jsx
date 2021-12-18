import Table from "react-bootstrap/Table";
import { useCartContext } from '../../context/CartContext';
import Button from "react-bootstrap/Button";
import { BsTrashFill } from "react-icons/bs";
import Formu from "../Formu/Formu";
import {Link} from "react-router-dom"

function Cart() { 

    const {cartList, removeItem, emptyCart, cartSpan, cartTotal} = useCartContext()
    
    return (
        <div>
        { cartSpan === 0  ? 
            <div className="text-center container mt-4" data-aos="fade-right">
                <div data-aos="flip-left">
                        <h2>¡No tienes items agregados a tu carrito!</h2> 
                        <Link to="/"><Button> Ir a la tienda</Button></Link>
                </div>
            </div>

                        :

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
                                                <td>{prod.precio * prod.cantidad}</td>
                                                <td><Button variant="danger" onClick={() => {removeItem(prod)}} > <BsTrashFill /></Button></td>
                                                </tr>
                                            )
                                }
                                </tbody>
                            </Table>
                            <h4> Total: {cartTotal}  ARS </h4>
                                <Button className="mx-2" variant="danger" onClick={emptyCart}>Empty cart <BsTrashFill /></Button>
                      {/*           <Button className="mx-2" variant="success" onClick={generarOrden}>Order <BsCheck2 /></Button> */}
                    </div>


                    <div className="my-4 border rounded formuStyle " data-aos="fade-right">

                        <h2 className="my-2"> Data and delivery</h2>

                        <Formu></Formu>

                    </div>

                </div>
                
                
        }
    </div>
    )
}

export default Cart
