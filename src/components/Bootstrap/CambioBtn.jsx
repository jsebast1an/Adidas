import {useState} from "react";
import Button from "react-bootstrap/Button"
import {BsCheck} from "react-icons/bs";
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
        <Button variant="success" size="lg" className="hvr-buzz-out">  Confirmado <BsCheck /></Button>
    )
    
}

export default function CambioBtn({onAdd}) {

    const [boton, setBoton] = useState("botonAdd")

    const botonAgregar = () => {
        setBoton("botonConfirmar")
    }

    return (
        <>
            {
                boton === "botonAdd" ?
                <PrimerBoton primerCambio={botonAgregar} /> :
                <SegundoBoton onAdd={onAdd} />

            }
        </>
    )
}
