import {useState} from "react";
import {Link} from "react-router-dom"
import {BsCheck, BsArrowLeft} from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button"
import "./CambioBtn.css"

const PrimerBoton = ({primerCambio}) => {
    return  (<Button variant="dark" size="lg" onClick={primerCambio}>
                    Add cart
                </Button>
    )
}

const SegundoBoton = ({onAdd}) => {
    return (
    <Button variant="warning" size="lg" onClick={onAdd}>
                    ¿Are you sure?
                </Button>
    )
}

export const TercerBoton = () => {
    return (
        <>
                <Button variant="success" size="lg" className="hvr-buzz-out" >  Added to cart <BsCheck /></Button>
                
                <div>

                    <Link to="/">
                        <Button variant="danger"  className="hvr-buzz-out mx-1" > <BsArrowLeft /> Products </Button>
                    </Link>
                    <Link to="/cart">
                        <Button variant="warning"  className="hvr-buzz-out" >  Checkout cart <FaShoppingCart /></Button>
                    </Link>

                </div>
        </>
        )
    
}

export default function CambioBtn({onAdd}) {

    const [boton, setBoton] = useState(true)

    const botonAgregar = () => {
        setBoton(false)
    }

    return (
        <>
            {
                boton ?
                <PrimerBoton primerCambio={botonAgregar} /> :
                <SegundoBoton onAdd={onAdd} />

            }
        </>
    )
}
