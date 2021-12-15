import {useState} from "react";
import {Link} from "react-router-dom"
import {BsCheck} from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button"
import "./CambioBtn.css"

const PrimerBoton = ({primerCambio}) => {
    return  (<Button variant="dark" size="lg" onClick={primerCambio}>
                    Agregar
                </Button>
    )
}

const SegundoBoton = ({onAdd}) => {
    return (
    <Button variant="warning" size="lg" onClick={onAdd}>
                    ¿Confirmas?
                </Button>
    )
}

export const TercerBoton = () => {
    return (
        <>
                <Button variant="success" size="lg" className="hvr-buzz-out" >  Confirmado <BsCheck /></Button>
            <Link to="/cart">
                <Button variant="warning"  className="hvr-buzz-out" >  Ir al carrito <FaShoppingCart /></Button>
            </Link>
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
